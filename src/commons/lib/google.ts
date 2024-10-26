import Helpers from "../helpers"

export default class GoogleIntegration {
  static async addEventCalendar(args: {
    videoCallUrl: string
    name: string
    dateStart: string
    dateEnd: string
  }) {
    const dateStart = Helpers.toLocalDate(
      new Date(args.dateStart),
      "yyyy-MM-dd'T'HH:mm:ss"
    )

    const dateEnd = Helpers.toLocalDate(
      new Date(args.dateEnd),
      "yyyy-MM-dd'T'HH:mm:ss"
    )

    const description = `Oii, ${args.name}! Para acessar suas sessões e realizar reagendamentos acesse nossa plataforma através do link: 

      https://app.psidofuturo.com.br${args.videoCallUrl}

      *Caso você faça um reagendamento via plataforma, este lembrete não será atualizado automaticamente.`

    const urlCalendar = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(
      "Sessão de terapia"
    )}&dates=${new Date(dateStart)
      .toISOString()
      .replace(/-|:|\.\d{3}/g, "")}/${new Date(dateEnd)
      .toISOString()
      .replace(/-|:|\.\d{3}/g, "")}&location=${encodeURIComponent(
      "Online"
    )}&details=${encodeURIComponent(description)}`

    return urlCalendar
  }
}
