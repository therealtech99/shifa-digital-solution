import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import FloatingActionButtons from '@/components/common/FloatingActionButtons'
import ParticleWrapper from '@/components/layout/ParticleWrapper'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shifadigitalsolution.in'

export const metadata: Metadata = {
  title: 'SHIFA DIGITAL SOLUTION - Premium Digital Agency',
  description: 'Building High-Performance Digital Products That Scale Your Business. Custom website development, mobile app development, UI/UX design, and digital transformation services.',
  keywords: 'digital agency, web development, mobile app development, UI/UX design, software solutions, digital transformation',
  authors: [{ name: 'SHIFA DIGITAL SOLUTION' }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'SHIFA DIGITAL SOLUTION - Premium Digital Agency',
    description: 'Building High-Performance Digital Products That Scale Your Business',
    type: 'website',
    url: siteUrl,
    siteName: 'SHIFA DIGITAL SOLUTION',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHIFA DIGITAL SOLUTION - Premium Digital Agency',
    description: 'Building High-Performance Digital Products That Scale Your Business',
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticleWrapper />
        {children}
        <FloatingActionButtons />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#1a1a24',
              color: '#fff',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 240, 255, 0.2)',
            },
          }}
        />
      </body>
    </html>
  )
}
