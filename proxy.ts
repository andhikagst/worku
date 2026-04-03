import { auth as proxy } from "@/auth";
import { NextResponse } from "next/server";

export default proxy((req) => {
  const isLoggedIn = !!req.auth; 
  const { pathname } = req.nextUrl;

  const isProtected =
    pathname.startsWith("/profile") ||
    pathname.startsWith("/career-discovery/question") ||
    pathname.startsWith("/career-discovery/result") ||
    pathname.startsWith("/career-discovery/roadmap") ||
    pathname.startsWith("/ai");

  const isAuthRoute = pathname.startsWith("/login") || pathname.startsWith("/register");

  if (isProtected && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/home", req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$).*)"],
};