require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const postsRouter = require('./Routers/posts/posts-router.js');

server.use(helmet());
server.use(cors());
server.use(express.json());

//routes
server.use("/posts", postsRouter);

server.get('/', (req, res) => {
    res.send('HabitLocker Api Working');
})



module.exports = server;