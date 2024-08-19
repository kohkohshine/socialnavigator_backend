import mongoose from 'mongoose';
import ndSchema from '../schemas/ndSchema.js';

const ND = mongoose.model('ND', ndSchema);
export default ND;