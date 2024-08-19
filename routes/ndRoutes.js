import express from 'express';
import { selectND } from '../controllers/ndController.js';

const router = express.Router();

router.post('/select', selectND); // Select ND situation

export default router;