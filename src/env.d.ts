import type { D1Database, RateLimit } from "@cloudflare/workers-types";

declare global {
  interface CloudflareEnv {
    DB: D1Database;
    AUTH_RATE_LIMITER: RateLimit;
  }
}

export {};
