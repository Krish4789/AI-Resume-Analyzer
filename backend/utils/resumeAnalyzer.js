const fs = require('fs');

exports.analyzeResume = (filePath) => {
  const text = fs.readFileSync(filePath, 'utf-8');
  return { score: 0, sections: {}, suggestions: [] };
};
let score = 0;

const words = text.split(/\s+/).length;
if (words > 300) score += 20;