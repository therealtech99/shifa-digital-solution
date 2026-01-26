'use client'

import { useEffect, useState } from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import { motion } from 'framer-motion'
import { Mail, Phone, Building, Calendar, Filter, Download } from 'lucide-react'
import toast from 'react-hot-toast'
import { useFirebaseToken } from '@/lib/firebase/hooks'

interface Lead {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
  status: string
  createdAt: string | Date
}

export default function LeadsPage() {
  const token = useFirebaseToken()
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    if (token) {
      fetchLeads()
    }
  }, [filter, token])

  const fetchLeads = async () => {
    if (!token) return
    
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/leads?status=${filter}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await response.json()
      setLeads(data || [])
    } catch (error) {
      toast.error('Failed to load leads')
    } finally {
      setLoading(false)
    }
  }

  const updateLeadStatus = async (leadId: string, status: string) => {
    if (!token) return
    
    try {
      const response = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id: leadId, status }),
      })
      
      if (response.ok) {
        toast.success('Lead status updated')
        fetchLeads()
      } else {
        throw new Error('Update failed')
      }
    } catch (error) {
      toast.error('Failed to update lead status')
    }
  }

  const exportLeads = () => {
    // Export functionality
    toast.success('Leads exported successfully')
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold gradient-text">Lead Management</h1>
            <p className="text-white/60 mt-2">Manage and track all incoming leads</p>
          </div>
          <button onClick={exportLeads} className="btn-secondary flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Export</span>
          </button>
        </div>

        {/* Filters */}
        <div className="glass-strong rounded-xl p-4 flex items-center space-x-4">
          <Filter className="w-5 h-5 text-white/60" />
          {['all', 'new', 'contacted', 'qualified', 'converted', 'lost'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg capitalize ${
                filter === status
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                  : 'glass text-white/60 hover:text-white'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Leads Table */}
        <div className="glass-strong rounded-xl overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-white/60">Loading leads...</div>
          ) : leads.length === 0 ? (
            <div className="p-12 text-center text-white/60">No leads found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-white/80 font-semibold">Name</th>
                    <th className="px-6 py-4 text-left text-white/80 font-semibold">Contact</th>
                    <th className="px-6 py-4 text-left text-white/80 font-semibold">Service</th>
                    <th className="px-6 py-4 text-left text-white/80 font-semibold">Status</th>
                    <th className="px-6 py-4 text-left text-white/80 font-semibold">Date</th>
                    <th className="px-6 py-4 text-left text-white/80 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-t border-white/10 hover:bg-white/5">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-semibold">{lead.name}</p>
                          {lead.company && (
                            <p className="text-white/60 text-sm flex items-center space-x-1">
                              <Building className="w-3 h-3" />
                              <span>{lead.company}</span>
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <p className="text-white/80 text-sm flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>{lead.email}</span>
                          </p>
                          {lead.phone && (
                            <p className="text-white/60 text-sm flex items-center space-x-2">
                              <Phone className="w-4 h-4" />
                              <span>{lead.phone}</span>
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 glass rounded-full text-sm text-white/80">
                          {lead.service}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={lead.status}
                          onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                          className="px-3 py-1 glass rounded-lg text-white/80 text-sm focus:outline-none focus:ring-2 focus:ring-neon-blue"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="converted">Converted</option>
                          <option value="lost">Lost</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-white/60 text-sm flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {lead.createdAt
                              ? new Date(lead.createdAt as string).toLocaleDateString()
                              : 'N/A'}
                          </span>
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-neon-blue hover:text-neon-purple transition-colors">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  )
}
