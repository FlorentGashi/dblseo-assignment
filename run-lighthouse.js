const { spawn } = require('child_process');
const { exec } = require('child_process');

console.log('🚀 Starting Next.js development server...');

// Start the development server
const server = spawn('npm', ['run', 'dev'], {
  stdio: 'pipe',
  shell: true
});

let serverReady = false;

server.stdout.on('data', (data) => {
  const output = data.toString();
  console.log(output);
  
  if (output.includes('Ready') || output.includes('Local:')) {
    serverReady = true;
    console.log('✅ Server is ready! Running Lighthouse test...');
    
    // Extract port from output
    const portMatch = output.match(/Local:\s*http:\/\/localhost:(\d+)/);



    
    const port = portMatch ? portMatch[1] : 3002;
    console.log(`🎯 Detected server running on port ${port}`);
    
    // Wait a bit for server to fully start
    setTimeout(() => {
      runLighthouse(port);
    }, 3000);
  }
});

server.stderr.on('data', (data) => {
  console.error('❌ Server error:', data.toString());
});

function runLighthouse(port = 3002) {
  console.log(`🔍 Running Lighthouse SEO test on port ${port}...`);
  
  exec(`lighthouse http://localhost:${port} --only-categories=seo --output=json --output-path=./lighthouse-seo-score.json`, (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Lighthouse error:', error);
      return;
    }
    
    console.log('✅ Lighthouse test completed!');
    console.log('📊 Check lighthouse-seo-score.json for detailed results');
    
    // Parse and display the score
    try {
      const fs = require('fs');
      const report = JSON.parse(fs.readFileSync('./lighthouse-seo-score.json', 'utf8'));
      const seoScore = report.categories.seo.score * 100;
      console.log(`🎯 SEO Score: ${seoScore.toFixed(0)}/100`);
      
      // Display key SEO metrics
      console.log('\n📈 Key SEO Metrics:');
      report.audits && Object.keys(report.audits).forEach(key => {
        const audit = report.audits[key];
        if (audit.score !== null && audit.score !== undefined) {
          const score = audit.score * 100;
          const status = score >= 90 ? '✅' : score >= 50 ? '⚠️' : '❌';
          console.log(`${status} ${audit.title}: ${score.toFixed(0)}/100`);
        }
      });
      
    } catch (parseError) {
      console.error('❌ Error parsing Lighthouse results:', parseError);
    }
    
    // Stop the server
    server.kill();
    process.exit(0);
  });
}

// Cleanup on exit
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping server...');
  server.kill();
  process.exit(0);
});

// Timeout after 60 seconds
setTimeout(() => {
  console.log('⏰ Timeout reached, stopping...');
  server.kill();
  process.exit(1);
}, 60000); 