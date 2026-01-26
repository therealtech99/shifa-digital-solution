import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesList from '@/components/services/ServicesList'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServicesList />
      <Footer />
    </main>
  )
}
