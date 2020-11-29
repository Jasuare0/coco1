let db = require('../database/models');

const confirmacionController = {

    'confirmacion': function(req,res){


        let usuarioLogueado = req.session.usuario;

        
        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        let ubicacionPrevia = req.query.ubicacionprevia;
        let direccionPrevia = req.query.direccionprevia;

        db.Inicio.findAll()
        .then(resultados => {
            res.render('confirmacionAccionBD',{usuarioLogueado,ubicacionPrevia,direccionPrevia,resultados})

        })


    }

}


module.exports = confirmacionController;