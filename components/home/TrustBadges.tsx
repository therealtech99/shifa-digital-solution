'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Award, CheckCircle } from 'lucide-react'

const badges = [
  { name: 'Google Partner', logo: '/logos/google.svg' },
  { name: 'Microsoft Certified', logo: '/logos/microsoft.svg' },
  { name: 'AWS Partner', logo: '/logos/aws.svg' },
  { name: 'Clutch Top Developer', logo: '/logos/clutch.svg' },
  { name: 'Upwork Top Rated', logo: '/logos/upwork.svg' },
  { name: 'ISO Certified', logo: '/logos/iso.svg' },
]

export default function TrustBadges() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 bg-dark-bg relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-white/60 mb-2">Trusted By Industry Leaders</p>
          <h3 className="text-2xl font-semibold text-white">
            Certified & <span className="gradient-text">Recognized Excellence</span>
          </h3>
        </motion.div>

        {/* MSME Registration - Prominently Displayed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div className="glass-strong rounded-2xl p-8 max-w-2xl mx-auto border-2 border-green-400/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-400/30">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h4 className="text-white font-bold text-lg">MSME Registered</h4>
                </div>
                <p className="text-white/80 mb-1">Government Verified Business</p>
                <p className="text-neon-blue font-mono text-sm font-semibold">
                  UDYAM-JH-08-0045200
                </p>
                <p className="text-white/60 text-xs mt-2">
                  Verified & Trusted Digital Solutions Provider
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass rounded-xl p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer"
            >
              <div className="w-24 h-24 bg-white/5 rounded-lg flex items-center justify-center">
                <span className="text-white/40 text-sm font-medium">{badge.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
