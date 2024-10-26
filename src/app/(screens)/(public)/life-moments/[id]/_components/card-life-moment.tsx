"use client"
import { Card, CardContent } from "@psi/commons/components/ui/card"
import Helpers from "@psi/commons/helpers"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@psi/commons/components/ui/avatar"

interface CardLifeMomentsProps {
  lifeMoment: {
    name: string
    description: string
    thumb?: string
    category?: {
      id?: string
      name?: string
      slug?: string
    }
  }
}

export function CardLifeMoment(
  args: CardLifeMomentsProps
) {
  return (
    <Card className="max-w-md mx-auto overflow-hidden mb-8">
      <CardContent className="pt-6 space-y-5">
        <div className="grid grid-cols-[10fr_90fr] items-center gap-x-4">
          <Avatar className="w-[72px] h-[72px] rounded-none">
            <AvatarImage src={args.lifeMoment?.thumb} />
            <AvatarFallback>
              {Helpers.getInitialsName(args.lifeMoment?.name)}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h2 className="text-base font-semibold">
              {args.lifeMoment?.name}
            </h2>
            <p className="text-sm text-gray-500">
              {args.lifeMoment?.category?.name}
            </p>
          </div>
        </div>

        <p className="text-gray-500 text-sm line-clamp-3">
          {args.lifeMoment?.description}
        </p>
        <Link
          href=""
          className="flex items-center border rounded-full justify-center h-[46px] border-black gap-x-2"
        >
          More details <ArrowRight className="size-5" />
        </Link>
      </CardContent>
    </Card>
  )
}
