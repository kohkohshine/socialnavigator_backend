import express from 'express';
import { saveMessage } from '../controllers/chatController.js';

const router = express.Router();

router.post('/message', saveMessage); // Save chat message

export default router;