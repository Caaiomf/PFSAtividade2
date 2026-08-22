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

    recuperar(req, res) {
        const email = req.body.email?.trim();

        if (!email || !email.includes("@")) {
            return res.render("recuperar", {
                erro: "Email inválido. Digite um e-mail válido com @."
            });
        }

        return res.render("recuperar", {
            sucesso: `Enviamos um link para recuperação de senha no e-mail ${email}`
        });
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