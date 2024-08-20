import express from 'express';
import { selectND } from '../controllers/ndController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const NDRouter = express.Router();

router.post('/select', verifyToken, selectND);

export default NDRouter;