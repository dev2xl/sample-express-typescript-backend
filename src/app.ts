import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

// Routers
import authRouter from '@/routes/auth';
import trackingRouter from '@/routes/tracking';

// Setup app
const app = express();

// DB
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.error(err));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes
app.use('/api/auth', authRouter);
app.use('/api/tracking-parcel', trackingRouter);

// Static
app.use(express.static(path.join(__dirname, '../public/')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

export default app;
