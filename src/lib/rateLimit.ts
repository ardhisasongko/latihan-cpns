// WARNING: Simple in-memory rate limiter.
// Ini hanya cocok untuk demo atau environment single-instance.
// Di production dengan Cloudflare Workers / multi-instance, memori ini tidak terbagi antar instance.
// Sebaiknya gunakan Redis (Upstash) atau Cloudflare KV/Rate Limiting untuk skala produksi.
type RateLimitInfo = {
  count: number;
  resetTime: number; // epoch ms
};

const windowMs = 60 * 1000; // 1 minute
const maxRequests = 20; // max requests per window per IP

const ipMap = new Map<string, RateLimitInfo>();

function getIP(req: Request): string {
  // Cloudflare menjamin keaslian header ini (client tidak bisa memalsukannya).
  const cfIp = req.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();

  // x-forwarded-for bisa berisi daftar; hop TERAKHIR adalah yang ditambahkan
  // proxy terpercaya kita. Hop pertama dikendalikan client (bisa dipalsukan).
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const hops = forwarded.split(",").map((h) => h.trim()).filter(Boolean);
    if (hops.length > 0) return hops[hops.length - 1];
  }

  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  // Fail-closed: semua request tanpa IP yang bisa dipercaya masuk satu bucket,
  // bukan bucket per-host yang bisa dirotasi client untuk bypass.
  return "unknown";
}

function cleanup() {
  const now = Date.now();
  for (const [ip, info] of ipMap.entries()) {
    if (now > info.resetTime) {
      ipMap.delete(ip);
    }
  }
}
// run cleanup every minute (wrapped to avoid Cloudflare Workers crash on top-level setInterval)
if (typeof setInterval !== "undefined") {
  try {
    setInterval(cleanup, windowMs);
  } catch {
    // Ignore in edge environments where setInterval might be disabled
  }
}

export async function rateLimit(request: Request, options: { limit?: number; windowMs?: number } = {}) {
  const { limit = maxRequests, windowMs: wMs = windowMs } = options;
  const ip = getIP(request);
  const now = Date.now();
  let info = ipMap.get(ip);
  if (!info || now >= info.resetTime) {
    // reset window
    info = { count: 0, resetTime: now + wMs };
    ipMap.set(ip, info);
  }
  if (info.count >= limit) {
    const retryAfter = Math.ceil((info.resetTime - now) / 1000);
    throw new Error(`Rate limit exceeded. Retry after ${retryAfter} seconds`);
  }
  info.count += 1;
}

// Limiter khusus endpoint sensitif (login/register): lebih ketat dari default.
// Key-nya kombinasi IP + email supaya serangan ke satu akun tidak mengunci semua user.
export async function rateLimitAuth(requestKey: string, options: { limit?: number; windowMs?: number } = {}) {
  const { limit = 5, windowMs: wMs = 5 * 60 * 1000 } = options;
  const now = Date.now();
  let info = ipMap.get(requestKey);
  if (!info || now >= info.resetTime) {
    info = { count: 0, resetTime: now + wMs };
    ipMap.set(requestKey, info);
  }
  if (info.count >= limit) {
    const retryAfter = Math.ceil((info.resetTime - now) / 1000);
    throw new Error(`Rate limit exceeded. Retry after ${retryAfter} seconds`);
  }
  info.count += 1;
}

export function getClientKey(req: Request): string {
  return getIP(req);
}
