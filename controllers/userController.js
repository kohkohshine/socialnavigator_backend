import User from '../models/userModel.js';

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

// Create a guest user
export const createGuestUser = async (req, res) => {
    try {
        // Generate a unique guest username
        const guestUsername = `guest${Math.floor(Math.random() * 10000)}`;
        const guestUser = new User({ username: guestUsername, isGuest: true });
        await guestUser.save();
        res.status(201).json({ message: 'Guest user created', user: guestUser });
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