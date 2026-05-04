const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { updateProfile, getMyProfile, getProfile } = require('../controllers/profileController');

router.get('/me', auth, getMyProfile);
router.put('/', auth, updateProfile);
router.get('/:id', auth, getProfile);

module.exports = router;