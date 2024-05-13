import express from 'express';
import dotenv from 'dotenv';
import linkRoute from './route/linkRoute.js';
import errorHandler from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/links', linkRoute);
app.use(errorHandler);

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});