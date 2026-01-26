'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, Globe, Smartphone, Palette, ShoppingCart, Code, Settings } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, high-performance websites built with modern technologies like Next.js, React, and Node.js. Responsive, SEO-optimized, and lightning-fast.',
    features: ['Custom Design', 'SEO Optimized', 'Fast Performance', 'Mobile Responsive'],
    href: '/services/website-development',
    color: 'from-neon-blue to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. Built with React Native, Flutter, or native technologies.',
    features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'App Store Optimization'],
    href: '/services/mobile-app-development',
    color: 'from-neon-purple to-pink-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that enhance user experience and drive conversions. User-centered design approach with modern aesthetics.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    href: '/services/ui-ux-design',
    color: 'from-cyan-500 to-neon-blue',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete online store solutions that drive sales. From product catalogs to payment integration and inventory management.',
    features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Analytics'],
    href: '/services/ecommerce',
    color: 'from-pink-500 to-neon-purple',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions for your unique business needs. Enterprise applications, automation tools, and business process optimization.',
    features: ['Custom Solutions', 'API Integration', 'Cloud Deployment', 'Scalable Architecture'],
    href: '/services/custom-software',
    color: 'from-neon-blue to-purple-500',
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your systems running smoothly. 24/7 monitoring, updates, and technical support.',
    features: ['24/7 Support', 'Regular Updates', 'Security Patches', 'Performance Monitoring'],
    href: '/services/maintenance',
    color: 'from-purple-500 to-neon-blue',
  },
]

export default function ServicesList() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-dark-surface">
      <div className="container-custom">
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-strong rounded-2xl p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 gradient-text">{service.title}</h2>
                    <p className="text-white/70 text-lg mb-6">{service.description}</p>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-white/60">
                          <span className="w-2 h-2 bg-neon-blue rounded-full"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="inline-flex items-center space-x-2 text-neon-blue hover:text-neon-purple transition-colors font-semibold"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
