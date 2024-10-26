import Image from "next/image"
import { ReactNode } from "react"

export default function ResultLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center px-6 py-4 bg-background">
        <div className="flex gap-x-1 pt-4">
          <Image
            src="/logo-icon.svg"
            alt="Logo"
            width={230}
            height={24}
          />
        </div>
      </div>
      <div className="w-screen h-screen bg-background">{children}</div>
    </div>
  )
}
