const express = require ('express');
const helmet = require('helmet');

const projectRouter = require("./projectRouter");
const actionRouter = require ("./actionRouter.js");
const server = express();
server.use(express.json());
server.use(helmet());

server.use("/api/project", projectRouter)
server.use("/api/action", actionRouter);
server.get("/", (req,res) => {
    res.send("Welcome!");
});
module.exports = server;