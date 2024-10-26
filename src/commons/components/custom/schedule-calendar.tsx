"use client"
import Helpers from "@psi/commons/helpers"
import { cn } from "@psi/commons/lib/utils"
import { format } from "date-fns-tz/format"
import { ptBR } from "date-fns/locale"
import { ReactNode, useCallback, useMemo, useRef } from "react"

interface Slot {
  slotId: string
  startAt: string
  endAt: string
  slotDate: string
}

interface SlotsProps {
  slots: Slot[]
  startWeekOnCurrentDay?: boolean
  onChange: (args: {
    day?: Date
    startAt?: string
    endAt?: string
    slotId?: string
  }) => void
  selected?: { day?: Date; startAt?: string; endAt?: string } | null
}

const Chip = ({
  children,
  disabled,
  onSelected,
  selected,
}: {
  children: ReactNode
  onSelected?: () => void
  selected?: boolean
  disabled?: boolean
}) => (
  <button
    onClick={onSelected}
    disabled={disabled}
    className={cn(
      "text-sm font-semibold w-full h-8 px-2 flex items-center justify-center rounded cursor-pointer xs:text-xs xs:px-0 xs:min-w-14",
      selected
        ? "bg-primary text-white"
        : "bg-gray-100 hover:bg-primary hover:text-white",
      disabled &&
        "bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100 hover:text-gray-400"
    )}
  >
    {children}
  </button>
)

export function ScheduleCalendar({
  slots,
  startWeekOnCurrentDay,
  onChange,
  selected,
}: SlotsProps) {
  const timeScrollRef = useRef<HTMLDivElement>(null)

  const fnSelectedDay = useCallback(
    (day: Date) => {
      onChange({ day })
      if (timeScrollRef.current) timeScrollRef.current.scrollLeft = 0
    },
    [onChange]
  )

  const fnSelectedTime = useCallback(
    (args: { day: Date; startAt: string; endAt: string; slotId?: string }) => {
      onChange({ ...args })
    },
    [onChange]
  )

  const slotsByDay = useMemo(() => {
    const sortedSlots = [...slots].sort(
      (a, b) => new Date(a.slotDate).getTime() - new Date(b.slotDate).getTime()
    )

    let orderedSlots: Slot[] = []

    if (startWeekOnCurrentDay) {
      const today = new Date()
      const todayDayString = today.toDateString()

      const todayIndex = sortedSlots.findIndex(
        (slot) => new Date(slot.slotDate).toDateString() === todayDayString
      )

      if (todayIndex !== -1) {
        orderedSlots = [
          ...sortedSlots.slice(todayIndex),
          ...sortedSlots.slice(0, todayIndex),
        ]
      } else {
        orderedSlots = sortedSlots
      }
    } else {
      // Se não começar no dia atual, sempre começar na segunda-feira
      orderedSlots = sortedSlots
      const firstMondayIndex = orderedSlots.findIndex(
        (slot) => new Date(slot.slotDate).getDay() === 1
      )

      if (firstMondayIndex !== -1) {
        orderedSlots = [
          ...orderedSlots.slice(firstMondayIndex),
          ...orderedSlots.slice(0, firstMondayIndex),
        ]
      }
    }

    return orderedSlots.reduce((acc, slot) => {
      const date = new Date(slot.slotDate)
      const dateString = date.toDateString()

      if (!acc[dateString]) {
        acc[dateString] = {
          date,
          slots: [],
        }
      }
      acc[dateString].slots.push(slot)
      return acc
    }, {} as Record<string, { date: Date; slots: Slot[] }>)
  }, [slots, startWeekOnCurrentDay])

  const filteredSlots = useMemo(() => {
    if (!selected?.day) return []

    const selectedDayString = selected.day.toDateString()
    return slotsByDay[selectedDayString]?.slots || []
  }, [slotsByDay, selected?.day])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between xs:overflow-x-auto xs:flex-nowrap xs:space-x-2 sm:overflow-x-auto sm:flex-nowrap sm:space-x-2 [&::-webkit-scrollbar]:hidden">
        {Object.entries(slotsByDay).map(([dayString, slots]) => (
          <div
            key={dayString}
            className="flex flex-col space-y-6 xs:flex-shrink-0 xs:min-w-[80px] sm:min-w-[80px] sm:flex-shrink-0"
          >
            <div className="flex flex-col items-center border-b border-gray-200 pb-4">
              <p className="text-sm text-gray-400 capitalize mb-1">
                {format(new Date(dayString), "EEE", { locale: ptBR }).slice(
                  0,
                  3
                )}
              </p>
              <Chip
                onSelected={() => fnSelectedDay(new Date(dayString))}
                selected={selected?.day?.toDateString() === dayString}
              >
                {Helpers.toLocalDate(new Date(dayString), "dd MMM")}
              </Chip>
            </div>
            <div className="flex flex-col space-y-2 xs:hidden sm:hidden">
              {slots.slots.map((slot, idx) => (
                <Chip
                  key={idx}
                  selected={
                    selected?.day?.toDateString() === dayString &&
                    selected?.startAt === slot.startAt
                  }
                  onSelected={() =>
                    fnSelectedTime({
                      day: new Date(dayString),
                      startAt: slot.startAt,
                      endAt: slot.endAt,
                      slotId: slot.slotId,
                    })
                  }
                >
                  {Helpers.toLocalTime(slot.startAt)}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selected?.day && (
        <div
          ref={timeScrollRef}
          className="md:hidden lg:hidden xl:hidden 2xl:hidden flex overflow-x-auto space-x-2 [&::-webkit-scrollbar]:hidden"
        >
          {filteredSlots.map((slot, idx) => {
            return (
              <Chip
                key={idx}
                selected={selected?.startAt === slot.startAt}
                onSelected={() =>
                  fnSelectedTime({
                    day: selected.day!,
                    endAt: slot.endAt,
                    startAt: slot.startAt,
                    slotId: slot.slotId,
                  })
                }
              >
                {Helpers.toLocalTime(slot.startAt)}
              </Chip>
            )
          })}
        </div>
      )}
      <hr />
      {selected?.day && selected.startAt && (
        <div className="flex justify-center flex-col items-center text-gray-500">
          <p className="text-sm">Gostaria de reagendar sua sessão para</p>
          <strong className="text-sm">
            {Helpers.toLocalDate(selected.day, "EEEE, dd 'de' MMMM")},{" "}
            {Helpers.toLocalTime(selected.startAt)}?
          </strong>
        </div>
      )}
    </div>
  )
}
