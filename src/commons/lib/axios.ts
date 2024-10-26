import axios, { AxiosError } from "axios"
import { getServerSession } from "next-auth"
import Log from "../logging"
import { config } from "./next-auth/config"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND,
})

api.interceptors.request.use(async (conf) => {
  const session = await getServerSession(config)

  if (session?.user?.accessToken) {
    conf.headers.Authorization = `Bearer ${session?.user.accessToken}`
  }
  return conf
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error: AxiosError) => {
    Log({
      error: true,
      response: (error.response?.data as any)?.message,
      url: error.config?.url,
      payload: error.config?.data,
    })

    return Promise.reject(error)
  }
)

export default api
