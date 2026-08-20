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
  // Try common headers
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    // x-forwarded-for can be a list, take the first
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  // fallback (may be undefined in some environments)
  return req.headers.get("host") || "unknown";
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
  } catch (e) {
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