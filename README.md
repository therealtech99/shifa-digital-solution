# SHIFA DIGITAL SOLUTION - Premium Digital Agency Website

A high-end, modern, service-based business website with advanced UI/UX, motion graphics, and a comprehensive admin panel.

## 🚀 Features

### Public Website
- ✨ Ultra-modern dark theme with neon accents (blue, purple, cyan)
- 🎨 Advanced animations and micro-interactions
- 📱 Fully responsive design
- 🔍 SEO optimized
- ⚡ Lightning-fast performance
- 📞 **Call Now** button with phone: +92 345 788 36
- 📅 **Book Free Appointment** feature
- 💬 Floating action buttons (Call, WhatsApp, Appointment)

### Admin Panel
- 🔐 Secure Firebase Authentication
- 📊 Dashboard with statistics
- 📝 Content Management System (CMS)
- 📧 Lead management dashboard
- 🖼 Portfolio & Blog management
- ⭐ Testimonials management
- ⚙️ SEO settings management

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Backend**: Firebase (Firestore, Auth, Storage)
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Your Firebase client config is already set
   - Add Firebase Admin SDK credentials (see `SETUP_ENV.md`)

3. Enable Firebase services:
   - Enable Authentication (Email/Password)
   - Create Firestore Database
   - Add security rules from `firestore.rules`

4. Create admin user:
```bash
npm run seed:admin
```

5. Run the development server:
```bash
npm run dev
```

6. Access the website:
   - Public site: http://localhost:3000
   - Admin panel: http://localhost:3000/admin/login

## 📞 Contact Features

- **Call Now**: Direct phone call button (+92 345 788 36)
- **Book Appointment**: Free consultation booking
- **WhatsApp**: Direct chat integration
- **Contact Form**: Advanced form with validation

## 🎨 Advanced UI/UX Features

- Particle background animations
- Glassmorphism effects
- 3D transform effects
- Gradient animations
- Shimmer effects
- Smooth scroll animations
- Micro-interactions
- Floating action buttons
- Real-time form validation

## 📄 License

Proprietary - SHIFA DIGITAL SOLUTION

## 🆘 Support

For setup help, see:
- `QUICK_START.md` - Quick setup guide
- `SETUP_ENV.md` - Environment variables guide
- `FIREBASE_SETUP.md` - Detailed Firebase setup
