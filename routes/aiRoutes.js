import express from 'express';
import { analyzeInput } from '../controllers/aiController.js';

const AIRouter = express.Router();

// Save AI analysis
router.post('/analyze', analyzeInput); 

export default AIRouter;