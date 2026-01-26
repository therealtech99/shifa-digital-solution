'use client'

import { useEffect, useState } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react'
import toast from 'react-hot-toast'
import { useFirebaseToken } from '@/lib/firebase/hooks'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  published: boolean
  views: number
  createdAt: string | Date
}

export default function BlogPage() {
  const token = useFirebaseToken()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (token) {
      fetchPosts()
    }
  }, [token])

  const fetchPosts = async () => {
    if (!token) return
    
    try {
      setLoading(true)
      const response = await fetch('/api/admin/blog', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await response.json()
      setPosts(data || [])
    } catch (error) {
      toast.error('Failed to load blog posts')
    } finally {
      setLoading(false)
    }
  }

  const togglePublish = async (id: string, currentStatus: boolean) => {
    if (!token) return
    
    try {
      const response = await fetch('/api/admin/blog', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, published: !currentStatus }),
      })
      
      if (response.ok) {
        toast.success(`Post ${!currentStatus ? 'published' : 'unpublished'}`)
        fetchPosts()
      } else {
        throw new Error('Update failed')
      }
    } catch (error) {
      toast.error('Failed to update post status')
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold gradient-text">Blog Management</h1>
            <p className="text-white/60 mt-2">Create and manage blog posts</p>
          </div>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>New Post</span>
          </button>
        </div>

        {loading ? (
          <div className="glass-strong rounded-xl p-12 text-center text-white/60">
            Loading posts...
          </div>
        ) : posts.length === 0 ? (
          <div className="glass-strong rounded-xl p-12 text-center">
            <p className="text-white/60 mb-4">No blog posts yet</p>
            <button className="btn-primary">Create Your First Post</button>
          </div>
        ) : (
          <div className="glass-strong rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left text-white/80 font-semibold">Title</th>
                  <th className="px-6 py-4 text-left text-white/80 font-semibold">Category</th>
                  <th className="px-6 py-4 text-left text-white/80 font-semibold">Views</th>
                  <th className="px-6 py-4 text-left text-white/80 font-semibold">Status</th>
                  <th className="px-6 py-4 text-left text-white/80 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-t border-white/10 hover:bg-white/5">
                    <td className="px-6 py-4">
                      <p className="text-white font-semibold">{post.title}</p>
                      <p className="text-white/60 text-sm">{post.excerpt}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 glass rounded-full text-sm text-white/80">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white/60">{post.views}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => togglePublish(post.id, post.published)}
                        className={`px-3 py-1 rounded-lg text-sm flex items-center space-x-1 ${
                          post.published
                            ? 'bg-green-400/20 text-green-400'
                            : 'bg-gray-400/20 text-gray-400'
                        }`}
                      >
                        {post.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        <span>{post.published ? 'Published' : 'Draft'}</span>
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="text-neon-blue hover:text-neon-purple transition-colors">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="text-red-400 hover:text-red-300 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
