let db = require('../database/models');

const fuentesColoresController = {

    'traerfuentesColores': function(req,res){
        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

        if(usuarioLogueado != ''){
            db.Inicio.findAll()
            .then(resultados => {
                res.render('adminEditFuentesColores',{usuarioLogueado, resultados: resultados});
            })

        }else{
            res.redirect('/users');

        }
    

    }
}

module.exports = fuentesColoresController;