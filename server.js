const express = require("express");
const expressEjsLayout = require("express-ejs-layouts")
const loginRouter = require("./routes/loginRoutes")

const server = express();

server.set("view engine", "ejs");
server.use(expressEjsLayout);
server.use(express.urlencoded());

server.use("/", loginRouter);

server.listen(5500, function(){
    console.log("Sevidor web funcionando")
})