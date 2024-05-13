import express from 'express';
import dotenv from 'dotenv';
import linkRoute from './route/linkRoute.js';
import errorHandler from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// resolving dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/links', linkRoute);
app.use(errorHandler);

// use the client app
// app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'client', 'dist', 'index.html')));


// render client for any path
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')));

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});