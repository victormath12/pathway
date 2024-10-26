"use client"
import { ChevronDown, HelpCircle, LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export function DropdownSignOut(args: { name?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-x-2 items-center">
        {args.name ?? "Menu"} <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-48 space-y-2 mr-2">
        <DropdownMenuItem asChild>
          <Link
            className="gap-x-2"
            href="https://api.whatsapp.com/send/?phone=5511984408755&text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20a%20plataforma&type=phone_number&app_absent=0"
            target="_blank"
          >
            <HelpCircle className="size-4" />
            Central de ajuda
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-x-2 text-red-500"
          onClick={() => signOut()}
        >
          <LogOut className="size-4" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
