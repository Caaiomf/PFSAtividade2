let usuarios = [
    {
        email: "a@g",
        senha: "1"
    }
];

class LoginController {
    acess(req, res) {
        let emailb = req.body.email;
        let senhab = req.body.senha;

        if(usuarios[0].email == emailb && usuarios[0].senha == senhab){
            res.render("acesso");
        } else {
            res.render("recuperar");
        }
    }

    rotaLogin(req, res){
        console.log(req)
        res.render("login");
    }
    rotaRecuperar(req,res){
        console.log(req)
        res.render("recuperar")
    }
    rotaAcesso(req,res){
        res.render("acesso")
    }
}

module.exports = LoginController;