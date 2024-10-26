"use client"
import Animation from "@psi/commons/lib/lottie/loading.json"
import { useEffect, useState } from "react"
import Lottie from "react-lottie"

export const EmbedInlead = () => {
  const [loading, setLoading] = useState<boolean>(true)

  const config = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  useEffect(() => {
    ; (() => {
      setTimeout(() => setLoading(false), 2000)
    })()
  }, [])

  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <Lottie options={config} height="15%" width="15%" />
        </div>
      ) : (
        <iframe
          src="https://inlead.digital/pathway-onboarding/"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-navigation"
          width="100%"
          height="100%"
        />
      )}
    </div>
  )
}
