import express from 'express';
import { getSimulatedReview } from '../controllers/reviewController.js';

const router = express.Router();

router.get('/simulated-review', getSimulatedReview);

export default router;