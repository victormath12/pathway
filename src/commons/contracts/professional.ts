export declare namespace IProfessional {
  interface Item {
    id: string
    documentNumber: string
    documentType: string
    accountId: any
    firstName: string
    lastName: string
    nickName: string
    bio: string
    religion?: string
    race?: string
    avatarUrl: string
    gender: "MALE" | "FEMALE"
    maritalStatus: "SINGLE" | "MARRIED" | "DIVORCED" | "WIDOWED" | null
    customProperties: any
    meetingProvider: string
    meetingAccountActive: boolean
    meetingAccountId: string
    professionalContact: Contact[]
    professionalSocialLink: any[]
    anamnesis: Anamnesi[]
    therapyType: TherapyType[]
    unmatchedParams: UnmatchedParams
    address: Address
    professionalBusiness: ProfessionalBusiness
    professionalCarreerTrail: ProfessionalCarreerTrail[]
    availableSlots: AvailableSlot[]
    slots: Slot[]
    offeredPlans: OfferedPlan[]
  }

  interface Contact {
    id: string
    type: string
    value: string
  }

  interface Anamnesi {
    id: string
    name: string
  }

  interface TherapyType {
    id: string
    name: string
  }

  interface UnmatchedParams {
    gender: "FEMALE" | "MALE" | null
    anamnesis: Anamnesi[]
  }

  interface Address {
    id: string
    street: string
    number: string
    district: string
    complement: string
    country: any
    city: string
    state: string
    postalCode: string
  }

  interface ProfessionalBusiness {
    id: string
    cnpj: string
    crp: string
  }

  interface ProfessionalCarreerTrail {
    id: string
    detail: string
    name: string
    type?: string
    startDate: string
  }

  interface AvailableSlot {
    slotId: string
    professionalId: string
    startAt: string
    endAt: string
    weekday:
      | "SUNDAY"
      | "MONDAY"
      | "TUESDAY"
      | "WEDNESDAY"
      | "THURSDAY"
      | "FRIDAY"
      | "SATURDAY"

    slotDate: string
    parity?: string
    recurrence: "WEEKLY" | "BIWEEKLY"
  }

  interface Slot {
    slotId: string
    professionalId: string
    startAt: string
    endAt: string
    weekday:
      | "SUNDAY"
      | "MONDAY"
      | "TUESDAY"
      | "WEDNESDAY"
      | "THURSDAY"
      | "FRIDAY"
      | "SATURDAY"

    slotDate: string
    parity?: string
    recurrence: "WEEKLY" | "BIWEEKLY"
  }

  interface Plan {
    paymentPlanId: string
    paymentProfessionalSplitDefault: number
    name: string
    price: number
    id: string
    createdBy: string
    description: string
    sessionsQuantity: number
    paymentProvider: string
    organizationId: string
    recurrence: string
  }

  interface OfferedPlan {
    id: string
    paymentProfessionalReceptorId: string
    paymentProfessionalSplitCustom: any
    planType: string
    planId: string
    createdBy: string
    active: boolean
    paymentProvider: string
    professionalId: string
    plan: Plan
  }
}
