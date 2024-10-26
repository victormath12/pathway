"use client"
import { cn } from "@psi/commons/lib/utils"
import { addMinutes, differenceInSeconds, isBefore } from "date-fns"
import { Clock, TimerOff } from "lucide-react"
import { useRouter } from "next/navigation"
import { Fragment, useCallback, useEffect, useState } from "react"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"

function checkTimeElapsed(
  inputDate: Date,
  minutes: number
): {
  timePassed: boolean
  timeLeft: number
} {
  const currentTime = new Date()
  const tenMinutesAfter = addMinutes(inputDate, minutes)
  const timeLeftInSeconds = differenceInSeconds(tenMinutesAfter, currentTime)

  const timePassed = isBefore(tenMinutesAfter, currentTime)

  return {
    timePassed,
    timeLeft: timePassed ? 0 : timeLeftInSeconds,
  }
}

export function CountDown(args: {
  minutes: number
  description: string
  content: string
  disabledAction?: boolean
  startTime: Date // Adicionando a data/hora de início aqui
}) {
  const router = useRouter()
  const [modalEndend, setModalEndend] = useState<boolean>(false)
  const [timeLeft, setTimeLeft] = useState<number>(0) // Inicializa o tempo restante

  useEffect(() => {
    // Calcula o tempo restante usando a função checkTimeElapsed
    const { timePassed, timeLeft } = checkTimeElapsed(
      args.startTime,
      args.minutes
    )

    if (timePassed) {
      setModalEndend(true)
      setTimeLeft(0)
    } else {
      setTimeLeft(timeLeft)
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setModalEndend(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [args.startTime])

  const fnFormatTime = useCallback((seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0")
    const s = (seconds % 60).toString().padStart(2, "0")
    return `${m}:${s}`
  }, [])

  const fnRefreshCountDown = useCallback(() => {
    window.location.reload()
  }, [])

  const progressBarWidth = `${(timeLeft / (args.minutes * 60)) * 100}%`
  const isTimeCritical = timeLeft <= 300 // 5 minutes in seconds

  return (
    <Fragment>
      {modalEndend && (
        <Dialog open={modalEndend}>
          <DialogContent
            className="w-[440px] rounded-md xs:w-full sm:w-full"
            hideCloseButton
          >
            <DialogHeader className="flex justify-center text-center items-center">
              <TimerOff className="size-12 text-primary mb-4 mt-5" />
              <DialogTitle className="font-medium mb-2">
                Tempo esgotado!
              </DialogTitle>
              <DialogDescription>{args.content}</DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex gap-x-4 flex-row">
              {!args.disabledAction && (
                <Button className="w-full" onClick={fnRefreshCountDown}>
                  Tentar novamente
                </Button>
              )}
              <Button
                variant="outline"
                className="w-full"
                onClick={() => router.replace("/my-sessions")}
              >
                Voltar para minhas sessões
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      {!modalEndend && (
        <div
          className={cn(
            "absolute right-6 top-20 border-2 w-72 rounded-sm overflow-hidden xs:left-1/2 xs:-translate-x-1/2 xs:w-screen xs:rounded-none xs:border-0 xs:top-0 sm:w-screen sm:left-1/2 sm:-translate-x-1/2 sm:top-0 sm:border-0 sm:rounded-none",
            isTimeCritical
              ? "border-red-500 bg-red-50 animate-shake"
              : "border-blue-500 bg-blue-50"
          )}
        >
          <div className="flex items-center gap-x-2 p-4">
            <Clock
              className={cn(
                "size-5",
                isTimeCritical ? "text-red-500" : "text-blue-500"
              )}
            />
            <h3
              className={cn(
                "font-semibold text-lg",
                isTimeCritical ? "text-red-500" : "text-blue-500"
              )}
            >
              {fnFormatTime(timeLeft)}
            </h3>
            <p
              className={cn(
                "text-sm",
                isTimeCritical ? "text-red-900" : "text-[#234888]"
              )}
            >
              {args.description}
            </p>
          </div>
          <div
            className={cn(
              "h-1.5 transition-all",
              isTimeCritical ? "bg-red-500" : "bg-blue-500"
            )}
            style={{ width: progressBarWidth }}
          />
        </div>
      )}
    </Fragment>
  )
}
