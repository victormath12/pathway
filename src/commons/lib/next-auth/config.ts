import { signIn } from "@psi/services/auth"
import { AuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const config: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "", type: "text" },
        password: { label: "", type: "password" },
      },
      async authorize(credentials) {
        const username = credentials?.username as string
        const password = credentials?.password as string

        try {
          const auth = await signIn({ password, username })
          if (auth == null) throw new Error("invalid_credentials")

          if (auth && auth.status === "FORCE_CHANGE_PASSWORD")
            throw new Error("force_change_password")

          return {
            id: auth.user?.id ?? crypto.randomUUID(),
            email: auth.user?.email?.toLocaleLowerCase() ?? "--",
            name: auth.user?.firstName ?? "Israel",
            image: auth.user?.avatarUrl ?? null,
            accessToken: auth.accessToken,
            refreshToken: auth.refreshToken,
            // expiresAt,
          }
        } catch (error) {
          throw new Error(error as string)
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.id as string,
        accessToken: token.accessToken as string,
      }

      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.accessToken = user.accessToken
        token.expiresAt = user.expiresAt
        token.refreshToken = user.refreshToken
      }

      return token
    },
  },
}
