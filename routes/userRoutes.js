import express from 'express';
import { createGuestUser, getGuestUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/guest', createGuestUser);

router.get('/guests', getGuestUser);

export default router;