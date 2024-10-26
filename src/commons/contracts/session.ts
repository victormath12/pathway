export declare namespace ISession {
  interface Root {
    event: Event
    plan: Plan
    patient: Patient
  }

  interface Event {
    id: string
    eventType: "ONLINE_SESSION"
    name: string
    description: string | null
    status:
      | "CONFIRMED"
      | "COMPLETED"
      | "RESCHEDULED"
      | "POSTPONED"
      | "RESCHEDULE_PENDING"
      | "CANCELED"

    active: boolean
    organizationId: string
    professionalId: string
    rescheduledEventId: string | null
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: any
    professional: Professional
    backgroundColor: string
    textColor: string
    borderColor: string
    period: Period
    session: Session
  }

  interface Professional {
    firstName: string
    lastName: string
    nickName: string
    avatarUrl: string
  }

  interface Period {
    startAt: string
    endAt: string
  }

  interface Session {
    id: string
    videoCallProvider: string
    videoCallExternalId: string
    videoCallRoomUri: string
    sessionIndex: number
    eventId: string
    plansSubscribedByPatientId: string
    active: boolean
    patientId: string
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: any
  }

  interface Plan {
    id: string
    name: string
    description: string
    price: number
    sessionsQuantity: number
    paymentProvider: string
    paymentPlanId: string
    paymentProfessionalSplitDefault: number
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string
    recurrence: string
    organizationId: string
  }

  interface Patient {
    id: string
    documentType: string
    documentNumber: string
    firstName: string
    lastName: string
    fullName: string
    bio: string | null
    avatarUrl: string | null
    birthdate: string | null
    maritalStatus: "SINGLE" | "MARRIED" | "DIVORCED" | "WIDOWED" | null
    gender: string
    customProperties: any | null
    step: string
    active: boolean
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string | null
    accountId: string | null
  }

  interface ConfirmMyPlan {
    active: boolean
    availableToPatient: boolean
    createdAt: string
    createdBy: string
    endAt: string
    hideEnd: string
    hideStart: string
    id: string
    lockStart: string
    professionalId: string
    recurrence: "WEEKLY" | "BIWEEKLY"
    startAt: string
    weekday: string
  }
}
