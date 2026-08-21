const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const loginRouter = require("./routes/loginRoutes")

const server = express();

server.set("view engine", "ejs");
server.set("layout", "./layout.ejs");
server.use(expressEjsLayouts);
server.use(express.urlencoded());

server.use("/", loginRouter);

server.listen(5400, function(){
    console.log("Sevidor web funcionando");
})