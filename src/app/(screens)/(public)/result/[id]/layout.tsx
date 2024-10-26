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
      </div>
      <div className="w-screen h-screen bg-background">{children}</div>
    </div>
  )
}