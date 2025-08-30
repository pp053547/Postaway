import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js'
import postRoutes from './src/routes/postRoutes.js';
import commentRoutes from './src/routes/commentRoutes.js';
import friendRoutes from './src/routes/friendRoutes.js';
import otpRoutes from './src/routes/otpRoutes.js';
import errorMiddleware from './src/middlewares/errorMiddleware.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/users', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/friends', friendRoutes);
app.use('/api/otp', otpRoutes);

// Error Handling
app.use(errorMiddleware);

export default app;
    