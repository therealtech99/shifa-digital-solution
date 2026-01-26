import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutHero from '@/components/about/AboutHero'
import VisionMission from '@/components/about/VisionMission'
import WhyChooseUs from '@/components/about/WhyChooseUs'
import ProcessFlow from '@/components/about/ProcessFlow'
import Team from '@/components/about/Team'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <VisionMission />
      <WhyChooseUs />
      <ProcessFlow />
      <Team />
      <Footer />
    </main>
  )
}
