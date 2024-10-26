"use server"

import { ICheckout } from "@psi/commons/contracts/checkout"
import api from "@psi/commons/lib/axios"

export const transactionPayment = async (
  payload: ICheckout.Transaction
): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await api.post("/v1/app/plan/subscribe", { ...payload })

    return { success: response.status === 201 }
  } catch (error) {
    return { success: false, error: (error as any).response.data }
  }
}
