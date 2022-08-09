const { parse } = require('dotenv');
const db = require ('../db')


module.exports = {
    buscarTodos: () =>{
        return new Promise ((accept, reject) => { 
            db.query('SELECT * FROM tblbiblioteca order by id desc' , (error, result) =>{
                if(error) {reject (error); return};
                accept (result);
            });
      });
    },

    buscarId: (id) => {
        return new Promise ((accept, reject) => {
            db.query('SELECT * FROM tblbiblioteca WHERE id= ?', [id],(error, result) =>{
                accept(result[0])
                if(error){reject(error); return;}
                if(result.length > 0)
                    accept (result[0])
                else    
                    accept (false)
            })
        })
    },

    inserirLivros: (nome, editora, idioma, Autor, qtsPaginar, resumo ) => {
        return new Promise ((accept, reject) => { 
            db.query('INSERT INTO tblbiblioteca(nome, editora, idioma, Autor, qtsPaginar, resumo) VALUES (?,?,?,?,?,?)',
                     [nome, editora,idioma, Autor,qtsPaginar, resumo], 
                     (error, result) =>{
                        if(error) {reject (error); return; }
                        accept (result.insertCodigo);
                             
            });
      });
    },
    cadastroUsuario: (nome, email, senha,confirmPassword) => {
        return new Promise ((accept, reject) => { 
            db.query('INSERT INTO usuarios(nome, email, senha, confirmPassword) VALUES (?,?,?,?)',
                     [nome, email,senha, confirmPassword], 
                     (error, result) =>{
                        if(error) {reject (error); return; }
                        accept (result.insertCodigo);
                             
            });
      });
    },

    update: (id,nome, editora, idioma, Autor, qtsPaginar, resumo ) => {
        return new Promise ((accept, reject) => { 
            db.query('UPDATE tblbiblioteca SET  nome=?, editora = ?, idioma = ?, Autor = ?, qtsPaginar=?, resumo=? WHERE id = ?', 
                     [nome, editora,idioma, Autor,qtsPaginar, resumo, id], 
                     (error, result) =>{
                        if(error) {reject (error); return;}
                        accept(result);
            });
      });
    },  

    delete: (id) => {
        return new Promise ((accept, reject) => {
            db.query('DELETE FROM tblbiblioteca WHERE id= ?', [id],(error, result) =>{
                accept(result[0])
                if(error){reject(error); return;}
                if(result.length > 0)
                    accept (result[0])
                    
                else    
                    accept (false)
            })
        })
    },
}
