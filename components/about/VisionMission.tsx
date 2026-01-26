'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Eye } from 'lucide-react'

export default function VisionMission() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-dark-surface">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-strong rounded-2xl p-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-cyan-500 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              To empower businesses worldwide with innovative digital solutions that drive growth, 
              enhance user experiences, and create lasting value. We combine technical excellence 
              with creative vision to deliver products that exceed expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-strong rounded-2xl p-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-pink-500 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              To become the leading digital transformation partner globally, recognized for our 
              commitment to innovation, quality, and client success. We envision a future where 
              every business can leverage cutting-edge technology to achieve extraordinary results.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
