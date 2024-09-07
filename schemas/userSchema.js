import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum: ['guest'],
    default: 'guest',
  },
  neurodivergentStatus: {
    type: String,
    required: false, 
  },
}, { timestamps: true }); 

export default userSchema;