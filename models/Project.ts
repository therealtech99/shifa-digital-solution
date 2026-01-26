import mongoose, { Schema, Document } from 'mongoose'

export interface IProject extends Document {
  title: string
  description: string
  category: string
  image: string
  tags: string[]
  link?: string
  github?: string
  featured: boolean
  order: number
  createdAt: Date
  updatedAt: Date
}

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    link: {
      type: String,
    },
    github: {
      type: String,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema)
