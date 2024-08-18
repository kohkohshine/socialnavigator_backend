import mongoose from 'mongoose';
import chalk from 'chalk';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(chalk.green('MongoDB Atlas Connected...'));
    } catch (err) {
        console.error(chalk.red(`Error: ${err.message}`));
        process.exit(1);
    }
};

export default connectDB;

// Automatically connect when the module is imported
connectDB();