import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import fileUpload from 'express-fileupload';
import router from './routes';

import redis from './db';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(fileUpload({}));

app.use(express.json());
app.use(express.urlencoded());

app.use('/api', router);

app.listen(PORT, async () => {
    await redis.connect();

    console.log(`app listening on port ${PORT}`);
});
