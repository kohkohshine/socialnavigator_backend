import express from 'express';

const ndRouter = express.Router();

// Example route for selecting neurodivergent category
ndRouter.post('/select', (req, res) => {
    res.send('Neurodivergent category selection route');
});

export default ndRouter;