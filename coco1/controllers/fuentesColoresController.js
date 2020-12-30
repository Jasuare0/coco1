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
    

    },
    'coloresBarraNavegacion': function(req,res){

        let usuarioLogueado = req.session.usuario;

        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

        if(usuarioLogueado != ''){



            db.Inicio.update(
                {
                    value: req.body.rojoBarraNavegacion,
                },
                {
                    where: {
                        id: 11,
                    }
                }
            )
            
            db.Inicio.update(
                {
                    value: req.body.verdeBarraNavegacion,
                },
                {
                    where: {
                        id: 12,
                    }
                }
            )
            
            db.Inicio.update(
                {
                    value: req.body.azulBarraNavegacion,
                },
                {
                    where: {
                        id: 13,
                    }
                }
            )
            
            db.Inicio.update(
                
                {
                    value: req.body.alfaBarraNavegacion*10,
                },
                {
                    where: {
                        id: 14,
                    }
                }
            )
            
            
            let ubicacionPrevia = 'FuentesColores';
            let direccionPrevia = 'fuentescolores';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
                                                          
        
        }else{
    
            res.redirect('/users');

        }


    },
    'coloresBody': function(req,res){

        let usuarioLogueado = req.session.usuario;

        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

        if(usuarioLogueado != ''){



            db.Inicio.update(
                {
                    value: req.body.rojoCuerpo,
                },
                {
                    where: {
                        id: 15,
                    }
                }
            )
            
            db.Inicio.update(
                {
                    value: req.body.verdeCuerpo,
                },
                {
                    where: {
                        id: 16,
                    }
                }
            )
            
            db.Inicio.update(
                {
                    value: req.body.azulCuerpo,
                },
                {
                    where: {
                        id: 17,
                    }
                }
            )
            
            db.Inicio.update(
                
                {
                    value: req.body.alfaCuerpo*10,
                },
                {
                    where: {
                        id: 18,
                    }
                }
            )
            
            
            let ubicacionPrevia = 'FuentesColores';
            let direccionPrevia = 'fuentescolores';

            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
                                                          
        
        }else{
    
            res.redirect('/users');

        }


    }


}

module.exports = fuentesColoresController;