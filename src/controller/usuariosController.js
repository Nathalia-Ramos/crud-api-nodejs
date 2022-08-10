
const usuariosServices = require ('../services/usuariosServices')
const bcrypt = require ('bcrypt')

 module.exports = {
 
    cadastroUsuario: async (req, res) => {

    let json = {error: '', result:{}};

    const { nome, email, senha,confirmPassword } = req.body

    if(nome && email && senha && confirmPassword){
        let usuarioCodigo = await usuariosServices.cadastroUsuario(nome, email, senha, confirmPassword);
        json.result = {
            codigo: usuarioCodigo,
            nome,
            email,
            senha,
            confirmPassword
        };
    }else{
        json.error = 'Não foi possível cadastrar usuário'
    }
    res.json(json);

    },

    listarUsuario: async (req, res) => {
        let json = {error: '', result: []}

        let usuarios = await usuariosServices.listarUsuario()

        for (let i in usuarios ){
            json.result.push({
                codigo: usuarios[i].codigo,
                descricao: usuarios[i]
            })
        }
        res.json(json)

    },

    usuarioID: async (req, res) => {
        let json = {error: 'id não encontrado', result:{}}

        let id_usuario = req.params.id_usuario
        let usuario = await usuariosServices.usuarioID(id_usuario)

        if(usuario){
            json.result = usuario
        }
        res.json(json)
    },

    updateUsuario: async (req, res) => {

        let json = {error: '', result:{}}

        let id_usuario = req.params.id_usuario;
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha;
        let confirmPassword = req.body.confirmPassword;

        if(id_usuario, nome, email, senha,confirmPassword){ 
            await usuariosServices.updateUsuario (id_usuario, nome, email, senha, confirmPassword)
            json.result = {
                id_usuario,
                nome,   
                email,
                senha,
                confirmPassword
               
            };
         }
         res.json(json)
    },
    deleteUsuario: async (req, res) => {
        let json = {error: '', result:{}}

        let id_usuario = req.params.id_usuario
        let usuario = await usuariosServices.deleteUsuario(id_usuario)

        if(usuario)
            json.result = usuario
        else    
        (res.json(json))
    }
}