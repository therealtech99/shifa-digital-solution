'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Users, Mail, Briefcase, TrendingUp, LogOut } from 'lucide-react'
import toast from 'react-hot-toast'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase/config'
import { useFirebaseToken } from '@/lib/firebase/hooks'
import AdminLayout from '@/components/admin/AdminLayout'

export default function AdminDashboard() {
  const router = useRouter()
  const token = useFirebaseToken()
  const [stats, setStats] = useState({
    leads: 0,
    projects: 0,
    blogs: 0,
    testimonials: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (token) {
      fetchStats()
    }
  }, [token])

  const fetchStats = async () => {
    if (!token) return
    
    try {
      const [leadsRes, projectsRes, blogsRes, testimonialsRes] = await Promise.all([
        fetch('/api/admin/leads?status=all', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch('/api/admin/projects', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch('/api/admin/blog', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch('/api/admin/testimonials', {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ])

      const leads = await leadsRes.json()
      const projects = await projectsRes.json()
      const blogs = await blogsRes.json()
      const testimonials = await testimonialsRes.json()

      setStats({
        leads: Array.isArray(leads) ? leads.length : 0,
        projects: Array.isArray(projects) ? projects.length : 0,
        blogs: Array.isArray(blogs) ? blogs.length : 0,
        testimonials: Array.isArray(testimonials) ? testimonials.length : 0,
      })
    } catch (error) {
      toast.error('Failed to load statistics')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      localStorage.removeItem('firebaseToken')
      router.push('/admin/login')
      toast.success('Logged out successfully')
    } catch (error) {
      toast.error('Logout failed')
    }
  }

  const statCards = [
    { icon: Mail, label: 'Total Leads', value: stats.leads, color: 'from-neon-blue to-cyan-500' },
    { icon: Briefcase, label: 'Projects', value: stats.projects, color: 'from-neon-purple to-pink-500' },
    { icon: TrendingUp, label: 'Blog Posts', value: stats.blogs, color: 'from-cyan-500 to-neon-blue' },
    { icon: Users, label: 'Testimonials', value: stats.testimonials, color: 'from-pink-500 to-neon-purple' },
  ]

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold gradient-text">Dashboard</h1>
            <p className="text-white/60 mt-2">Welcome back! Here's what's happening.</p>
          </div>
          <button
            onClick={handleLogout}
            className="btn-secondary flex items-center space-x-2"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong rounded-2xl p-6"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/60 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Recent Activity */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-strong rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Recent Leads</h2>
            <p className="text-white/60">No leads yet</p>
          </div>
          <div className="glass-strong rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Quick Actions</h2>
            <div className="space-y-3">
              <a href="/admin/leads" className="block px-4 py-3 glass rounded-lg hover:bg-white/5 transition-colors text-white">
                Manage Leads
              </a>
              <a href="/admin/projects" className="block px-4 py-3 glass rounded-lg hover:bg-white/5 transition-colors text-white">
                Manage Projects
              </a>
              <a href="/admin/blog" className="block px-4 py-3 glass rounded-lg hover:bg-white/5 transition-colors text-white">
                Manage Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
