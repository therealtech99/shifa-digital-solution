'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Calendar, X, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const PHONE_NUMBER = '919234578836'
const PHONE_DISPLAY = '+91 9234578836'
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I am interested in your digital services. Can you please provide more information?')

export default function FloatingActionButtons() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleCall = () => {
    window.location.href = `tel:${PHONE_DISPLAY.replace(/\s/g, '')}`
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${WHATSAPP_MESSAGE}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Main Button */}
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative w-16 h-16 bg-gradient-to-br from-neon-blue via-neon-purple to-pink-500 rounded-full shadow-2xl flex items-center justify-center group"
            style={{
              boxShadow: '0 0 30px rgba(0, 240, 255, 0.6), 0 0 60px rgba(176, 38, 255, 0.4)',
            }}
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-7 h-7 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="phone"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-7 h-7 text-white" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulsing Ring Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-neon-blue"
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.8, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          </motion.button>

          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-20 right-0 space-y-4"
              >
                {/* Call Now Button */}
                <motion.button
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCall}
                  className="group relative flex items-center space-x-3 glass-strong rounded-full px-6 py-4 shadow-xl hover:shadow-2xl transition-all"
                  style={{
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 240, 255, 0.3)',
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">Call Now</p>
                    <p className="text-neon-blue text-xs">{PHONE_DISPLAY}</p>
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-500/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.button>

                {/* Book Appointment Button */}
                <motion.button
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsExpanded(false)
                    window.location.href = '/contact?type=appointment'
                  }}
                  className="group relative flex items-center space-x-3 glass-strong rounded-full px-6 py-4 shadow-xl hover:shadow-2xl transition-all"
                  style={{
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(176, 38, 255, 0.3)',
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">Book Appointment</p>
                    <p className="text-neon-purple text-xs">Free Consultation</p>
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple/20 to-pink-500/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                </motion.button>

                {/* WhatsApp Button */}
                <motion.button
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsApp}
                  className="group relative flex items-center space-x-3 glass-strong rounded-full px-6 py-4 shadow-xl hover:shadow-2xl transition-all"
                  style={{
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)',
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">WhatsApp</p>
                    <p className="text-green-400 text-xs">Chat with us</p>
                  </div>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Backdrop */}
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            />
          )}
        </div>
      )}
    </AnimatePresence>
  )
}
