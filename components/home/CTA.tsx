'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-neon-blue/10 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-12 md:p-16 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Let's discuss how we can help you achieve your digital goals and scale your business to new heights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Link
              href="/contact"
              className="btn-primary group flex items-center space-x-2 text-lg"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919234578836"
              className="btn-secondary group flex items-center space-x-2 text-lg relative overflow-hidden"
            >
              <Phone className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Call Us Now</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center justify-center space-x-8 text-white/60"
          >
            <a href="mailto:info@shifadigital.com" className="flex items-center space-x-2 hover:text-neon-blue transition-colors">
              <Mail className="w-5 h-5" />
              <span>info@shifadigital.com</span>
            </a>
            <span className="hidden md:block">|</span>
            <a href="tel:+919234578836" className="flex items-center space-x-2 hover:text-neon-blue transition-colors">
              <Phone className="w-5 h-5" />
              <span>+91 9234578836</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
