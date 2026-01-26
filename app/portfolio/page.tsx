import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PortfolioHero />
      <PortfolioGrid />
      <Footer />
    </main>
  )
}
