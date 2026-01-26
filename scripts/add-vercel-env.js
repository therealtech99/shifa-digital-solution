/**
 * Automated script to add all environment variables to Vercel
 * Uses Vercel API to add variables programmatically
 * 
 * Requirements:
 * 1. Get Vercel API Token from: https://vercel.com/account/tokens
 * 2. Get your Team ID and Project ID from Vercel dashboard
 * 3. Set VERCEL_TOKEN as environment variable or in .env.local
 * 
 * Usage:
 *   node scripts/add-vercel-env.js
 */

const https = require('https');
const readline = require('readline');

// Configuration - UPDATE THESE VALUES
const CONFIG = {
  // Get from: https://vercel.com/account/tokens
  VERCEL_TOKEN: process.env.VERCEL_TOKEN || '',
  
  // Get from Vercel Dashboard → Your Project → Settings → General
  // Or from: vercel project ls
  TEAM_ID: process.env.VERCEL_TEAM_ID || 'the-real-tech', // Your team/username
  PROJECT_ID: process.env.VERCEL_PROJECT_ID || 'shifa-digital-solution99', // Your project name
  
  // Environment variables to add
  ENV_VARS: [
    {
      key: 'NEXT_PUBLIC_FIREBASE_API_KEY',
      value: 'AIzaSyA8lUMh4hDw3FTkWJTvvt7n0Pxg4jLoGhk',
      target: ['production', 'preview', 'development']
    },
    {
      key: 'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
      value: 'shifa-digital-solution.firebaseapp.com',
      target: ['production', 'preview', 'development']
    },
    {
      key: 'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
      value: 'shifa-digital-solution',
      target: ['production', 'preview', 'development']
    },
    {
      key: 'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
      value: 'shifa-digital-solution.firebasestorage.app',
      target: ['production', 'preview', 'development']
    },
    {
      key: 'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
      value: '836448388080',
      target: ['production', 'preview', 'development']
    },
    {
      key: 'NEXT_PUBLIC_FIREBASE_APP_ID',
      value: '1:836448388080:web:97d9381bd61da71799d335',
      target: ['production', 'preview', 'development']
    },
    {
      key: 'NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID',
      value: 'G-YR9T5BB5KC',
      target: ['production', 'preview', 'development']
    },
    {
      key: 'FIREBASE_PROJECT_ID',
      value: 'shifa-digital-solution',
      target: ['production', 'preview', 'development']
    },
    {
      key: 'FIREBASE_CLIENT_EMAIL',
      value: 'firebase-adminsdk-fbsvc@shifa-digital-solution.iam.gserviceaccount.com',
      target: ['production', 'preview', 'development']
    },
    {
      key: 'FIREBASE_PRIVATE_KEY',
      value: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCTd5Ba38Wj/q9g\nV4N1oWaIqLolbz6TvXvkiO0Xh9u1XQoAoAcqMpMoF43VMxw8oGT90OReVJPi8GC4\nV0lj0lDR1hlwqB1utcJSWO5vezARYJDXK7oD96o0/sPce0JQQTxvhLuo1bYiJhhp\nhk65fml7yL1pZBpLA1ErCaGHdSf1zsDYwbrkdIC3GhQhKZmMkB05SApnNgZMa1Oa\nB3JAGGYrzQfkGhvE7oun3SoSkamK2uru4wpKr+KCLP8mOCWZ0pXZn7nl7WvLjDtO\n0fAC4HirmnhbISy+C6FaKTI9Z+8hHwZvg4aqGRtosCm8QGW9rzdDcO0Sty/mDIMS\nVdgJgoz9AgMBAAECggEAEk+fpWURY8xxZu9e87mLo4799D2EwfAepPFKrWgRhErt\n/cdhNGBszObl1fIfgLiy6aBpZvwuE9kgzWsLQiGgpvmklYxOgUuA+lwwGTgs7w90\nVL+JfMohQKzc0bEdeh0rnbZX3f5RfBqKX/oNJvPXMcdqm55SNHvQNZ2fyNPnlxo5\nr5mnXNUhm7p+0NrVN/NRONsxYWsEcnKBI18yDMebeh5mCCwS1aMgYw3i7df5iQSA\nKBe3+nUdf6aCVeDHtoW7LHKk3ibA82r5+R3abV65eHEdMgl61Ij4xvbC70OJbogK\nGwIdrLA2QSr+UBIjxJSwMQDbwjxtaP0lx7j4a6YsKQKBgQDDanr0GhfygvLkLFAZ\nbPMot/xB6sOR8VHsdtBVdxM2PjZ0/gEz1DSYktdnUfcpAOXgveeUTCA+fTQ9liqM\n94fGmxzjFN6KuEbuDnQkHxCD/HwAyChdwjZkkYsfpZDorUKI/YPCBbCN5LgBMMAe\n+5411bP1my+iJBjMQkGzcxmpBQKBgQDBL4myiiO6VhflriBpwWz9z69bZqBHHrFi\nG62qZUrb/XqCHRNEU6n91c5nCUZ5DVN24H4AvFyp8uYN+H26AHDeMm3Qpj1Q+53I\nH+4yV7c8DMaRdaWxIx1qpuSW9AeLJEPHdRc89/cdqU13UooWrsyxcJlrGtDi6Ptr\nudJn/7y1mQKBgGNJbKMtxtEOu343DZN9iaY8pMyRDUDPjcJJM9zYnUhIH78dd1rw\nDLEgmpUCTkPlEuc3VbxBWXimgK5x57ir466DDRBLgC6XJmK5sUTRC8EjvZVgHTJW\nBPDgCgHQS2oM7etQc2tXHLdbaCoirNqRGXdc1wyJBpCpKnhNibg1WOpJAoGBAK79\nRJl5D8vl2FewVqP1FakCyzDb0Ssa3kqkD7ddcWW8QZBCjgVCU6UeWoxylmdobsYr\nq3c3KCi5YTIeeKRXaeWbgGWTb88/XDi+06C+W7gFSojQLHo7+JV2/3DNM1gSTWMK\n6TXM1wcDKKyBE5xgUgIYoJ+n9rbTm4qFE9YojONhAoGAGz0Q861zxlcd8ykXHmj+\n+oAhcDU5C+HBYx27jo1/UQWLCiQioJyYy5YdVf3C0lia1gpHN12zbgHRvVxoDMdC\nQZ2zJ9u25ENScxTXhPM75GW2VHMVf4RmqTxuYabyD2B8XukRKeZ1xkLEauUawr7g\nmyoA3T90r/6uQ70fqfa7Eek=\n-----END PRIVATE KEY-----\n',
      target: ['production', 'preview', 'development']
    },
    {
      key: 'NEXT_PUBLIC_SITE_URL',
      value: 'https://shifadigitalsolution.in',
      target: ['production', 'preview', 'development']
    },
    {
      key: 'EMAIL_HOST',
      value: 'smtp.gmail.com',
      target: ['production', 'preview', 'development']
    },
    {
      key: 'EMAIL_PORT',
      value: '587',
      target: ['production', 'preview', 'development']
    },
    {
      key: 'EMAIL_USER',
      value: 'your-email@gmail.com', // UPDATE THIS
      target: ['production', 'preview', 'development']
    },
    {
      key: 'EMAIL_PASS',
      value: 'your-app-password', // UPDATE THIS
      target: ['production', 'preview', 'development']
    }
  ]
};

