let db = require('../database/models');

const casosdeexitoController = {
    'casosdeexito': function (req,res){


        let usuarioLogueado = req.session.usuario;

        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

        db.Inicio.findAll()
        .then(resultados =>{
            
            db.Casosdeexito.findAll({
                include: [{association: "imagenesCasosDeExito"}]
            })
            .then(casosdeexito => {
                    db.RedesSociales.findAll()
                    .then(redessociales => {

                        //res.json(casosdeexito)
                        res.render('casosdeexito',{resultados,usuarioLogueado,redessociales,casosdeexito});
        
                    })

            })

        })

    
    },
    'visualizacion': function(req,res){



        let usuarioLogueado = req.session.usuario;

        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }


        db.Inicio.findAll()
        .then(resultados => {

            
            db.Casosdeexito.findAll({
                include: [{association: "imagenesCasosDeExito"}]
            })

            .then(casosdeexito => {

                res.render('adminCasosDeExito',{resultados,usuarioLogueado,casosdeexito})
                
            })


        })

    },
    'eliminar': function (req,res) {

        db.Casosdeexito.destroy({
            where: {
                id: req.params.id,
            }
        })
        .then(resultado => {

            db.ImagenesCasosExito.destroy({
                where: {
                    casodeexito_id: req.params.id,
                }

            }
            )
            .then(eliminacion => {
                db.Inicio.findAll()
                .then(resultados =>{
    
                    let ubicacionPrevia = 'Casos de Éxito';
                    let direccionPrevia = 'casosdeexito';
    
                    res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
    
                })
    
            })


        })


    },
    'edicion': function (req,res){


        let usuarioLogueado = req.session.usuario;

        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

        db.Inicio.findAll()
        .then(resultados => {

            db.Casosdeexito.findAll({
                where: {
                    id: req.params.id
                },

                include: [{association: "imagenesCasosDeExito"}]
            })
            .then(casosdeexito => {

                res.render('adminEditCasosDeExito',{resultados,usuarioLogueado,casosdeexito})

            })

        })

    },
    'actualizar': function (req,res){

        db.Casosdeexito.update({

            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
    
        },{
            where: {
                id: req.params.id,
            }
        }
        )
        .then( resultado => {

            let ubicacionPrevia = 'Casos de Éxito';
            let direccionPrevia = 'casosdeexito';
    
            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);

        }

    
        )
    },
    'actualizarImagen': function (req,res){

        let Archivo = req.files;


        if(Archivo != ''){

            let NombreArchivo = req.files[0].filename;


            db.ImagenesCasosExito.update({
                imagen: NombreArchivo,
            },
            {
                where: {
                    id: req.params.id,
                }
        
            })
            .then(resultado => {

                let ubicacionPrevia = 'Casos de Éxito';
                let direccionPrevia = 'casosdeexito';
        
                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
            })
        
        }else{

            res.send('No Llega ninguna imagen!!')

        }

        
    },
    'agregarImagen': function (req,res){

        let Archivo = req.files;
        console.log('Resultados de imagen enviada:')
        console.log(req.files)

        if(Archivo != ''){

            let NombreArchivo = req.files[0].filename;

            console.log('Resultado Actualización Imagen Caso de Éxito:')
            console.log(req.files[0].filename);

            console.log('Resultado req.params.id:')
            console.log(req.params.id);


            db.ImagenesCasosExito.create({
                imagen: NombreArchivo,
                casodeexito_id: req.params.id,
            })
            .then(resultado => {

                let ubicacionPrevia = 'Casos de Éxito';
                let direccionPrevia = 'casosdeexito';
        
                res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);
    
            })
        
        }else{

            res.send('No Llega ninguna imagen!!')

        }

    },
    'eliminarImagen': function (req,res) {

        db.ImagenesCasosExito.destroy(
            {
                where: {
                    id: req.params.id,
                }
            }
        )
        .then(resultado => {
            

            let ubicacionPrevia = 'Casos de Éxito';
            let direccionPrevia = 'casosdeexito';
    
            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);



        })

    },
    'agregarCasoDeExito': function (req,res) {

        
        let usuarioLogueado = req.session.usuario;

        if(usuarioLogueado == undefined){

            usuarioLogueado = ''

        }

        db.Inicio.findAll()
        .then(resultados => {

            res.render('adminAgregarCasosDeExito',{resultados,usuarioLogueado})

        })

    },
    'crearCasoDeExito': function (req,res) {
        
        db.Casosdeexito.create({

            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
    
        },{
            where: {
                id: req.params.id,
            }
        }
        )
        .then( resultado => {

            let ubicacionPrevia = 'Casos de Éxito';
            let direccionPrevia = 'casosdeexito';
    
            res.redirect('/admin/confirmacionaccionbd/?ubicacionprevia='+ ubicacionPrevia +'&direccionprevia=' + direccionPrevia);

        }

    
        )
    }

}


module.exports = casosdeexitoController;