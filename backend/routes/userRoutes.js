const express = require('express');
const router = express.Router();
const { signup, signin, logout, getProfile } = require('../controllers/userController');
const { authenticateJwt } = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/signin', signin);


router.post('/logout', authenticateJwt, logout);
router.get('/profile', authenticateJwt, getProfile);

module.exports = router;