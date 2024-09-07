import mongoose from 'mongoose';
import chalk from '../lib/chalkColors.js';

const mongooseClient = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(chalk.success('Connected to MongoDB'));
  } catch (error) {
    console.error(chalk.error('Error connecting to MongoDB:'), error);
    process.exit(1); 
  }
};

export default mongooseClient;