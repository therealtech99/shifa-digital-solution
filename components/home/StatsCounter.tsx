'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Users, Briefcase, Award, Globe } from 'lucide-react'

const stats = [
  { icon: Users, value: 500, suffix: '+', label: 'Happy Clients', color: 'text-neon-blue' },
  { icon: Briefcase, value: 1000, suffix: '+', label: 'Projects Completed', color: 'text-neon-purple' },
  { icon: Award, value: 50, suffix: '+', label: 'Awards Won', color: 'text-cyan-400' },
  { icon: Globe, value: 30, suffix: '+', label: 'Countries Served', color: 'text-pink-400' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
    }
  }, [inView, value])

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold gradient-text">
      {count}{suffix}
    </span>
  )
}

export default function StatsCounter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.color.replace('text-', 'from-')} to-transparent rounded-2xl flex items-center justify-center glass`}
                >
                  <Icon className={`w-10 h-10 ${stat.color}`} />
                </motion.div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-white/70 text-lg mt-4">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
