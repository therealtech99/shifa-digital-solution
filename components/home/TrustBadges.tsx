'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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
