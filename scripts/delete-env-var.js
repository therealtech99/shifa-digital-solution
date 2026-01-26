/**
 * Delete NEXT_PUBLIC_SITE_URL from Vercel completely
 * The code will use the hardcoded fallback value instead
 */

const https = require('https');

const CONFIG = {
  VERCEL_TOKEN: '7J4miumhMp0dq39HCunpxShB',
  TEAM_ID: 'the-real-tech',
  PROJECT_ID: 'prj_wUKQQ9yjADPbQDliGxxwmqoOZgoj',
  ENV_KEY: 'NEXT_PUBLIC_SITE_URL'
};

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
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function getAllEnvVars() {
  const options = {
    hostname: 'api.vercel.com',
    path: `/v10/projects/${CONFIG.PROJECT_ID}/env?teamId=${CONFIG.TEAM_ID}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${CONFIG.VERCEL_TOKEN}`,
      'Content-Type': 'application/json'
    }
  };
  return await makeRequest(options);
}

async function deleteEnvVar(envId) {
  const options = {
    hostname: 'api.vercel.com',
    path: `/v10/projects/${CONFIG.PROJECT_ID}/env/${envId}?teamId=${CONFIG.TEAM_ID}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${CONFIG.VERCEL_TOKEN}`,
      'Content-Type': 'application/json'
    }
  };
  return await makeRequest(options);
}

async function main() {
  console.log('🗑️  Deleting NEXT_PUBLIC_SITE_URL from Vercel...\n');
  console.log('ℹ️  The code will use the hardcoded fallback value instead\n');
  
  try {
    const envResponse = await getAllEnvVars();
    
    if (envResponse.status !== 200) {
      console.error(`❌ Failed: ${envResponse.status}`);
      process.exit(1);
    }
    
    const envVars = envResponse.data.envs || [];
    const matchingVars = envVars.filter(v => v.key === CONFIG.ENV_KEY);
    
    if (matchingVars.length === 0) {
      console.log('✅ Variable not found - already deleted or never existed\n');
      console.log('🎉 You can now deploy! The code will use the hardcoded value.\n');
      return;
    }
    
    console.log(`Found ${matchingVars.length} instance(s) to delete...\n`);
    
    for (const envVar of matchingVars) {
      console.log(`Deleting: ${envVar.id}...`);
      const deleteResponse = await deleteEnvVar(envVar.id);
      
      if (deleteResponse.status === 200) {
        console.log('✅ Deleted successfully\n');
      } else {
        console.log(`⚠️  Status: ${deleteResponse.status}`);
      }
    }
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ Environment variable deleted!');
    console.log('📝 The code will now use the hardcoded value:');
    console.log('   https://shifadigitalsolution.in');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log('🎉 Now try creating a deployment - it should work!\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
