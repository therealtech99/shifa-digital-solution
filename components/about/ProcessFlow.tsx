'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react'

const steps = [
  { icon: Search, title: 'Discovery', description: 'Understanding your business needs and goals' },
  { icon: Lightbulb, title: 'Strategy', description: 'Crafting a tailored solution strategy' },
  { icon: Code, title: 'Development', description: 'Building with cutting-edge technologies' },
  { icon: Rocket, title: 'Launch', description: 'Deploying and optimizing your solution' },
  { icon: CheckCircle, title: 'Support', description: 'Ongoing maintenance and improvements' },
]

export default function ProcessFlow() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-dark-surface relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  <div className="glass-strong rounded-2xl p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-dark-surface rounded-full flex items-center justify-center border-2 border-neon-blue">
                      <span className="text-neon-blue font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-white/60 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
