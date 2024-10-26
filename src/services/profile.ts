"use server"

import { IProfile } from "@psi/commons/contracts/profile"
import api from "@psi/commons/lib/axios"

export const me = async (): Promise<IProfile.Patient | null> => {
  try {
    const response = await api.get("/v1/core/patient/me")
    if (response.status === 200) return response.data.patient

    return null
  } catch (error) {
    return null
  }
}
