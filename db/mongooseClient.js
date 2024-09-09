import mongoose from 'mongoose';  
import dotenv from 'dotenv';     
import chalk from '../lib/chalkColors.js';  


dotenv.config();

const mongooseClient = async () => {
  try {
    const uri = process.env.MONGODB_URI;

   
    if (!uri) {
      throw new Error('MONGODB_URI is not defined. Check your .env file.');
    }

  
    await mongoose.connect(uri);

   
    console.log(chalk.success('Connected to MongoDB'));
  } catch (error) {
  
    console.error(chalk.error('Error connecting to MongoDB:'), error);
    process.exit(1);
  }
};

export default mongooseClient; 