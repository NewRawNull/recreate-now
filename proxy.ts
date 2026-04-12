import { auth as loginHandlerProxy } from "@/auth";
import { NextResponse } from "next/server";

export default loginHandlerProxy((req) => {
  if (!req.auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
});

export const config = {
  matcher: ["/mainfeed/:path*", "/settings/:path*"],
};
