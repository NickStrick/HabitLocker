require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const postsRouter = require('./Routers/posts/posts-router.js');
const sectionRouter = require('./Routers/sections/sections-router.js');
const categoryRouter = require('./Routers/categories/categories-router.js');

server.use(helmet());
server.use(cors());
server.use(express.json());

//routes
server.use("/posts", postsRouter);
server.use("/sections", sectionRouter);
server.use("/category", categoryRouter);

server.get('/', (req, res) => {
    res.send('HabitLocker Api Working');
})



module.exports = server;