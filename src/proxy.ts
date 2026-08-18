import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const sessionToken =
    request.cookies.get("authjs.session-token")?.value ||
    request.cookies.get("__Secure-authjs.session-token")?.value;

  const isLoggedIn = !!sessionToken;
  const { pathname } = request.nextUrl;

  const isAuthPage = pathname === "/login" || pathname === "/register";

  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isLoggedIn && !isAuthPage && pathname !== "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
