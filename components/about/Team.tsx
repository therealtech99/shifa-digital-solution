'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Twitter } from 'lucide-react'

const teamMembers = [
  { name: 'John Smith', role: 'CEO & Founder', image: '/team/john.jpg' },
  { name: 'Sarah Johnson', role: 'CTO', image: '/team/sarah.jpg' },
  { name: 'Mike Chen', role: 'Lead Developer', image: '/team/mike.jpg' },
  { name: 'Emily Davis', role: 'UI/UX Designer', image: '/team/emily.jpg' },
]

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-dark-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Passionate experts dedicated to your success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass-strong rounded-2xl p-6 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
              <p className="text-neon-blue mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-neon-blue/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-white/60" />
                </a>
                <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-neon-blue/20 transition-colors">
                  <Twitter className="w-5 h-5 text-white/60" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
