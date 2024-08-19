import mongoose from 'mongoose';

const aiSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    prompt: { type: String, required: true },
    keyPoints: { type: String, required: true },
    tone: { type: String, required: true },
    miscommunications: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default aiSchema;