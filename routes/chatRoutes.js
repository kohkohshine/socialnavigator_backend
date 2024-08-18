import express from 'express';

const chatRouter = express.Router();

// Example route for handling chat input
chatRouter.post('/message', (req, res) => {
    res.send('Chat message handling route');
});

export default chatRouter;