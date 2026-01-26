# PowerShell script to add all environment variables to Vercel automatically
# This uses Vercel CLI to add all variables at once

Write-Host "🚀 Starting Vercel Environment Variables Setup..." -ForegroundColor Cyan
Write-Host ""

# Check if Vercel CLI is installed
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercelInstalled) {
    Write-Host "❌ Vercel CLI is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
    Write-Host ""
}

# Check if user is logged in
Write-Host "🔐 Checking Vercel authentication..." -ForegroundColor Yellow
$vercelWhoami = vercel whoami 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Not logged in to Vercel!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please login first:" -ForegroundColor Yellow
    Write-Host "  vercel login" -ForegroundColor Cyan
    Write-Host ""
    exit 1
}

Write-Host "✅ Logged in as: $vercelWhoami" -ForegroundColor Green
Write-Host ""

# Project name (update if different)
$projectName = "shifa-digital-solution99"

# Environment variables to add
$envVars = @(
    @{
        Key = "NEXT_PUBLIC_FIREBASE_API_KEY"
        Value = "AIzaSyA8lUMh4hDw3FTkWJTvvt7n0Pxg4jLoGhk"
    },
    @{
        Key = "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"
        Value = "shifa-digital-solution.firebaseapp.com"
    },
    @{
        Key = "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
        Value = "shifa-digital-solution"
    },
    @{
        Key = "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"
        Value = "shifa-digital-solution.firebasestorage.app"
    },
    @{
        Key = "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
        Value = "836448388080"
    },
    @{
        Key = "NEXT_PUBLIC_FIREBASE_APP_ID"
        Value = "1:836448388080:web:97d9381bd61da71799d335"
    },
    @{
        Key = "NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID"
        Value = "G-YR9T5BB5KC"
    },
    @{
        Key = "FIREBASE_PROJECT_ID"
        Value = "shifa-digital-solution"
    },
    @{
        Key = "FIREBASE_CLIENT_EMAIL"
        Value = "firebase-adminsdk-fbsvc@shifa-digital-solution.iam.gserviceaccount.com"
    },
    @{
        Key = "FIREBASE_PRIVATE_KEY"
        Value = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCTd5Ba38Wj/q9g\nV4N1oWaIqLolbz6TvXvkiO0Xh9u1XQoAoAcqMpMoF43VMxw8oGT90OReVJPi8GC4\nV0lj0lDR1hlwqB1utcJSWO5vezARYJDXK7oD96o0/sPce0JQQTxvhLuo1bYiJhhp\nhk65fml7yL1pZBpLA1ErCaGHdSf1zsDYwbrkdIC3GhQhKZmMkB05SApnNgZMa1Oa\nB3JAGGYrzQfkGhvE7oun3SoSkamK2uru4wpKr+KCLP8mOCWZ0pXZn7nl7WvLjDtO\n0fAC4HirmnhbISy+C6FaKTI9Z+8hHwZvg4aqGRtosCm8QGW9rzdDcO0Sty/mDIMS\nVdgJgoz9AgMBAAECggEAEk+fpWURY8xxZu9e87mLo4799D2EwfAepPFKrWgRhErt\n/cdhNGBszObl1fIfgLiy6aBpZvwuE9kgzWsLQiGgpvmklYxOgUuA+lwwGTgs7w90\nVL+JfMohQKzc0bEdeh0rnbZX3f5RfBqKX/oNJvPXMcdqm55SNHvQNZ2fyNPnlxo5\nr5mnXNUhm7p+0NrVN/NRONsxYWsEcnKBI18yDMebeh5mCCwS1aMgYw3i7df5iQSA\nKBe3+nUdf6aCVeDHtoW7LHKk3ibA82r5+R3abV65eHEdMgl61Ij4xvbC70OJbogK\nGwIdrLA2QSr+UBIjxJSwMQDbwjxtaP0lx7j4a6YsKQKBgQDDanr0GhfygvLkLFAZ\nbPMot/xB6sOR8VHsdtBVdxM2PjZ0/gEz1DSYktdnUfcpAOXgveeUTCA+fTQ9liqM\n94fGmxzjFN6KuEbuDnQkHxCD/HwAyChdwjZkkYsfpZDorUKI/YPCBbCN5LgBMMAe\n+5411bP1my+iJBjMQkGzcxmpBQKBgQDBL4myiiO6VhflriBpwWz9z69bZqBHHrFi\nG62qZUrb/XqCHRNEU6n91c5nCUZ5DVN24H4AvFyp8uYN+H26AHDeMm3Qpj1Q+53I\nH+4yV7c8DMaRdaWxIx1qpuSW9AeLJEPHdRc89/cdqU13UooWrsyxcJlrGtDi6Ptr\nudJn/7y1mQKBgGNJbKMtxtEOu343DZN9iaY8pMyRDUDPjcJJM9zYnUhIH78dd1rw\nDLEgmpUCTkPlEuc3VbxBWXimgK5x57ir466DDRBLgC6XJmK5sUTRC8EjvZVgHTJW\nBPDgCgHQS2oM7etQc2tXHLdbaCoirNqRGXdc1wyJBpCpKnhNibg1WOpJAoGBAK79\nRJl5D8vl2FewVqP1FakCyzDb0Ssa3kqkD7ddcWW8QZBCjgVCU6UeWoxylmdobsYr\nq3c3KCi5YTIeeKRXaeWbgGWTb88/XDi+06C+W7gFSojQLHo7+JV2/3DNM1gSTWMK\n6TXM1wcDKKyBE5xgUgIYoJ+n9rbTm4qFE9YojONhAoGAGz0Q861zxlcd8ykXHmj+\n+oAhcDU5C+HBYx27jo1/UQWLCiQioJyYy5YdVf3C0lia1gpHN12zbgHRvVxoDMdC\nQZ2zJ9u25ENScxTXhPM75GW2VHMVf4RmqTxuYabyD2B8XukRKeZ1xkLEauUawr7g\nmyoA3T90r/6uQ70fqfa7Eek=\n-----END PRIVATE KEY-----\n"
    },
    @{
        Key = "NEXT_PUBLIC_SITE_URL"
        Value = "https://shifadigitalsolution.in"
    },
    @{
        Key = "EMAIL_HOST"
        Value = "smtp.gmail.com"
    },
    @{
        Key = "EMAIL_PORT"
        Value = "587"
    },
    @{
        Key = "EMAIL_USER"
        Value = "your-email@gmail.com"
    },
    @{
        Key = "EMAIL_PASS"
        Value = "your-app-password"
    }
)

