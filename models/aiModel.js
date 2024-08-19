import mongoose from 'mongoose';
import aiSchema from '../schemas/aiSchema.js';

const AIAnalysis = mongoose.model('AIAnalysis', aiSchema);
export default AIAnalysis;