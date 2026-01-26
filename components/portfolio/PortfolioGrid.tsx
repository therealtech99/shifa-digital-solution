'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'E-commerce']

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'E-commerce',
    image: '/portfolio/ecommerce.jpg',
    description: 'A full-featured e-commerce platform with advanced inventory management',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'Mobile Apps',
    image: '/portfolio/healthcare.jpg',
    description: 'Patient management system for healthcare providers',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'Web Development',
    image: '/portfolio/corporate.jpg',
    description: 'Modern corporate website with CMS integration',
    tags: ['Next.js', 'Contentful', 'Tailwind'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    image: '/portfolio/saas.jpg',
    description: 'Beautiful and intuitive SaaS dashboard design',
    tags: ['Figma', 'Design System', 'Prototyping'],
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Food Delivery App',
    category: 'Mobile Apps',
    image: '/portfolio/food.jpg',
    description: 'On-demand food delivery mobile application',
    tags: ['Flutter', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Fintech Platform',
    category: 'Web Development',
    image: '/portfolio/fintech.jpg',
    description: 'Secure financial technology platform',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
]

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section ref={ref} className="section-padding bg-dark-surface">
      <div className="container-custom">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                  : 'glass text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="glass-strong rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{project.title.charAt(0)}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-neon-blue/20 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-neon-blue/20 transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 glass rounded-full text-xs text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
