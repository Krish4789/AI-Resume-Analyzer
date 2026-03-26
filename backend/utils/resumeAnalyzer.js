const fs = require('fs');

exports.analyzeResume = (filePath) => {
  const text = fs.readFileSync(filePath, 'utf-8');
  return { score: 0, sections: {}, suggestions: [] };
};
let score = 0;

const words = text.split(/\s+/).length;
if (words > 300) score += 20;
const lower = text.toLowerCase();

const sections = {
  skills: /skills/i.test(lower),
  education: /education/i.test(lower),
  experience: /experience/i.test(lower),
};

if (sections.skills) score += 20;
if (sections.education) score += 20;
if (sections.experience) score += 20;
sections.projects = /projects/i.test(lower);
if (sections.projects) score += 20;
const suggestions = [];

if (!sections.skills) suggestions.push('Add a Skills section');
if (!sections.education) suggestions.push('Add an Education section');
if (!sections.experience) suggestions.push('Add an Experience section');
if (!sections.projects) suggestions.push('Add a Projects section');

return { score, sections, suggestions };