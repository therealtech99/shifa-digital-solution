'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Zap, Users, Shield } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Award-Winning Quality',
    description: 'Recognized excellence in design and development',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Delivery',
    description: 'Agile methodology ensures rapid project completion',
    color: 'from-neon-blue to-cyan-500',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals with years of experience',
    color: 'from-neon-purple to-pink-500',
  },
  {
    icon: Shield,
    title: '100% Satisfaction',
    description: 'Guaranteed quality and ongoing support',
    color: 'from-green-400 to-emerald-500',
  },
]

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-dark-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">SHIFA DIGITAL</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            We combine technical expertise with creative innovation to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-strong rounded-2xl p-6 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
