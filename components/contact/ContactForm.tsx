'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success('Message sent successfully! We will get back to you soon.')
        reset()
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-strong rounded-2xl p-8"
    >
      <h2 className="text-3xl font-bold mb-6 gradient-text">Send us a Message</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white/80 mb-2">Name *</label>
            <input
              {...register('name')}
              type="text"
              className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-white/80 mb-2">Email *</label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white/80 mb-2">Phone</label>
            <input
              {...register('phone')}
              type="tel"
              className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="+1 (234) 567-890"
            />
          </div>
          <div>
            <label className="block text-white/80 mb-2">Company</label>
            <input
              {...register('company')}
              type="text"
              className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="Your Company"
            />
          </div>
        </div>

        <div>
          <label className="block text-white/80 mb-2">Service Interested In *</label>
          <select
            {...register('service')}
            className="w-full px-4 py-3 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
          >
            <option value="">Select a service</option>
            <option value="website">Website Development</option>
            <option value="mobile">Mobile App Development</option>
            <option value="uiux">UI/UX Design</option>
            <option value="ecommerce">E-commerce Solutions</option>
            <option value="custom">Custom Software</option>
            <option value="maintenance">Maintenance & Support</option>
            <option value="other">Other</option>
          </select>
          {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service.message}</p>}
        </div>

        <div>
          <label className="block text-white/80 mb-2">Message *</label>
          <textarea
            {...register('message')}
            rows={6}
            className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue resize-none"
            placeholder="Tell us about your project..."
          />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}
