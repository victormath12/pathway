"use server"
import api from "@psi/commons/lib/axios"

export const startMeeting = async (): Promise<string | null> => {
  try {
    const response = await api.get("/video-meeting/generate-jwt")
    if (response.status === 200) return response.data.token

    return null
  } catch (error) {
    return null
  }
}

export const sendNPS = async (args: {
  rate: number
  message: string
  sessionId: string
}): Promise<boolean> => {
  const payload = {
    ...args,
    date: new Date().toISOString().split("T")[0],
  }

  try {
    const response = await api.post("/v1/app/session/nps", payload)

    return response.status === 201
  } catch (error) {
    return false
  }
}
