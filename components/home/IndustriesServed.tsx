'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, ShoppingBag, Heart, GraduationCap, Car, Briefcase } from 'lucide-react'

const industries = [
  { icon: Building2, name: 'Healthcare', color: 'from-red-500 to-pink-500' },
  { icon: ShoppingBag, name: 'E-commerce', color: 'from-blue-500 to-cyan-500' },
  { icon: Heart, name: 'Finance', color: 'from-green-500 to-emerald-500' },
  { icon: GraduationCap, name: 'Education', color: 'from-purple-500 to-indigo-500' },
  { icon: Car, name: 'Automotive', color: 'from-orange-500 to-red-500' },
  { icon: Briefcase, name: 'Real Estate', color: 'from-yellow-500 to-orange-500' },
]

export default function IndustriesServed() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-dark-bg relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-neon-blue mb-4">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Solutions for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            We've helped businesses across various industries achieve their digital transformation goals
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-strong rounded-2xl p-6 text-center cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <p className="text-white font-semibold group-hover:text-neon-blue transition-colors">
                  {industry.name}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
