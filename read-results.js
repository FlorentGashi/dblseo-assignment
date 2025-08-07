const fs = require('fs');

try {
  const report = JSON.parse(fs.readFileSync('./lighthouse-seo-score.json', 'utf8'));
  const seoScore = report.categories.seo.score * 100;
  
  console.log('🎯 SEO Score:', seoScore.toFixed(0) + '/100');
  console.log('\n📈 Key SEO Metrics:');
  
  Object.keys(report.audits).forEach(key => {
    const audit = report.audits[key];
    if (audit.score !== null && audit.score !== undefined) {
      const score = audit.score * 100;
      const status = score >= 90 ? '✅' : score >= 50 ? '⚠️' : '❌';
      console.log(`${status} ${audit.title}: ${score.toFixed(0)}/100`);
    }
  });
  
  console.log('\n🎉 Improvements Made:');
  console.log('✅ Made link text more descriptive');
  console.log('✅ Added context to phone and email links');
  console.log('✅ Improved button text with specific service mentions');
  
} catch (error) {
  console.error('❌ Error reading results:', error);
} 