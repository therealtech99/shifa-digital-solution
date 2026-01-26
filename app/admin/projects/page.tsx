'use client'

import { useEffect, useState } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Eye } from 'lucide-react'
import toast from 'react-hot-toast'
import { useFirebaseToken } from '@/lib/firebase/hooks'

interface Project {
  id: string
  title: string
  description: string
  category: string
  image: string
  tags: string[]
  featured: boolean
}

export default function ProjectsPage() {
  const token = useFirebaseToken()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  useEffect(() => {
    if (token) {
      fetchProjects()
    }
  }, [token])

  const fetchProjects = async () => {
    if (!token) return
    
    try {
      setLoading(true)
      const response = await fetch('/api/admin/projects', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await response.json()
      setProjects(data || [])
    } catch (error) {
      toast.error('Failed to load projects')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!token) return
    if (!confirm('Are you sure you want to delete this project?')) return
    
    try {
      const response = await fetch(`/api/admin/projects?id=${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      })
      
      if (response.ok) {
        toast.success('Project deleted')
        fetchProjects()
      } else {
        throw new Error('Delete failed')
      }
    } catch (error) {
      toast.error('Failed to delete project')
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold gradient-text">Portfolio Management</h1>
            <p className="text-white/60 mt-2">Manage your portfolio projects</p>
          </div>
          <button
            onClick={() => {
              setEditingProject(null)
              setShowModal(true)
            }}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Add Project</span>
          </button>
        </div>

        {loading ? (
          <div className="glass-strong rounded-xl p-12 text-center text-white/60">
            Loading projects...
          </div>
        ) : projects.length === 0 ? (
          <div className="glass-strong rounded-xl p-12 text-center">
            <p className="text-white/60 mb-4">No projects yet</p>
            <button
              onClick={() => {
                setEditingProject(null)
                setShowModal(true)
              }}
              className="btn-primary"
            >
              Add Your First Project
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-strong rounded-xl overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{project.title.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-white/60 text-sm">{project.category}</p>
                    </div>
                    {project.featured && (
                      <span className="px-2 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-white/70 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 glass rounded text-xs text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setEditingProject(project)
                        setShowModal(true)
                      }}
                      className="flex-1 px-4 py-2 glass rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Edit className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="px-4 py-2 glass rounded-lg text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Add/Edit Modal would go here */}
      </div>
    </AdminLayout>
  )
}
