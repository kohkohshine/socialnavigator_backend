import mongoose from 'mongoose';

const ndSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ndSituation: { type: String, required: true },
    updatedAt: { type: Date, default: Date.now }
});

export default ndSchema;