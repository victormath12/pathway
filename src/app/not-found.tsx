import { config } from "@psi/commons/lib/next-auth/config"
import { getServerSession } from "next-auth"
import Image from "next/image"
import Link from "next/link"

export default async function PageNotFound() {
  const session = await getServerSession(config)

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <Image
        src="/404.svg"
        alt="Página não encontrada"
        width={462}
        height={432}
        className="animate-bounce animate-infinite animate-duration-[1500ms] animate-delay-300 animate-ease-in animate-normal xs:hidden sm:hidden"
      />
      <h1 className="font-bold text-2xl mb-4">404</h1>
      <h2 className="text-xl">Ops! essa página não existe</h2>
      {session?.user ? (
        <Link
          href="/my-sessions"
          className="bg-primary h-[46px] text-white rounded-full flex items-center justify-center px-5 mt-10"
        >
          Voltar para tela das minhas sessões
        </Link>
      ) : (
        <Link
          href="/login"
          className="bg-primary h-[46px] text-white rounded-full flex items-center justify-center px-5 mt-10"
        >
          Voltar para tela de login
        </Link>
      )}
    </div>
  )
}
