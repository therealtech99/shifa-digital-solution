/**
 * Force fix NEXT_PUBLIC_SITE_URL - Delete and recreate with direct value
 * This will completely remove any secret references
 */

const https = require('https');

const CONFIG = {
  VERCEL_TOKEN: '7J4miumhMp0dq39HCunpxShB',
  TEAM_ID: 'the-real-tech',
  PROJECT_ID: 'prj_wUKQQ9yjADPbQDliGxxwmqoOZgoj', // From your project settings
  ENV_KEY: 'NEXT_PUBLIC_SITE_URL',
  ENV_VALUE: 'https://shifadigitalsolution.in'
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

async function createEnvVar() {
  const options = {
    hostname: 'api.vercel.com',
    path: `/v10/projects/${CONFIG.PROJECT_ID}/env?teamId=${CONFIG.TEAM_ID}`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${CONFIG.VERCEL_TOKEN}`,
      'Content-Type': 'application/json'
    }
  };
  
  const data = {
    key: CONFIG.ENV_KEY,
    value: CONFIG.ENV_VALUE,
    type: 'encrypted', // Vercel encrypts values, but this is NOT a secret reference
    target: ['production', 'preview', 'development']
  };
  
  return await makeRequest(options, data);
}

async function main() {
  console.log('🔧 Force fixing NEXT_PUBLIC_SITE_URL...\n');
  
  try {
    // Step 1: Get all environment variables
    console.log('📋 Getting all environment variables...');
    const envResponse = await getAllEnvVars();
    
    if (envResponse.status !== 200) {
      console.error(`❌ Failed to get env vars: ${envResponse.status}`);
      console.error(envResponse.data);
      process.exit(1);
    }
    
    const envVars = envResponse.data.envs || [];
    console.log(`✅ Found ${envVars.length} environment variables\n`);
    
    // Step 2: Find and delete ALL instances of NEXT_PUBLIC_SITE_URL
    const matchingVars = envVars.filter(v => v.key === CONFIG.ENV_KEY);
    
    if (matchingVars.length > 0) {
      console.log(`🗑️  Found ${matchingVars.length} instance(s) of ${CONFIG.ENV_KEY}`);
      console.log('   Deleting all instances...\n');
      
      for (const envVar of matchingVars) {
        console.log(`   Deleting: ${envVar.id} (${envVar.type})...`);
        const deleteResponse = await deleteEnvVar(envVar.id);
        
        if (deleteResponse.status === 200) {
          console.log('   ✅ Deleted\n');
        } else {
          console.log(`   ⚠️  Status: ${deleteResponse.status}`);
          if (deleteResponse.data.error) {
            console.log(`   Error: ${deleteResponse.data.error.message}`);
          }
        }
        
        // Wait between deletions
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } else {
      console.log(`ℹ️  No existing ${CONFIG.ENV_KEY} found\n`);
    }
    
    // Step 3: Wait a moment
    console.log('⏳ Waiting 2 seconds...\n');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Step 4: Create new environment variable with direct value
    console.log(`➕ Creating ${CONFIG.ENV_KEY} with direct value...`);
    console.log(`   Value: ${CONFIG.ENV_VALUE}`);
    console.log(`   Environments: Production, Preview, Development\n`);
    
    const createResponse = await createEnvVar();
    
    if (createResponse.status === 200 || createResponse.status === 201) {
      console.log('✅ Successfully created!\n');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('✅ Environment variable fixed!');
      console.log(`   Key: ${CONFIG.ENV_KEY}`);
      console.log(`   Value: ${CONFIG.ENV_VALUE}`);
      console.log('   Type: Direct value (not a secret reference)');
      console.log('   Environments: Production, Preview, Development');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
      console.log('📝 Next steps:');
      console.log('   1. Go to Vercel Dashboard → Deployments');
      console.log('   2. Click "Create Deployment"');
      console.log('   3. Enter: main');
      console.log('   4. Click "Create Deployment"');
      console.log('   5. The error should be GONE now! 🎉\n');
    } else {
      console.error(`❌ Failed to create: ${createResponse.status}`);
      console.error(createResponse.data);
      
      if (createResponse.data.error) {
        console.error(`\nError details: ${JSON.stringify(createResponse.data.error, null, 2)}`);
      }
      process.exit(1);
    }
    
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
