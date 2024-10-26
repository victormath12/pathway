"use client"
import { ReactNode } from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Transition } from 'react-transition-group';

export default function ResultLayout({
  children,
}: {
  children: ReactNode
}) {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 0)
  }, [])

  return (
    <div className="flex flex-col h-full bg-background">
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
      {!loading && <div className="w-screen h-screen bg-background">{children}</div>}
    </div>
  )
}
