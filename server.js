const express = require("express");
const loginRouter = require("./routes/loginRoutes")

const server = express();

server.set("view engine", "ejs");
server.use(express.urlencoded());

server.use("/", loginRouter);

server.listen(5400, function(){
    console.log("Sevidor web funcionando");
})