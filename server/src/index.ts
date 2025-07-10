import express from 'express';
import contactRouter from './routes/contact';

const app = express();
app.use(express.json());

// Use the Router for a path
app.use('/api/contact', contactRouter);