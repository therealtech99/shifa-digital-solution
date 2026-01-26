'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Mail,
  Briefcase,
  FileText,
  MessageSquare,
  Settings,
  Menu,
  X,
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: Mail, label: 'Leads', href: '/admin/leads' },
  { icon: Briefcase, label: 'Projects', href: '/admin/projects' },
  { icon: FileText, label: 'Blog', href: '/admin/blog' },
  { icon: MessageSquare, label: 'Testimonials', href: '/admin/testimonials' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-dark-bg flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-dark-surface border-r border-white/10 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } transition-transform duration-300`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/admin/dashboard" className="flex items-center">
              <div className="relative h-10 w-auto" style={{ minWidth: '120px' }}>
                <Image
                  src="/logo.png"
                  alt="SHIFA DIGITAL Logo"
                  width={150}
                  height={45}
                  className="object-contain h-full w-auto"
                />
              </div>
              <span className="ml-3 text-lg font-bold gradient-text hidden md:block">Admin</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue border border-neon-blue/30'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-40 bg-dark-surface border-b border-white/10 p-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Content */}
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
