import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Create a new user
export const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User created', user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Create a guest user and issue a JWT
export const createGuestUser = async (req, res) => {
    try {
        const guestUsername = `guest${Math.floor(Math.random() * 10000)}`;
        const guestUser = new User({ username: guestUsername, isGuest: true });
        await guestUser.save();

        const token = jwt.sign({ userId: guestUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'Guest user created', token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a user's details
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        if (updates.password) {
            updates.password = await bcrypt.hash(updates.password, 10);
        }
        const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        res.status(200).json({ message: 'User updated', user: updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
