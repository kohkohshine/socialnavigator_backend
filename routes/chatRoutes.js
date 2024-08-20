import express from 'express';
import { saveMessage } from '../controllers/chatController.js';

const ChatRouter = express.Router();

router.post('/message', saveMessage); // Save chat message

export default ChatRouter;