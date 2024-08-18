import express from 'express';

const userRouter = express.Router();

// Example route for user registration
userRouter.post('/register', (req, res) => {
    res.send('User registration route');
});

// Example route for user login
userRouter.post('/login', (req, res) => {
    res.send('User login route');
});

export default userRouter;