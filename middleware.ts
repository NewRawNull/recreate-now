import { auth as loginHandlerMiddleware } from "@/auth";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export default loginHandlerMiddleware((req) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
});

export const config = {
  matcher: ["/mainfeed/:path*", "/settings/:path*"],
};
