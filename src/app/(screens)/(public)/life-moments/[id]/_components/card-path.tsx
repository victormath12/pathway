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

interface CardPathProps {
  path: {
    id: string;
    name: string;
    category?: {
      id: string;
      slug: string;
      name: string;
    };
    status?: "active" | "inactive";
    enroll_availability_start_date?: Date,
    managers?: {
      id?: string;
      name?: string;
      thumbnail_url?: string;
    }[];
    total_members?: number;
    subscription?: {
      status: "subscribed" | "not_subscribed";
    };
  }
}

export function CardPath(
  args: CardPathProps
) {
  return (
    <Card className="max-w-md mx-auto overflow-hidden mb-8">
      <div className={`${args?.path?.status == "active" ? "bg-emerald-50" : "bg-red-50"} h-[57px] flex items-center justify-center`}>
        <p className="text-gray-700">
          <strong className={args?.path?.status == "active" ? "text-emerald-500" : "text-red-500"}>
            {args?.path?.status == "active" ? "Open for join" : "Closed"}
          </strong>
        </p>
      </div>
      <CardContent className="pt-6 space-y-5">
        <div className="grid grid-cols-[10fr_90fr] items-center gap-x-4">
          <Avatar className="w-[72px] h-[72px]">
            <AvatarImage src={args.path?.managers && args.path?.managers?.length > 0 ? args.path?.managers[0]?.thumbnail_url : args.path?.name} />
            <AvatarFallback>
              {Helpers.getInitialsName(args.path?.name)}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h2 className="text-base font-semibold">
              {args.path?.name}
            </h2>
            <p className="text-sm text-gray-500">
              {args.path?.category?.name}
            </p>
          </div>
        </div>
        {args?.path?.status == "active" &&
          <Link
            href=""
            className="flex items-center border rounded-sm justify-center h-[46px] bg-primary text-white gap-x-2"
          >
            Join this path <ArrowRight className="size-5" />
          </Link>
        }
      </CardContent>
    </Card>
  )
}
