const Resume = require('../models/Resume');
const { analyzeResume } = require('../utils/resumeAnalyzer');

exports.uploadResume = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  const result = analyzeResume(req.file.path);

  const resume = await Resume.create({
    userId: req.user.id,
    filename: req.file.filename,
    ...result
  });

  res.json(resume);
};

exports.getResumes = async (req, res) => {
  const resumes = await Resume.find({ userId: req.user.id });
  res.json(resumes);
};

exports.getResume = async (req, res) => {
  const resume = await Resume.findOne({
    _id: req.params.id,
    userId: req.user.id
  });

  if (!resume) return res.status(404).json({ message: 'Not found' });

  res.json(resume);
};
