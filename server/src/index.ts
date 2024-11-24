import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
// import bus
import express, { Request, Response } from 'express';
import fileUpload from 'express-fileupload';
import router from './routes';

import redis from './db';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(fileUpload({}));

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use('/api', router);

app.post('/file/test', (req: Request, res: Response) => {
    console.log('Files', req.files);

    res.sendStatus(200);
});

app.listen(PORT, async () => {
    await redis.connect();

    console.log(`app listening on port ${PORT}`);
});
