import { NextResponse } from "next/server";

// CSP nonce per-request: Next.js menyuntik inline script hydration
// (self.__next_f) yang butuh nonce; 'unsafe-inline' sengaja tidak dipakai.
export function middleware() {
  const nonce = crypto.randomUUID().replaceAll("-", "");

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-eval' 'nonce-${nonce}' https:`,
    "style-src 'self' 'unsafe-inline' https:",
    "img-src 'self' data: https:",
    "font-src 'self' https:",
    "connect-src 'self' https:",
    "frame-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
  ].join("; ");

  const response = NextResponse.next();
  response.headers.set("x-csp-nonce", nonce);
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:js|css|png|svg|ico|woff2?)$).*)"],
};