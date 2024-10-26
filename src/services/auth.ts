"use server"

import { IAuth } from "@psi/commons/contracts/auth"
import api from "@psi/commons/lib/axios"

export const signIn = async (args: { username: string; password: string }) => {
  try {
    const { password, username } = args
    const response = await api.post("/v1/core/account/auth/login", {
      username: `br:${username}`,
      password,
      accountType: "PAX",
    })
    if (response.status !== 201) return null

    return response.data
  } catch (error) {
    return null
  }
}

export const sendMailForgotPassword = async ({
  username,
}: {
  username: string
}): Promise<IAuth.SendEmailForgotPassword | null> => {
  try {
    const response = await api.post("/v1/core/account/auth/reset-password", {
      username: `br:${username}`,
      accountType: "PSI",
    })

    if (response.status === 201 && response.data.status === "SUCCESS") {
      return response.data
    }
    return null
  } catch (error) {
    return null
  }
}

export const confirmResetPassword = async (args: {
  username: string
  code: string
  newPassword: string
}) => {
  try {
    const response = await api.post(
      "/v1/core/account/auth/reset-password-confirm",
      args
    )

    if (response.status === 201) return true

    return false
  } catch (error) {
    return false
  }
}

export const changePasswordTemporary = async (args: {
  username: string
  temporaryPassword: string
  newPassword: string
}): Promise<boolean> => {
  try {
    const response = await api.post(
      "/v1/core/account/auth/change-temporary-password",
      args
    )

    return response.status === 201
  } catch (error) {
    return false
  }
}
