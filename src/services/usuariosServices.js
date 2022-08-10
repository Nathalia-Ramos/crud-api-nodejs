const { parse } = require('dotenv');
const db = require ('../db')

module.exports  = {
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

    listarUsuario: () => {
        return new Promise ((accept, reject)=> {
            db.query('SELECT * FROM usuarios order by id_usuario desc', (error, result) => {
                if(error) { reject(error); reject;}
                accept(result)
            }) 
        })

    },
    
    usuarioID: (id_usuario) => {
        return new Promise ((accept, reject) => {
            db.query('SELECT * FROM usuarios WHERE id_usuario= ?', [id_usuario],(error, result) =>{
                accept(result[0])
                if(error){reject(error); return;}
                if(result.length > 0)
                    accept (result[0])
                else    
                    accept (false)
            })
        })
    },

    updateUsuario: (id_usuario, nome, email, senha,confirmPassword) => {
        return new Promise ((accept, reject) => {
            db.query('UPDATE usuarios SET nome=?, email=?, senha=?, confirmPassword=? WHERE id_usuario= ?',
                    [nome, email, senha,confirmPassword, id_usuario],
                    (error, result) => {
                        if(error){reject (error); return;}
                        accept(result)
                    })
                    
        })

    },
    deleteUsuario: (id_usuario) => {
        return new Promise ((accept, reject) => {
            db.query('DELETE FROM usuarios WHERE id_usuario= ?' , [id_usuario], (error, result) =>{
                accept(result[0])
                if(error){reject(error); return;}
                if(result.length > 0)
                    accept(result[0])
                else    
                    accept(false)
            })

        })
    }


}