require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

//routes
server.get('/', (req, res) => {
    res.send('HabitLocker Api Working');
})


module.exports = server;