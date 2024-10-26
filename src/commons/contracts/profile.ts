export declare namespace IProfile {
  interface Patient {
    id: string
    accountId: string | null
    documentNumber: string
    documentType: string
    firstName: string
    lastName: string
    fullName: string
    avatarUrl: string | null
    birthdate: string | null
    gender: "MALE" | "FEMALE"
    maritalStatus: "SINGLE" | "MARRIED" | "DIVORCED" | "WIDOWED" | null
    bio: string | null
    step:
      | "NONE"
      | "NON_PAYING"
      | "FIRST_SESSION_PURCHASED"
      | "FIRST_SESSION_SCHEDULED"
      | "FIRST_SESSION_COMPLETED"
      | "SECOND_SESSION_SCHEDULED"
      | "SECOND_SESSION_COMPLETED"
      | "PACKAGE"

    customProperties: string | null
    address: Address[]
    socialLinks: any[]
    account: Account
    contacts: Contact[]
    termsAcceptance: any[]
    anamnesis: string[]
    plansSubscribed: PlansSubscribed[]
    sessions: Session[]
    nextRecommendedPlan: NextRecommendedPlan
  }

  interface NextRecommendedPlan {
    id: string
    planType:
      | "EXPERIMENTAL"
      | "RECOMMENDED"
      | "REGULAR"
      | "SECONDARY"
      | "MIGRATION"

    paymentProvider: "ZOOM" | "PAGARME" | "ENOTAS"
    paymentProfessionalReceptorId: string
    paymentProfessionalSplitCustom: string | null
    planId: string
    professionalId: string
    active: boolean
    createdAt: string
    updatedAt: string
    createdBy: string
    updatedBy: string | null
    plan: {
      id: string
      name: string
      description: string
      price: number
      sessionsQuantity: number
      paymentProvider: "ZOOM" | "PAGARME" | "ENOTAS"
      paymentPlanId: string
      recurrence: "WEEKLY" | "BIWEEKLY"
      organizationId: string
    }
  }

  interface Account {
    creditCard: {
      cardId: string
      lastFourNumbers: string
      brand: string
    }
  }

  interface Contact {
    id: string
    type: "PHONE" | "EMAIL" | "WHATSAPP"
    value: string
  }

  interface Address {
    id: string
    active: boolean
    city: string
    complement: string
    district: string
    isBillingAddress: boolean
    isMainAddress: boolean
    lat: number | null
    lng: number | null
    number: string
    postalCode: string
    reference: string | null
    state: string
    street: string
  }

  interface PlansSubscribed {
    id: string
    createdAt: string
    active: boolean
    nextRecommendedPlan: NextRecommendedPlan
    plansOfferedByProfessional: {
      professionalId: string
      plan: {
        id: string
        price: number
        name: string
      }
    }
  }

  interface Session {
    id: string
    sessionIndex: number
    videoCallExternalId: string
    videoCallProvider: "ZOOM"
    videoCallRoomUri: string
    plansSubscribedByPatientId: string
    event: Event
    sessionNps: any[]
  }

  interface Event {
    id: string
    name: string
    status:
      | "CONFIRMED"
      | "COMPLETED"
      | "RESCHEDULED"
      | "POSTPONED"
      | "RESCHEDULE_PENDING"
      | "CANCELED"
      | "NO_SHOW"

    description: string | null
    eventType: "ONLINE_SESSION"
    dateStart: string
    dateEnd: string
    rescheduledEventId: string | null
    rescheduledEvent: any | null
    professional: {
      id: string
      avatarUrl: string
      firstName: string
      lastName: string
      nickName: string
    }
  }
}
