import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './router/router';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(
    cors({
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
        origin: '*',
        credentials: true,
    })
);

mongoose.set('strictQuery', false);
app.use(fileUpload());
app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api', router);
app.use(errorHandler);

app.use('/', (req, res) => {
    return res.status(200).send({ message: 'hello its work' });
});

const start = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL!);
        app.listen(process.env.PORT, () => {
            console.log(`server on port ${process.env.PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
