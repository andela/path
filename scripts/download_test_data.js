const fs = require('fs');
const request = require('superagent');

const GREENHOUSE_TOKEN = process.env.GREENHOUSE_TOKEN;

if (!GREENHOUSE_TOKEN) {
  console.log('Set GREENHOUSE_TOKEN env variable to make the script work.');
  process.exit(1);
}

console.log('Downloading data...');
Promise.all([
  request.get(`https://${GREENHOUSE_TOKEN}@harvest.greenhouse.io/v1/jobs?per_page=500`),
  request.get(`https://${GREENHOUSE_TOKEN}@harvest.greenhouse.io/v1/applications?per_page=500`),
  request.get(`https://${GREENHOUSE_TOKEN}@harvest.greenhouse.io/v1/candidates?per_page=500`),
]).then(([jobsRes, applicationsRes, candidatesRes]) => {
  const jobs = jobsRes.body;
  const applications = applicationsRes.body;
  const candidates = candidatesRes.body;

  const j = jobs.filter(a => a.departments.find(d => d && d.name === 'Fellowship'));
  console.log('Saving jobs...');
  fs.writeFileSync('./public/jobs.json', JSON.stringify(j, null, 4));

  const a = applications.filter(app => app.jobs.find(c => c && j.find(d => d.id === c.id)));
  console.log('Saving appications...');
  fs.writeFileSync('./public/applications.json', JSON.stringify(a, null, 4));

  const c = candidates.filter(b => b.application_ids.find(id => a.find(d => d.id === id)));
  console.log('Saving candidates...');
  fs.writeFileSync('./public/candidates.json', JSON.stringify(c, null, 4));

  process.exit(0);
}).catch(() => {
  console.log('Something went wrong.');
  process.exit(1);
});
