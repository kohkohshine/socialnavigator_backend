import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
    password: { type: String },
    isGuest: { type: Boolean, default: false },
    ndSituation: { type: String },
    createdAt: { type: Date, default: Date.now }
});

export default userSchema;