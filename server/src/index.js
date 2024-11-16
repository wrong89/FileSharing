require('dotenv').config();
const fs = require('fs');
const express = require('express');
const path = require('path');
const generateFileName = require('./helpers/generateFileName');

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    const storagePath = path.resolve(__dirname, './storage');

    fs.writeFileSync(`${storagePath}/someText.txt`, 'TEST');
    res.send('Hello world');
});

app.post('/upload', (req, res) => {});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
