'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: '/testimonials/sarah.jpg',
    rating: 5,
    text: 'SHIFA DIGITAL SOLUTION transformed our online presence. Their team delivered a stunning website that increased our conversions by 300%. Professional, innovative, and results-driven.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, E-commerce Pro',
    image: '/testimonials/michael.jpg',
    rating: 5,
    text: 'The mobile app they developed for us exceeded all expectations. Clean code, beautiful design, and exceptional support. Highly recommend for any digital project.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director, Digital Marketing Co.',
    image: '/testimonials/emily.jpg',
    rating: 5,
    text: 'Working with SHIFA DIGITAL has been a game-changer. Their UI/UX designs are not just beautiful but also highly functional. Our user engagement has skyrocketed.',
  },
  {
    name: 'David Thompson',
    role: 'CTO, Enterprise Solutions',
    image: '/testimonials/david.jpg',
    rating: 5,
    text: 'Outstanding custom software development. They understood our complex requirements and delivered a scalable solution that grows with our business. Truly professional.',
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-dark-surface relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-neon-blue mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-strong rounded-2xl p-8 h-full"
              >
                <Quote className="w-12 h-12 text-neon-blue mb-4 opacity-50" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
