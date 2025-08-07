const { spawn } = require('child_process');
const http = require('http');

console.log('Starting Next.js development server...');

const child = spawn('npm', ['run', 'dev'], {
  stdio: 'pipe',
  shell: true
});

let serverStarted = false;

child.stdout.on('data', (data) => {
  const output = data.toString();
  console.log(output);
  
  if (output.includes('Ready') || output.includes('Local:')) {
    serverStarted = true;
    console.log('✅ Server started successfully!');
    
    // Test the main routes
    testRoutes();
  }
});

child.stderr.on('data', (data) => {
  const error = data.toString();
  console.error('❌ Error:', error);
});

function testRoutes() {
  const routes = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/services/drain-cleaning',
    '/services/water-heater',
    '/services/leak-detection',
    '/services/emergency-plumbing'
  ];

  console.log('\n🧪 Testing routes...');
  
  routes.forEach((route, index) => {
    setTimeout(() => {
      testRoute(route);
    }, index * 500);
  });
}

function testRoute(route) {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: route,
    method: 'GET'
  };

  const req = http.request(options, (res) => {
    if (res.statusCode === 200) {
      console.log(`✅ ${route} - OK (${res.statusCode})`);
    } else if (res.statusCode === 404) {
      console.log(`⚠️  ${route} - Not Found (${res.statusCode})`);
    } else {
      console.log(`❌ ${route} - Error (${res.statusCode})`);
    }
  });

  req.on('error', (err) => {
    console.log(`❌ ${route} - Connection Error: ${err.message}`);
  });

  req.setTimeout(5000, () => {
    console.log(`⏰ ${route} - Timeout`);
  });

  req.end();
}

// Cleanup after 30 seconds
setTimeout(() => {
  console.log('\n🛑 Stopping server...');
  child.kill();
  process.exit(0);
}, 30000); 