import express from 'express';
import {
    createUser,
    createGuestUser,
    updateUser,
    getUsers,
    getUserById,
} from '../controllers/userController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const UserRouter = express.Router();

// User registration route without validation and rate limiting
router.post('/register', createUser);
router.post('/guest', createGuestUser);

router.get('/users', verifyToken, getUsers);
router.get('/users/:id', verifyToken, getUserById);
router.patch('/users/:id', verifyToken, updateUser);

export default UserRouter;
