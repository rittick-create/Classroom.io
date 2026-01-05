import express from 'express';
const router = express.Router();

import { signup, signin, logout, getProfile } from '../controllers/userController.js';
import { authenticateJwt } from '../middleware/authMiddleware.js';

router.post('/signup', signup);
router.post('/signin', signin);

router.post('/logout', authenticateJwt, logout);
router.get('/profile', authenticateJwt, getProfile);

export default router;