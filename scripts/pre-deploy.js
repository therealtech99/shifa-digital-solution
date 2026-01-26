// Pre-deployment checklist script
const fs = require('fs')
const path = require('path')

console.log('🔍 Running pre-deployment checks...\n')

const checks = []

// Check 1: Logo exists
const logoPath = path.join(process.cwd(), 'public', 'logo.png')
if (fs.existsSync(logoPath)) {
  console.log('✅ Logo file exists')
  checks.push(true)
} else {
  console.log('⚠️  Logo file not found at public/logo.png')
  checks.push(false)
}

// Check 2: Environment variables template
const envExample = path.join(process.cwd(), '.env.example')
if (fs.existsSync(envExample)) {
  console.log('✅ .env.example exists')
  checks.push(true)
} else {
  console.log('⚠️  .env.example not found')
  checks.push(false)
}

// Check 3: Package.json exists
const packageJson = path.join(process.cwd(), 'package.json')
if (fs.existsSync(packageJson)) {
  console.log('✅ package.json exists')
  checks.push(true)
} else {
  console.log('❌ package.json not found')
  checks.push(false)
}

// Check 4: Next.js config
const nextConfig = path.join(process.cwd(), 'next.config.js')
if (fs.existsSync(nextConfig)) {
  console.log('✅ next.config.js exists')
  checks.push(true)
} else {
  console.log('⚠️  next.config.js not found')
  checks.push(false)
}

// Summary
console.log('\n📊 Summary:')
const allPassed = checks.every(check => check === true)
if (allPassed) {
  console.log('✅ All checks passed! Ready for deployment.')
  process.exit(0)
} else {
  console.log('⚠️  Some checks failed. Please review before deploying.')
  process.exit(1)
}
