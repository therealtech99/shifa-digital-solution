'use client'

import { useSearchParams } from 'next/navigation'
import ContactForm from './ContactForm'
import AppointmentBooking from './AppointmentBooking'

export default function ContactFormSelector() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')

  return type === 'appointment' ? <AppointmentBooking /> : <ContactForm />
}
