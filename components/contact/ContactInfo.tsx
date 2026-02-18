'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    info: 'info@shifadigital.com',
    link: 'mailto:info@shifadigital.com',
    color: 'from-neon-blue to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    info: '+91 9234578836',
    link: 'tel:+919234578836',
    color: 'from-neon-purple to-pink-500',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    info: '6th Cross, RMV 2nd Stage, Puttaiah Compound, Bangalore 560094',
    link: 'https://maps.google.com/?q=6th+Cross+RMV+2nd+Stage+Puttaiah+Compound+Bangalore+560094',
    color: 'from-cyan-500 to-neon-blue',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    info: 'Mon - Fri: 9:00 AM - 6:00 PM',
    link: '#',
    color: 'from-pink-500 to-neon-purple',
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-3xl font-bold mb-4 gradient-text">Contact Information</h2>
        <p className="text-white/70 mb-8">
          We're here to help! Reach out to us through any of these channels.
        </p>
      </div>

      <div className="space-y-4">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          return (
            <motion.a
              key={method.title}
              href={method.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="glass-strong rounded-xl p-6 flex items-start space-x-4 group cursor-pointer"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-neon-blue transition-colors">
                  {method.title}
                </h3>
                <p className="text-white/60">{method.info}</p>
              </div>
            </motion.a>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-strong rounded-xl p-6 mt-8"
      >
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">WhatsApp</h3>
            <p className="text-white/60">Chat with us instantly</p>
          </div>
        </div>
        <a
          href="https://wa.me/919234578836?text=Hello!%20I%20am%20interested%20in%20your%20digital%20services.%20Can%20you%20please%20provide%20more%20information?"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary w-full text-center"
        >
          Start WhatsApp Chat
        </a>
      </motion.div>
    </motion.div>
  )
}