// Helper function to make API requests
function makeRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const parsed = body ? JSON.parse(body) : {};
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', reject);
    
    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

// Get project ID from project name
async function getProjectId(teamId, projectName) {
  const options = {
    hostname: 'api.vercel.com',
    path: `/v9/projects/${projectName}${teamId ? `?teamId=${teamId}` : ''}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${CONFIG.VERCEL_TOKEN}`,
      'Content-Type': 'application/json'
    }
  };

  const response = await makeRequest(options);
  if (response.status === 200) {
    return response.data.id || projectName;
  }
  return projectName;
}

// Add environment variable
async function addEnvVar(projectId, teamId, envVar) {
  const options = {
    hostname: 'api.vercel.com',
    path: `/v10/projects/${projectId}/env${teamId ? `?teamId=${teamId}` : ''}`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${CONFIG.VERCEL_TOKEN}`,
      'Content-Type': 'application/json'
    }
  };

  const data = {
    key: envVar.key,
    value: envVar.value,
    type: 'encrypted',
    target: envVar.target
  };

  const response = await makeRequest(options, data);
  return response;
}

// Main function
async function main() {
  console.log('🚀 Starting Vercel Environment Variables Setup...\n');

  if (!CONFIG.VERCEL_TOKEN) {
    console.error('❌ Error: VERCEL_TOKEN is required!');
    console.log('\n📝 How to get your Vercel API Token:');
    console.log('   1. Go to: https://vercel.com/account/tokens');
    console.log('   2. Click "Create Token"');
    console.log('   3. Give it a name (e.g., "env-setup")');
    console.log('   4. Copy the token');
    console.log('   5. Set it as: VERCEL_TOKEN=your-token-here');
    console.log('   6. Or add it to .env.local file\n');
    process.exit(1);
  }

  try {
    // Get actual project ID
    console.log('🔍 Finding project...');
    const projectId = await getProjectId(CONFIG.TEAM_ID, CONFIG.PROJECT_ID);
    console.log(`✅ Found project: ${projectId}\n`);

    // Add each environment variable
    console.log('📝 Adding environment variables...\n');
    let successCount = 0;
    let failCount = 0;

    for (const envVar of CONFIG.ENV_VARS) {
      process.stdout.write(`Adding ${envVar.key}... `);
      
      try {
        const response = await addEnvVar(projectId, CONFIG.TEAM_ID, envVar);
        
        if (response.status === 200 || response.status === 201) {
          console.log('✅');
          successCount++;
        } else {
          console.log(`❌ (Status: ${response.status})`);
          if (response.data.error) {
            console.log(`   Error: ${response.data.error.message || JSON.stringify(response.data.error)}`);
          }
          failCount++;
        }
      } catch (error) {
        console.log(`❌`);
        console.log(`   Error: ${error.message}`);
        failCount++;
      }
    }

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 Summary:');
    console.log(`   ✅ Success: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    if (successCount > 0) {
      console.log('🎉 Environment variables added successfully!');
      console.log('📝 Next steps:');
      console.log('   1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables');
      console.log('   2. Verify all variables are present');
      console.log('   3. Update EMAIL_USER and EMAIL_PASS if needed');
      console.log('   4. Trigger a new deployment\n');
    }

  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the script
main();
