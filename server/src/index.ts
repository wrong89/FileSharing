import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import router from './routes';

import redis from './db';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

// app.get('/', (req, res) => {
//     // fs.writeFileSync(`${storagePath}/someText.txt`, 'TEST');
//     res.send('Hello world');
// });

// app.post('/upload', (req, res) => {});

app.listen(PORT, async () => {
    await redis.connect();

    console.log(`app listening on port ${PORT}`);
});
