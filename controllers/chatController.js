import Chat from '../models/chatModel.js';

// Save chat message
export const saveMessage = async (req, res) => {
    const { userId, message } = req.body;
    try {
        const chatMessage = new Chat({ userId, message });
        await chatMessage.save();
        res.status(201).json({ message: 'Message saved', chatMessage });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};