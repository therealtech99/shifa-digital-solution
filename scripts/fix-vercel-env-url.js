/**
 * Fix NEXT_PUBLIC_SITE_URL in Vercel
 * This script will delete and recreate the environment variable to ensure it's not referencing a secret
 */

const https = require('https');

// Configuration
const CONFIG = {
  VERCEL_TOKEN: process.env.VERCEL_TOKEN || '7J4miumhMp0dq39HCunpxShB',
  TEAM_ID: process.env.VERCEL_TEAM_ID || 'the-real-tech',
  PROJECT_ID: process.env.VERCEL_PROJECT_ID || 'shifa-digital-solution99',
  ENV_VAR_KEY: 'NEXT_PUBLIC_SITE_URL',
  ENV_VAR_VALUE: 'https://shifadigitalsolution.in'
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
          resolve({ status: res.statusCode, data: parsed, headers: res.headers });
        } catch (e) {
          resolve({ status: res.statusCode, data: body, headers: res.headers });
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

// Get project ID
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

// Get all environment variables
async function getEnvVars(projectId, teamId) {
  const options = {
    hostname: 'api.vercel.com',
    path: `/v10/projects/${projectId}/env${teamId ? `?teamId=${teamId}` : ''}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${CONFIG.VERCEL_TOKEN}`,
      'Content-Type': 'application/json'
    }
  };

  const response = await makeRequest(options);
  return response;
}

// Delete environment variable
async function deleteEnvVar(projectId, teamId, envVarId) {
  const options = {
    hostname: 'api.vercel.com',
    path: `/v10/projects/${projectId}/env/${envVarId}${teamId ? `?teamId=${teamId}` : ''}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${CONFIG.VERCEL_TOKEN}`,
      'Content-Type': 'application/json'
    }
  };

  const response = await makeRequest(options);
  return response;
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
  console.log('🔧 Fixing NEXT_PUBLIC_SITE_URL in Vercel...\n');

  if (!CONFIG.VERCEL_TOKEN) {
    console.error('❌ Error: VERCEL_TOKEN is required!');
    process.exit(1);
  }

  try {
    // Get project ID
    console.log('🔍 Finding project...');
    const projectId = await getProjectId(CONFIG.TEAM_ID, CONFIG.PROJECT_ID);
    console.log(`✅ Found project: ${projectId}\n`);

    // Get all environment variables
    console.log('📋 Getting current environment variables...');
    const envVarsResponse = await getEnvVars(projectId, CONFIG.TEAM_ID);
    
    if (envVarsResponse.status !== 200) {
      console.error(`❌ Failed to get environment variables: ${envVarsResponse.status}`);
      console.error(envVarsResponse.data);
      process.exit(1);
    }

    // Find and delete existing NEXT_PUBLIC_SITE_URL
    const envVars = envVarsResponse.data.envs || [];
    const existingVar = envVars.find(v => v.key === CONFIG.ENV_VAR_KEY);

    if (existingVar) {
      console.log(`🗑️  Deleting existing ${CONFIG.ENV_VAR_KEY}...`);
      const deleteResponse = await deleteEnvVar(projectId, CONFIG.TEAM_ID, existingVar.id);
      
      if (deleteResponse.status === 200) {
        console.log('✅ Deleted successfully\n');
      } else {
        console.log(`⚠️  Delete response: ${deleteResponse.status}`);
        console.log(deleteResponse.data);
      }
    } else {
      console.log(`ℹ️  ${CONFIG.ENV_VAR_KEY} not found (will create new)\n`);
    }

    // Wait a moment
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Add new environment variable with direct value
    console.log(`➕ Adding ${CONFIG.ENV_VAR_KEY} with direct value...`);
    const addResponse = await addEnvVar(projectId, CONFIG.TEAM_ID, {
      key: CONFIG.ENV_VAR_KEY,
      value: CONFIG.ENV_VAR_VALUE,
      target: ['production', 'preview', 'development']
    });

    if (addResponse.status === 200 || addResponse.status === 201) {
      console.log('✅ Added successfully!\n');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('✅ Environment variable fixed!');
      console.log(`   Key: ${CONFIG.ENV_VAR_KEY}`);
      console.log(`   Value: ${CONFIG.ENV_VAR_VALUE}`);
      console.log('   Environments: Production, Preview, Development');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
      console.log('📝 Next steps:');
      console.log('   1. Go to Vercel Dashboard → Deployments');
      console.log('   2. Create a new deployment or wait for automatic deployment');
      console.log('   3. The error should be resolved now!\n');
    } else {
      console.error(`❌ Failed to add: ${addResponse.status}`);
      console.error(addResponse.data);
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the script
main();
