import express from 'express';

const aiRouter = express.Router();

// Example route for AI processing
aiRouter.post('/analyze', (req, res) => {
    res.send('AI analysis route');
});

export default aiRouter;