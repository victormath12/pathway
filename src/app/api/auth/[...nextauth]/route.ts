import { config } from "@psi/commons/lib/next-auth/config"
import NextAuth from "next-auth/next"

const handler = NextAuth(config)

export { handler as GET, handler as POST }
