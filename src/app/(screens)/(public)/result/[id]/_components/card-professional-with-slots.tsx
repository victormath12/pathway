"use client"
import { ScheduleCalendar } from "@psi/commons/components/custom/schedule-calendar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@psi/commons/components/ui/accordion"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@psi/commons/components/ui/avatar"
import { Card, CardContent } from "@psi/commons/components/ui/card"
import Helpers from "@psi/commons/helpers"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CardProfessionalWithSlotsProps {
  professional: {
    name: string
    avatar: string
    bio: string
  }
  slots: {
    slotId: string
    professionalId: string
    startAt: string
    endAt: string
    weekday: string
    slotDate: string
    parity: null
    recurrence: string
  }[]
}

export function CardProfessionalWithSlots(
  args: CardProfessionalWithSlotsProps
) {
  return (
    <Card className="max-w-md mx-auto overflow-hidden">
      <div className="bg-emerald-50 h-[57px] flex items-center justify-center">
        <p className="text-gray-700">
          Primeira sessão: <strong className="text-emerald-500">R$190</strong>
        </p>
      </div>
      <CardContent className="pt-6 space-y-5">
        <div className="grid grid-cols-[10fr_90fr] items-center gap-x-4">
          <Avatar className="w-[72px] h-[72px]">
            <AvatarImage src={args.professional.avatar} />
            <AvatarFallback>
              {Helpers.getInitialsName(args.professional.name)}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h2 className="text-base font-semibold">
              {args.professional.name}
            </h2>
            <p className="text-sm text-gray-500">
              Especialização em psicopatologia
            </p>
          </div>
        </div>

        <p className="text-gray-500 text-sm line-clamp-3">
          {args.professional.bio}
        </p>
        <Link
          href=""
          className="flex items-center border rounded-full justify-center h-[46px] border-black gap-x-2"
        >
          Mais detalhes <ArrowRight className="size-5" />
        </Link>
        <Accordion type="single" collapsible className="w-full border-t">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger>Horários disponíveis</AccordionTrigger>
            <AccordionContent>
              <ScheduleCalendar
                slots={args.slots}
                onChange={() => console.log("")}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
