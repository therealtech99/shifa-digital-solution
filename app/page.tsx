import Hero from '@/components/home/Hero'
import ServicesOverview from '@/components/home/ServicesOverview'
import TrustBadges from '@/components/home/TrustBadges'
import StatsCounter from '@/components/home/StatsCounter'
import Testimonials from '@/components/home/Testimonials'
import IndustriesServed from '@/components/home/IndustriesServed'
import CTA from '@/components/home/CTA'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServicesOverview />
      <TrustBadges />
      <StatsCounter />
      <Testimonials />
      <IndustriesServed />
      <CTA />
      <Footer />
    </main>
  )
}
