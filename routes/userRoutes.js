import express from 'express';
import { createUser, createGuestUser, getUsers } from '../controllers/userController.js';

const router = express.Router();

// Create a regular user
router.post('/register', createUser); 

 // Create a guest user
router.post('/guest', createGuestUser);

// List all users
router.get('/users', getUsers); 

export default router;