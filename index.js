import express from 'express';
import cors from 'cors';
import mongooseClient from './db/mongooseClient.js';
//import userRoutes from './routes/userRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import chalk from './lib/chalkColors.js'; 
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

mongooseClient();

//app.use('/api/users', userRoutes);

app.use('/api/reviews', reviewRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(chalk.success(`Server running on port ${PORT}`));
});