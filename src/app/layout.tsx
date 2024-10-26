import { GoogleAnalytics } from "@next/third-parties/google"
import { Poligon as poligonFont } from "@psi/commons/lib/font"
import { cn } from "@psi/commons/lib/utils"
import type { Metadata } from "next"
import { Toaster } from "sonner"
import "./globals.css"
import { Providers } from "./providers"

const metadata: Metadata = {
  title: "Psi do Futuro",
  description: "Psi do Futuro - Plataforma de agendamento de consultas online",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={cn(
          "h-screen antialiased flex flex-col",
          poligonFont.className
        )}
      >
        <Providers>{children}</Providers>
        <Toaster richColors position="top-right" />
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string}
          />
        )}
      </body>
    </html>
  )
}