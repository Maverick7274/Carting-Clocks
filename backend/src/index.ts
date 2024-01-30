import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import router from './router';

const app = express();

dotenv.config({path: __dirname + '/config/config.env'});

connectDB(process.env.MONGODB_URI);

app.use(cors({
    credentials: true,
}));

const port = process.env.PORT || 5000;

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server listening on port 8080');
    console.log('http://localhost:8080/');
})


app.use('/', router())

