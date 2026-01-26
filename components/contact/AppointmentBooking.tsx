'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Mail, Phone, Loader2, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

const appointmentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
})

type AppointmentFormData = z.infer<typeof appointmentSchema>

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
  '05:00 PM', '06:00 PM'
]

export default function AppointmentBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  })

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true)
    try {
      // Submit appointment request
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          service: `Appointment: ${data.service}`,
          message: `Appointment Request:\nDate: ${data.date}\nTime: ${data.time}\nService: ${data.service}\n\n${data.message || 'No additional message'}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast.success('Appointment request submitted successfully!')
        setTimeout(() => {
          reset()
          setIsSubmitted(false)
        }, 3000)
      } else {
        throw new Error('Failed to submit appointment')
      }
    } catch (error) {
      toast.error('Failed to submit appointment. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-strong rounded-2xl p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 gradient-text">Appointment Requested!</h3>
        <p className="text-white/70 mb-6">
          We've received your appointment request and will confirm shortly.
        </p>
        <p className="text-neon-blue text-sm">
          You'll receive a confirmation email and call from us soon.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-strong rounded-2xl p-8"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-neon-purple to-pink-500 rounded-xl flex items-center justify-center">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold gradient-text">Book Free Appointment</h2>
          <p className="text-white/60 text-sm">Schedule your consultation today</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white/80 mb-2 flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Name *</span>
            </label>
            <input
              {...register('name')}
              type="text"
              className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-white/80 mb-2 flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Email *</span>
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-white/80 mb-2 flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>Phone *</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              placeholder="+91 9234578836"
          />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white/80 mb-2 flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Preferred Date *</span>
            </label>
            <input
              {...register('date')}
              type="date"
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
            />
            {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date.message}</p>}
          </div>
          <div>
            <label className="block text-white/80 mb-2 flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Preferred Time *</span>
            </label>
            <select
              {...register('time')}
              className="w-full px-4 py-3 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
            >
              <option value="">Select time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time} className="bg-dark-surface">
                  {time}
                </option>
              ))}
            </select>
            {errors.time && <p className="text-red-400 text-sm mt-1">{errors.time.message}</p>}
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
            <option value="consultation">General Consultation</option>
          </select>
          {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service.message}</p>}
        </div>

        <div>
          <label className="block text-white/80 mb-2">Additional Message</label>
          <textarea
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue resize-none"
            placeholder="Tell us about your project or any specific requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin relative z-10" />
              <span className="relative z-10">Submitting...</span>
            </>
          ) : (
            <>
              <Calendar className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Book Appointment</span>
            </>
          )}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-neon-purple to-pink-500"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </form>
    </motion.div>
  )
}
