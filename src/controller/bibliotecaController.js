const bibliotecaServices = require ('../services/bibliotecaServices')
const bcrypt = require ('bcrypt')


module.exports = {
     buscarTodos : async (req, res) =>{
       
        let json = {error: '', result: []}

        let livros = await bibliotecaServices.buscarTodos()

        for (let i in livros ){
            json.result.push({
                codigo: livros[i].codigo,
                descricao: livros[i]
            })
        }
        res.json(json)

    },

    buscarId: async (req, res) => {
        let json = {error: 'id não encontrado', result:{}}
        
        // Resgatando o ID
        let id = req.params.id;
        let livros = await bibliotecaServices.buscarId(id);


        // Só vai entrar aqui se o livro for retornado pelo banco
        if(livros) {
            json.result = livros;
        }

        res.json(json);
        
    },

    inserirLivros: async (req, res) => { 

        let json = {error: '', result:{}};

        // let nome       = req.body.nome;
        // let editora    = req.body.editora;
        // let idioma     = req.body.idioma;
        // let Autor      = req.body.Autor;
        // let qtsPaginar = req.body.qtsPaginar;
        // let resumo     = req.body.resumo;

        const { nome, editora, idioma, Autor, qtsPaginar, resumo} = req.body
        
      
        if(nome && editora && idioma && Autor && qtsPaginar && resumo){
      
            let livroCodigo = await bibliotecaServices.inserirLivros(nome, editora, idioma, Autor, qtsPaginar, resumo);
            json.result = {
                codigo: livroCodigo,
                nome,   
                editora,
                idioma,
                Autor,
                qtsPaginar,
                resumo
            };

        }else{
            json.error = 'Não foi possível inserir dados';
        }
            res.json(json);
    },
    cadastroUsuario: async (req, res) => {
        const { nome, email, senha,confirmPassword } = req.body

        if(!nome || !email || !senha ){
            return res.status(422).json({msg: "Existem campos que nao foram preenchidos"})

        }
        if(senha != confirmPassword){
            return res.status(422).json({msg: "Senhas não correspondente"})
        }
        
        if(nome && email && senha){
      
            let livroCodigo = await bibliotecaServices.cadastroUsuario(nome, email, senha);
            json.result = {
                codigo: livroCodigo,
                nome,   
                email,
                senha
            };

        }else{
            json.error = 'Não foi possível inserir dados';
        }
            res.json(json);


    },
    update: async (req, res) => {
        let json = {error: '', result:{}};

        let id         = req.params.id;
        let nome       = req.body.nome;
        let editora    = req.body.editora;
        let idioma     = req.body.idioma;
        let Autor      = req.body.Autor;
        let qtsPaginar = req.body.qtsPaginar;
        let resumo     = req.body.resumo;

        if (id,nome ,editora,idioma , Autor , qtsPaginar, resumo) { 
            await bibliotecaServices.update(id, nome, editora, idioma, Autor, qtsPaginar, resumo)    
            json.result = {
                id,
                nome,   
                editora,
                idioma,
                Autor,
                qtsPaginar,
                resumo
            };
        }
            res.json(json);
    },
    
    delete: async (req, res) => {
        let json = {error: '', result:{msg:'Registro excluído com sucesso'}}
        
        // Resgatando o ID
        let id = req.params.id;
        let livros = await bibliotecaServices.delete(id);

        // Só vai entrar aqui se o livro for retornado pelo banco
        if(livros) {
            json.result = livros;
        }

        (res.json(json))
        
        
    },
  
 }
