const express = require ('express');
const helmet = require('helmet');

const projectRouter = require("./projectRouter");
const actionRouter = require ("./actionRouter.js");
const server = express();
server.use(express.json());
server.use(helmet());

server.use("/api/projects", projectRouter)
server.use("/api/actions", actionRouter);
server.get("/", (req,res) => {
    res.send("Welcome!");
});
module.exports = server;