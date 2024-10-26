import Image from "next/image"
import { ReactNode } from "react"

export default function OnboardingLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between border-b px-6 py-4">
        <div className="flex gap-x-1">
          <Image
            src="/logo-icon.svg"
            alt="Logo"
            width={180}
            height={24}
          />
        </div>
      </div>
      <div className="w-screen h-screen bg-background">{children}</div>
    </div>
  )
}
