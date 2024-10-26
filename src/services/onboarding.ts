import { IOnboarding } from "@psi/commons/contracts/onboarding"
import api from "@psi/commons/lib/axios"

export const getMatchResult = async (args: {
  id: string
}): Promise<IOnboarding.Match[]> => {
  try {
    const response = await api.post("/v1/core/professional/match", {
      organizationId: "413f2b26-e4c9-4dae-b91f-5afd48fc05e9",
      // ANSIEDADE
      anamnesisIdList: ["6512d330-c1f0-4447-995b-5e3a95bb86f4"],
      gender: "FEMALE",
      therapyTypes: ["38f31c2f-ba0b-43c8-9ed2-86c6eb7be66f"],
    })

    if (response.status === 201 && response.data.professionals.length > 0) {
      return response.data.professionals
    }

    return []
  } catch (error) {
    return []
  }
}
