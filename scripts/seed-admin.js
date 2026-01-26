const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
require('dotenv').config({ path: '.env.local' })

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['admin', 'editor'], default: 'admin' },
}, { timestamps: true })

const User = mongoose.model('User', UserSchema)

async function seedAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')

    const adminEmail = 'admin@shifadigital.com'
    const adminPassword = 'Admin@123'

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminEmail })
    if (existingAdmin) {
      console.log('Admin user already exists')
      process.exit(0)
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash(adminPassword, 12)
    const admin = await User.create({
      email: adminEmail,
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
    })

    console.log('Admin user created successfully!')
    console.log('Email:', adminEmail)
    console.log('Password:', adminPassword)
    console.log('\n⚠️  IMPORTANT: Change the password after first login!')

    process.exit(0)
  } catch (error) {
    console.error('Error seeding admin:', error)
    process.exit(1)
  }
}

seedAdmin()
