// code away!
require('dotenv').config();
const express = require("express");
const server = express();
// const posts = require("./posts/postRouter");
const users = require("./users/userRouter");
const port = process.env.PORT || 5000;


server.use(express.json());
server.use(users);

server.get('/', (req, res) => {
    res.send('<h1>Speak, friend, and enter.</h1>')
})


server.listen(port, () => {
    console.log(`Server listening on port:${port}`);
});