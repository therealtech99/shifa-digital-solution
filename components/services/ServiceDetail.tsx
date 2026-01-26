'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const serviceData: Record<string, {
  title: string
  description: string
  features: string[]
  techStack: string[]
  benefits: string[]
}> = {
  'website-development': {
    title: 'Website Development',
    description: 'We create stunning, high-performance websites that drive results. Our custom web solutions are built with the latest technologies and best practices.',
    features: [
      'Custom Design & Development',
      'Responsive Mobile-First Design',
      'SEO Optimization',
      'Fast Loading Times',
      'Content Management System',
      'E-commerce Integration',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    benefits: [
      'Increased Online Visibility',
      'Better User Experience',
      'Higher Conversion Rates',
      'Scalable Architecture',
    ],
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.',
    features: [
      'iOS & Android Development',
      'Cross-Platform Solutions',
      'Native Performance',
      'App Store Optimization',
      'Push Notifications',
      'Offline Capabilities',
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    benefits: [
      'Reach More Customers',
      'Enhanced User Engagement',
      'Brand Recognition',
      'Revenue Opportunities',
    ],
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that enhance user experience and drive conversions through user-centered design principles.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design',
      'Design Systems',
      'Usability Testing',
      'Design Handoff',
    ],
    techStack: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
    benefits: [
      'Improved User Satisfaction',
      'Higher Conversion Rates',
      'Reduced Development Costs',
      'Competitive Advantage',
    ],
  },
  'ecommerce': {
    title: 'E-commerce Solutions',
    description: 'Complete online store solutions that drive sales with seamless shopping experiences and powerful management tools.',
    features: [
      'Product Catalog Management',
      'Shopping Cart & Checkout',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Tracking',
      'Analytics & Reporting',
    ],
    techStack: ['Shopify', 'WooCommerce', 'Magento', 'Custom Solutions'],
    benefits: [
      '24/7 Sales Channel',
      'Global Reach',
      'Reduced Operating Costs',
      'Data-Driven Insights',
    ],
  },
  'custom-software': {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed specifically for your business needs, processes, and workflows.',
    features: [
      'Requirements Analysis',
      'Custom Development',
      'API Integration',
      'Cloud Deployment',
      'Scalable Architecture',
      'Ongoing Support',
    ],
    techStack: ['Node.js', 'Python', 'Java', 'AWS', 'Docker', 'Kubernetes'],
    benefits: [
      'Streamlined Operations',
      'Increased Efficiency',
      'Competitive Edge',
      'Future-Proof Solutions',
    ],
  },
  'maintenance': {
    title: 'Maintenance & Support',
    description: 'Comprehensive maintenance and support services to keep your digital products running smoothly and securely.',
    features: [
      '24/7 Monitoring',
      'Regular Updates',
      'Security Patches',
      'Performance Optimization',
      'Bug Fixes',
      'Technical Support',
    ],
    techStack: ['Monitoring Tools', 'CI/CD', 'Backup Systems'],
    benefits: [
      'Reduced Downtime',
      'Enhanced Security',
      'Peace of Mind',
      'Cost Savings',
    ],
  },
}

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = serviceData[slug] || serviceData['website-development']

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-dark-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">{service.title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 gradient-text">What We Offer</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-neon-blue flex-shrink-0 mt-1" />
                    <p className="text-white/80 text-lg">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8 gradient-text">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {service.techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 glass-strong rounded-lg text-white/80"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-dark-surface">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-semibold">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our {service.title.toLowerCase()} services.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
