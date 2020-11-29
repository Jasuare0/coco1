let db = require('../database/models');

const indexController = {

    'index': function(req,res){

        db.Inicio.findAll()
        .then(resultados=>{
            db.ClientesAliados.findAll()
            .then(clientes=>{
                db.Carousel.findAll()
                .then(carousel=>{

                    db.RedesSociales.findAll()
                    .then(redessociales => {

                        db.Productos.findAll({
                            
                                where: {
                                    pagina_inicio: 'Si'
                                },

                                include: [{association: "imagenesProductos"}]
                        })
                        .then(productos => {
                            let usuarioLogueado = req.session.usuario;

                            if(usuarioLogueado == undefined){

                                usuarioLogueado = ''

                            }


                            res.render('index',{resultados,clientes,carousel,usuarioLogueado,redessociales, productos});
    
                        })
    
                    })

                })

            })
        })
    },
    'nosotros': function(req,res){

        db.Inicio.findAll()
        .then(resultados => {

            db.Carousel.findAll()
            .then(carousel=>{
                db.RedesSociales.findAll()
                .then(redessociales => {
                    db.Nosotros.findAll()
                    .then(nosotros => {
                        let usuarioLogueado = req.session.usuario;
    
                        
                        if(usuarioLogueado == undefined){
    
                            usuarioLogueado = ''
    
                        }
    
                        res.render('nosotros',{carousel,usuarioLogueado,redessociales,nosotros,resultados});
        
                    })
        
                })
    
            })
    

        })

    },
    'productos': function(req,res){


        db.Inicio.findAll()
        .then(resultados => {

            db.Productos.findAll({
                include: [{association: "imagenesProductos"}]
            })
            .then(productos => {
                db.Carousel.findAll()
                .then(carousel => {
                    
                    db.RedesSociales.findAll()
                    .then(redessociales => {
                        let usuarioLogueado = req.session.usuario;
                        
                        if(usuarioLogueado == undefined){
    
                            usuarioLogueado = ''
    
                        }
    
    
                        res.render('productos',{productos, carousel,usuarioLogueado,redessociales,resultados});
        
                    })
    
                })
    
            })
    

        })


    },
    'detalleProducto': function(req,res){

        db.Inicio.findAll()
        .then(resultados => {

            db.Productos.findByPk(req.params.id,{include: [{association: "imagenesProductos"}]})
            .then(producto =>{
                db.RedesSociales.findAll()
                .then(redessociales =>{
    
                    db.Caracteristicas.findAll({
                        where: {
                            product_id: req.params.id,
                        }
                    })
                    .then(caracteristicas => {
                        let usuarioLogueado = req.session.usuario;
    
                        if(usuarioLogueado == undefined){
    
                            usuarioLogueado = ''
    
                        }
    
                        res.render('DetalleProducto',{usuarioLogueado,producto,redessociales,caracteristicas,resultados})
        
                    })
        
                })
        
            })
    

        })

     },
    
    // 'blog': function(req,res){

    //     db.Inicio.findAll()
    //     .then(resultados => {

    //         db.Blogs.findAll()
    //         .then(blogs => {
    //             db.Carousel.findAll()
    //             .then(carousel =>{
    //                 db.RedesSociales.findAll()
    //                 .then(redessociales =>{
    //                     let usuarioLogueado = req.session.usuario;
    
                        
    //                     if(usuarioLogueado == undefined){
    
    //                         usuarioLogueado = ''
    
    //                     }
    
    //                     res.render('blog',{blogs, carousel,usuarioLogueado,redessociales,resultados});
        
    //                 })
    
    //             })
    
    //         })
    


    //     })


    // },
    // 'blogDetalle': function(req,res){


    //     db.Inicio.findAll()
    //     .then(resultados => {
    //         db.Blogs.findByPk(req.params.id)
    //         .then(blog => {

    //             let visualizaciones = blog.visualizaciones + 1;

    //             db.Blogs.update({
    //                 visualizaciones: visualizaciones,
    //                 },
    //                 {
    //                     where: {
    //                         id: req.params.id,
    //                     }
    //                 }
    //             )
                
    //             db.RedesSociales.findAll()
    //             .then(redessociales => {

    //                 let usuarioLogueado = req.session.usuario;
                    
    //                 if(usuarioLogueado == undefined){

    //                     usuarioLogueado = ''

    //                 }


    //                 res.render('blogDetalle',{blog,usuarioLogueado,redessociales,resultados});
    
    //             })

    //         })

    //     })


    // },

    
    'contactenos': function(req,res){
        
        db.Inicio.findAll()
        .then(resultados=>{
            db.Carousel.findAll()
            .then(carousel => {
                
                db.RedesSociales.findAll()
                .then(redessociales => {
                    let usuarioLogueado = req.session.usuario;

                    
                    if(usuarioLogueado == undefined){

                        usuarioLogueado = ''

                    }

                    res.render('contactenos',{resultados, carousel,usuarioLogueado,redessociales});
    
                })

            })
        })
    }
    
}


module.exports = indexController;