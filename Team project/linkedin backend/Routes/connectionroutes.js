const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const {
  sendRequest,
  acceptRequest,
  rejectRequest,
  getConnections
} = require('../controllers/connectionController');

router.post('/request/:userId', auth, sendRequest);
router.put('/accept/:id', auth, acceptRequest);
router.put('/reject/:id', auth, rejectRequest);
router.get('/', auth, getConnections);

module.exports = router;