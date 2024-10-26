export declare namespace ICheckout {
  interface Transaction {
    patientId: string
    slot: {
      id: string
      weekNumber: string
      year: string
    }
    plansOfferedByProfessionalId: string
    paymentProvider: string
    paymentType: PaymentType
    createPaymentDto: CreatePaymentDto
  }

  interface PaymentType {
    creditCard: boolean
  }

  interface CreatePaymentDto {
    card: Card
    customer: Customer
    saveCreditCard: boolean
    creditCardDefault: boolean
  }

  interface Card {
    number: string
    name: string
    cvv: string
    validate: string
  }

  interface Customer {
    name: string
    email: string
    country: string
    document: Document
    address: Address
    phone: Phone
    birthday: string
  }

  interface Document {
    type: string
    number: string
  }

  interface Address {
    street: string
    street_number: string
    neighborhood: string
    city: string
    state: string
    zipcode: string
  }

  interface Phone {
    ddi?: string
    ddd: string
    number: string
  }
}
