'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import { motion } from 'framer-motion'
import { Save } from 'lucide-react'
import toast from 'react-hot-toast'

export default function SettingsPage() {
  const handleSave = () => {
    toast.success('Settings saved successfully')
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold gradient-text">Settings</h1>
          <p className="text-white/60 mt-2">Manage website settings and preferences</p>
        </div>

        <div className="space-y-6">
          {/* SEO Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">SEO Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-white/80 mb-2">Site Title</label>
                <input
                  type="text"
                  defaultValue="SHIFA DIGITAL SOLUTION"
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Meta Description</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue resize-none"
                  defaultValue="Building High-Performance Digital Products That Scale Your Business"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Keywords</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  placeholder="digital agency, web development, mobile apps"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-strong rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="info@shifadigital.com"
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Phone</label>
                <input
                  type="tel"
                  defaultValue="+1 (234) 567-890"
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-white/80 mb-2">Address</label>
                <input
                  type="text"
                  defaultValue="123 Business Street, Tech City, TC 12345"
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                />
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-strong rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Social Media</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/80 mb-2">Facebook</label>
                <input
                  type="url"
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  placeholder="https://facebook.com/yourpage"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Twitter</label>
                <input
                  type="url"
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  placeholder="https://twitter.com/yourhandle"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">LinkedIn</label>
                <input
                  type="url"
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  placeholder="https://linkedin.com/company/yourcompany"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Instagram</label>
                <input
                  type="url"
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  placeholder="https://instagram.com/yourhandle"
                />
              </div>
            </div>
          </motion.div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button onClick={handleSave} className="btn-primary flex items-center space-x-2">
              <Save className="w-5 h-5" />
              <span>Save Settings</span>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
