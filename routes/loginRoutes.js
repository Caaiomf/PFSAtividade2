const express = require("express");
const LoginController = require("../controllers/logincontroller")


const router = express.Router();

let controller = new LoginController()
router.get("/", controller.rotaLogin);
router.post("/acess", controller.acess);
router.get("/recuperar", controller.rotaRecuperar);
router.get("/acesso", controller.rotaAcesso);
router.post("/recuperar", controller.recuperar);

module.exports = router;