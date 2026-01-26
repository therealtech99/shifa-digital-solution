import { Suspense } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import AppointmentBooking from '@/components/contact/AppointmentBooking'
import ContactInfo from '@/components/contact/ContactInfo'
import MapSection from '@/components/contact/MapSection'
import ContactFormSelector from '@/components/contact/ContactFormSelector'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <div className="bg-dark-surface">
        <div className="container-custom py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <Suspense fallback={<ContactForm />}>
              <ContactFormSelector />
            </Suspense>
            <ContactInfo />
          </div>
        </div>
      </div>
      <MapSection />
      <Footer />
    </main>
  )
}
