import "next-auth"

declare module "next-auth" {
  interface User {
    accessToken?: string
    refreshToken?: string
    expiresAt?: number
  }

  interface Session {
    user: {
      id: string
      name: string
      email: string
      image?: string
      accessToken?: string
      expiresAt?: number
    }
  }
}
