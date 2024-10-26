import { IOnboarding } from "@psi/commons/contracts/onboarding"
import api from "@psi/commons/lib/axios"

export const getLifeMoments = async (args: {
  user: string
}): Promise<IOnboarding.LifeMoment[]> => {
  try {
    const response = await api.get("/pathways-context/life-moments", {
      headers: {
        "x_user": args.user
      }
    })

    console.log(response.data.datasets)

    if (response.status === 200 && response.data.datasets.length > 0) {
      return response.data.datasets
    }

    return []
  } catch (error) {
    return []
  }
}

export const getLifeMomentsPaths = async (args: {
  lifeMomentId: string
}): Promise<IOnboarding.Path[]> => {
  try {
    const response = await api.get("/pathways-context/pathways", {
    })

    console.log(response.data.datasets)

    if (response.status === 200 && response.data.datasets.length > 0) {
      return response.data.datasets
    }

    return []
  } catch (error) {
    return []
  }
}


export const getPathDetail = async (args: {
  lifeMomentId: string
}): Promise<IOnboarding.Path[]> => {
  try {
    const response = await api.get("/pathways-context/pathways", {
    })

    console.log(response.data.datasets)

    if (response.status === 200 && response.data.datasets.length > 0) {
      return response.data.datasets
    }

    return []
  } catch (error) {
    return []
  }
}