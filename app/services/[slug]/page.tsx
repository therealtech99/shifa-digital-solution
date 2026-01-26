import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceDetail from '@/components/services/ServiceDetail'

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetail slug={params.slug} />
      <Footer />
    </main>
  )
}
