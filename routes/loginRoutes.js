const express = require("express");
const LoginController = require("../controllers/logincontroller")

const router = express.Router();

let controller = new LoginController()
router.get("/", controller.rotaLogin);
router.post("/recuperar", controller.rotaRecuperar);



module.exports = router;