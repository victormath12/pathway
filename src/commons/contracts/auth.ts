export declare namespace IAuth {
  interface User {
    id: string
    firstName: string
    email: string
    avatarUrl?: string
  }

  interface Response {
    tokenType: "Bearer"
    accessToken: string
    refreshToken: string
    expiresIn: number
    user?: User
  }

  interface SendEmailForgotPassword {
    sendBy: "mail"
    sendTo: string
    status: "SUCCESS" | "FAILED"
  }
}
