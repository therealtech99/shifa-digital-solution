'use client'

import { useEffect, useState } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Star } from 'lucide-react'
import toast from 'react-hot-toast'
import { useFirebaseToken } from '@/lib/firebase/hooks'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  rating: number
  text: string
  featured: boolean
}

export default function TestimonialsPage() {
  const token = useFirebaseToken()
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (token) {
      fetchTestimonials()
    }
  }, [token])

  const fetchTestimonials = async () => {
    if (!token) return
    
    try {
      setLoading(true)
      const response = await fetch('/api/admin/testimonials', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await response.json()
      setTestimonials(data || [])
    } catch (error) {
      toast.error('Failed to load testimonials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold gradient-text">Testimonials</h1>
            <p className="text-white/60 mt-2">Manage client testimonials</p>
          </div>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Add Testimonial</span>
          </button>
        </div>

        {loading ? (
          <div className="glass-strong rounded-xl p-12 text-center text-white/60">
            Loading testimonials...
          </div>
        ) : testimonials.length === 0 ? (
          <div className="glass-strong rounded-xl p-12 text-center">
            <p className="text-white/60 mb-4">No testimonials yet</p>
            <button className="btn-primary">Add Your First Testimonial</button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-strong rounded-xl p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-white/60">{testimonial.role} at {testimonial.company}</p>
                  </div>
                  {testimonial.featured && (
                    <span className="px-2 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 mb-4">"{testimonial.text}"</p>
                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 glass rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button className="px-4 py-2 glass rounded-lg text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
