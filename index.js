// code away!
require('dotenv').config();
const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");
const logger = require("./middleware/logger");
// const posts = require("./posts/postRouter");
const users = require("./users/userRouter");
const port = process.env.PORT;


server.use(express.json());
server.use(users);
server.use(cors);
server.use(helmet);

server.get('/', (req, res) => {
    res.send('<h1>Speak, friend, and enter.</h1>')
})


server.listen(port, () => {
    console.log(`Server listening on port:${port}`);
});