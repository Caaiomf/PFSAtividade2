let email = ["fulano@gmail.com"]
let senha = ["123"]

class LoginController{
    rotaLogin(req, res){
        res.render("login");
    }
    rotaRecuperar(req,res){
        res.render("recuperar")
    }
}

module.exports = LoginController;