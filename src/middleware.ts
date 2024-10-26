export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    "/my-sessions/:path*",
    "/professional/:path*",
    "/checkout/:path*",
    "/session/:path*",
  ],
}
