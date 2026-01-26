import mongoose, { Schema, Document } from 'mongoose'

export interface ILead extends Document {
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost'
  notes?: string
  createdAt: Date
  updatedAt: Date
}

const LeadSchema = new Schema<ILead>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: {
      type: String,
    },
    company: {
      type: String,
    },
    service: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'converted', 'lost'],
      default: 'new',
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema)
