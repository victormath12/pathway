"use server"

import { ISession } from "@psi/commons/contracts/session"
import api from "@psi/commons/lib/axios"
import { revalidatePath } from "next/cache"

export const getSessionById = async (args: {
  id: string
}): Promise<ISession.Root | null> => {
  try {
    const response = await api.get(`/v1/core/event/get-by-id?id=${args.id}`)
    if (response.status === 200) return response.data

    return null
  } catch (error) {
    return null
  }
}

export const getSlotById = async (args: { id: string }) => {
  try {
    const response = await api.get(`/v1/core/slot/get-by-id?id=${args.id}`)
    if (response.status === 200) return response.data.slot

    return null
  } catch (error) {
    return null
  }
}

export const rescheduleSession = async (args: {
  dateStart: string
  dateEnd: string
  eventId: string
}): Promise<boolean> => {
  try {
    const response = await api.put("/v1/core/schedule/reschedule-session", {
      ...args,
    })

    if (response.status === 200) {
      revalidatePath("/my-sessions")
      return true
    }

    return false
  } catch (error) {
    return false
  }
}

export const manageSessionSchedule = async (args: {
  originalEventId: string
  approveSchedule: boolean
  dateStart?: string
  dateEnd?: string
}): Promise<boolean> => {
  try {
    const response = await api.put("/v1/core/schedule/approve-reschedule", {
      ...args,
    })
    if (response.status === 200) {
      revalidatePath("/my-sessions")
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

export const lockSlotByCheckout = async (args: {
  id: string
  lockStart: string
}): Promise<ISession.ConfirmMyPlan | null> => {
  try {
    const response = await api.put("/v1/core/slot/update", { ...args })

    if (response.status === 200) return response.data.slot

    return null
  } catch (error) {
    return null
  }
}

export const unLockSlotByCheckout = async (args: {
  slotId: string
}): Promise<boolean> => {
  try {
    const response = await api.put("/v1/core/slot/update", {
      id: args.slotId,
      lockStart: null,
    })
    return response.status === 200
  } catch (error) {
    return false
  }
}
