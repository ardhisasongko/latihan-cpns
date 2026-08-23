import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const nonce = crypto.randomUUID().replaceAll("-", "");

  // React development mode membutuhkan `unsafe-eval` untuk debugging
  // (reconstruct callstacks). Production tetap ketat tanpa unsafe-eval.
  const isDev = process.env.NODE_ENV === "development";
  const scriptSrc = isDev
    ? `'self' 'unsafe-eval' 'unsafe-inline'`
    : `'self' 'nonce-${nonce}'`;

  const csp = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline' https:",
    "img-src 'self' data: https:",
    "font-src 'self' https:",
    "connect-src 'self' https:",
    "frame-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
  ].join("; ");

  // Next.js membaca CSP dari REQUEST headers saat render untuk memberi nonce
  // ke inline script hydration (self.__next_f). Tanpa ini, CSP produksi
  // memblokir semua inline script dan hydration gagal.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:js|css|png|svg|ico|woff2?)$).*)"],
};
