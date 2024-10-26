import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function ErrorCustomRequest(args: {
  refreshURL: string
  description: string
}) {
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center flex-col mb-20">
        <Link
          className="gap-x-2 w-2/3 h-[46px] flex items-center justify-center rounded-full border border-input hover:bg-accent hover:text-accent-foreground"
          href="/my-sessions"
        >
          <ArrowLeft className="size-4" />
          Voltar
        </Link>
      </div>

      <p className="font-semibold">{args.description}</p>
      <p>
        Caso queria tentar novamente{" "}
        <Link href={args.refreshURL} className="text-blue-500 underline">
          clique aqui.
        </Link>
      </p>
      <p className="italic">
        Caso permaneça esse problema entre contato com nosso suporte.
      </p>
    </div>
  )
}
