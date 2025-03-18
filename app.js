import express from 'express';
import connectDB from './db.js';
import dotenv from 'dotenv';
import { globalErrorMiddleware } from './utils/ErrorHandeling.js';

const app = express();
dotenv.config();
// Connect DB
connectDB();

app.use(express.json());

import userAuthRoutes from './routes/userAuth.routes.js';

app.use('/api/v1/user', userAuthRoutes);

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'ok',
    data: 'This is the entry point for Next Post',
  });
});

app.use(globalErrorMiddleware);

app.listen(process.env.PORT || 5000, () => {
  console.log('App is running on port 5000');
});
