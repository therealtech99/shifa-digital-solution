'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Globe, Smartphone, Palette, ShoppingCart, Code, Settings } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, high-performance websites built with modern technologies',
    color: 'from-neon-blue to-cyan-500',
    href: '/services/website-development',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    color: 'from-neon-purple to-pink-500',
    href: '/services/mobile-app-development',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that enhance user experience',
    color: 'from-cyan-500 to-neon-blue',
    href: '/services/ui-ux-design',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete online store solutions that drive sales',
    color: 'from-pink-500 to-neon-purple',
    href: '/services/ecommerce',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions for your unique business needs',
    color: 'from-neon-blue to-purple-500',
    href: '/services/custom-software',
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your systems running',
    color: 'from-purple-500 to-neon-blue',
    href: '/services/maintenance',
  },
]

export default function ServicesOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-dark-surface relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-neon-blue mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Complete Digital Solutions</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            From concept to deployment, we deliver end-to-end digital solutions 
            that transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="glass-strong rounded-2xl p-8 h-full cursor-pointer group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 mb-4">
                      {service.description}
                    </p>
                    <span className="text-neon-blue flex items-center space-x-2 group-hover:space-x-4 transition-all">
                      <span>Learn More</span>
                      <span>→</span>
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