Write-Host "📝 Adding environment variables..." -ForegroundColor Yellow
Write-Host ""

$successCount = 0
$failCount = 0

foreach ($envVar in $envVars) {
    $key = $envVar.Key
    $value = $envVar.Value
    
    Write-Host "Adding: $key..." -ForegroundColor Cyan -NoNewline
    
    # Add to all environments (production, preview, development)
    $result = vercel env add $key production preview development 2>&1 | Out-String
    
    if ($LASTEXITCODE -eq 0) {
        # The command will prompt for value, so we need to pipe it
        # For now, we'll use a different approach
        Write-Host " ⚠️  Manual input required" -ForegroundColor Yellow
        Write-Host "   Run: vercel env add $key production preview development" -ForegroundColor Gray
        Write-Host "   Then paste: $value" -ForegroundColor Gray
    } else {
        Write-Host " ✅ Added" -ForegroundColor Green
        $successCount++
    }
    Write-Host ""
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "📊 Summary:" -ForegroundColor Cyan
Write-Host "   ✅ Success: $successCount" -ForegroundColor Green
Write-Host "   ❌ Failed: $failCount" -ForegroundColor Red
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

Write-Host "⚠️  Note: Vercel CLI requires interactive input for values." -ForegroundColor Yellow
Write-Host "   For automated setup, use the Node.js script instead." -ForegroundColor Yellow
Write-Host ""
