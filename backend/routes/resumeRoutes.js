const router = require('express').Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const { uploadResume, getResumes, getResume } = require('../controllers/resumeController');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

router.post('/upload', auth, upload.single('resume'), uploadResume);
router.get('/resumes', auth, getResumes);
router.get('/resume/:id', auth, getResume);

module.exports = router;
