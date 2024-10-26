"use server"

import { IProfessional } from "@psi/commons/contracts/professional"
import api from "@psi/commons/lib/axios"

export const getProfileById = async (args: {
  id: string
}): Promise<IProfessional.Item | null> => {
  try {
    const response = await api.get(`/v1/core/professional/${args.id}`)
    if (response.status === 200) return response.data.professional

    return null
  } catch (error) {
    return null
  }
}

export const getAvailableStotsByProfessionalId = async (args: {
  id: string
  startDate?: string
  isRescheduling?: boolean
}) => {
  try {
    const response = await api.get<{ professional: IProfessional.Item }>(
      `/v1/core/professional/${args.id}?startDate=${args.startDate}&recurrence=WEEKLY&isRescheduling=${!!args.isRescheduling}`,
    )

    if (response.status === 200) {
      return {
        professional: {
          name: response.data.professional.nickName ?? "-",
          carreerTrail:
            response.data.professional.professionalCarreerTrail?.[0]?.detail ??
            "-",
          crp: response.data.professional.professionalBusiness?.crp,
          avatarUrl: response.data.professional?.avatarUrl,
        },
        slots: response.data.professional.availableSlots,
      }
    }
  } catch (error) {
    return null
  }
}
