import {
  addDays,
  addMinutes,
  format,
  getDay,
  parseISO,
  setHours,
  setMinutes,
} from "date-fns"
import { formatInTimeZone, toZonedTime } from "date-fns-tz"
import { ptBR } from "date-fns/locale"

import { AsYouType } from "libphonenumber-js"

const WeekDaysEnum = {
  SUNDAY: "SUNDAY",
  MONDAY: "MONDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
  THURSDAY: "THURSDAY",
  FRIDAY: "FRIDAY",
  SATURDAY: "SATURDAY",
} as const

export type WeekDayType = (typeof WeekDaysEnum)[keyof typeof WeekDaysEnum]

export const WeekdaysNumberEnum = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
} as const

export default class Helpers {
  static toLocalDate(date: Date, format: string = "yyyy-MM-dd'T'HH:mm:ssXXX") {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

    const localDate = toZonedTime(date, timeZone)
    return formatInTimeZone(localDate, timeZone, format, { locale: ptBR })
  }

  static toLocalTime(time: string) {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const [hours, minutes] = time.split(":").map(Number)
    const utcDate = new Date()
    utcDate.setUTCHours(hours, minutes)
    const zonedDate = toZonedTime(utcDate, timeZone)
    return formatInTimeZone(zonedDate, timeZone, "HH:mm", { locale: ptBR })
  }

  static getWeekDayDifference(args: {
    weekday: number
    targetDayOfWeek: number
  }): number {
    const { weekday, targetDayOfWeek } = args
    return weekday - targetDayOfWeek
  }

  static getWeekDayDate(args: { weekday: WeekDayType; date: string }): Date {
    const { weekday, date } = args
    const targetDayOfWeek = getDay(parseISO(date))
    const desiredDayOfWeek = WeekdaysNumberEnum[weekday]
    const daysDifference = this.getWeekDayDifference({
      weekday: desiredDayOfWeek,
      targetDayOfWeek: targetDayOfWeek,
    })

    const newDate = addDays(date, daysDifference)
    return setMinutes(setHours(newDate, 0), 0)
  }

  static setLocalTime(
    time: string,
    formatStr: string = "yyyy-MM-dd'T'HH:mm:ssXXX",
    weekday: WeekDayType
  ): string {
    const currentDate = new Date()

    const weekdayDate = this.getWeekDayDate({
      weekday,
      date: currentDate.toISOString(),
    })

    const [hours, minutes] = time.split(":").map(Number)
    weekdayDate.setHours(hours, minutes, 0, 0)
    return formatInTimeZone(weekdayDate, "UTC", formatStr)
  }

  static setLocalDateWithTime(date: Date, time: string) {
    const [hours, minutes] = time.split(":").map(Number)
    date.setHours(hours, minutes, 0, 0)
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return formatInTimeZone(date, timeZone, "yyyy-MM-dd'T'HH:mm:ssXXX")
  }

  static getInitialsName(name: string) {
    const splitName = name?.trim().split(" ")
    const firstInitial = splitName[0].charAt(0).toUpperCase() ?? ""
    const lastInitial =
      splitName[splitName.length - 1].charAt(1).toUpperCase() ?? ""

    return `${firstInitial}${lastInitial}`
  }

  static generateDayTimerList() {
    const INTERVAL = 60
    const startTime = setMinutes(setHours(new Date(), 5), 0)
    const endTime = setMinutes(setHours(new Date(), 23), 0)
    const timeList: string[] = []
    let currentTime = startTime

    while (currentTime < endTime) {
      timeList.push(format(currentTime, "HH:mm"))
      currentTime = addMinutes(currentTime, INTERVAL)
    }

    return timeList
  }

  static maskPhoneNumberBR(value: string) {
    const phone = value.replace(/\D/g, "")

    if (phone.length !== 12 && phone.length !== 13) return phone

    const pattern = /^(\d{2})(\d{2})(\d{5})(\d{4})$/
    return phone.replace(pattern, "+$1 ($2) $3-$4")
  }

  static getStartOfWeek(dateString: string): string {
    const date = new Date(dateString)
    const dayOfWeek = date.getDay()
    const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1
    date.setDate(date.getDate() - diff)
    date.setHours(0, 0, 0, 0)

    return date.toISOString()
  }

  static checkCrediCardType(cc: string) {
    const patterns = [
      { type: "AMEX", pattern: /^3[47]/ },
      { type: "VISA", pattern: /^4/ },
      { type: "MASTERCARD", pattern: /^5[1-5]/ },
      { type: "MASTERCARD", pattern: /^2[2-7]/ },
      { type: "DISCOVER", pattern: /^6011/ },
      { type: "DISCOVER", pattern: /^62[24568]/ },
      { type: "DISCOVER", pattern: /^6[45]/ },
      { type: "DINERS", pattern: /^3[0689]/ },
      { type: "JCB", pattern: /^35/ },
      { type: "CHINA_UNION_PAY", pattern: /^62/ },
      { type: "CHINA_UNION_PAY", pattern: /^81/ },
      { type: "HIPERCARD", pattern: /^(606282|3841)/ },
      {
        type: "ELO",
        pattern:
          /^(4011|4312|4389|4514|4576|5041|5066|5090|6277|6362|6363|6504|6505|6506|6507|6509|6516|6550)/,
      },
    ]

    for (let i = 0; i < patterns.length; i++) {
      if (patterns[i].pattern.test(cc)) {
        return patterns[i].type
      }
    }

    return undefined
  }

  static validatePhoneNumber(phone: string) {
    const asYouType = new AsYouType()
    asYouType.input(phone)
    const number = asYouType.getNumber()
    return {
      phoneNumber: number?.number,
      countryCode: number?.country,
      countryCallingCode: number?.countryCallingCode,
      carrierCode: number?.carrierCode,
      nationalNumber: number?.nationalNumber,
      internationalNumber: number?.formatInternational(),
      possibleCountries: number?.getPossibleCountries().join(", "),
      isValid: number?.isValid(),
      isPossible: number?.isPossible(),
      uri: number?.getURI(),
      type: number?.getType(),
    }
  }
}
