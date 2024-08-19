import ND from '../models/ndModel.js';
import User from '../models/userModel.js';

// Select ND situation and associate it with the user
export const selectND = async (req, res) => {
    const { userId, ndSituation } = req.body;
    try {
        const nd = new ND({ userId, ndSituation });
        await nd.save();

        // Update the user's ND situation in the user collection
        await User.findByIdAndUpdate(userId, { ndSituation });

        res.status(201).json({ message: 'ND situation selected', nd });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};