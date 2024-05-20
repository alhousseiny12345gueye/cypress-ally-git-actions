// Import required modules
const { writeFileSync } = require('fs');
const { createHtmlReport } = require('axe-html-reporter');

console.log('Modules imported successfully');

// Load axe results from JSON file
const results = require('./public/a11y_reports/axe_a11y_report.json');

console.log('Loaded axe results from JSON file', results);

// Generate HTML report using axe-html-reporter
const html = createHtmlReport({
  results,
  options: {
    projectKey: 'ally_git_actions',
    reportFileName: 'axe_a11y_report.html',
    pageTitle: 'Accessibility Report',
  },
});

console.log('Generated HTML report', html);

// Write HTML report to file
writeFileSync('./public/a11y_reports/axe_a11y_report.html', html);

console.log('Wrote HTML report to file');