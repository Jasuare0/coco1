var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController');
var confirmacionController = require('../controllers/confirmacionController');
var casosdeexitoController = require('../controllers/casosdeexitoController');


// INICIO PARA CARGAR ARCHIVOS CON MULTER
let path = require('path');

let multer = require('multer');


// Para cargar imagenes de Productos

var storageProductos = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'public/images/productos')
    },
    filename: function (req,file,cb){

        console.log(path.basename(file.originalname))

        // Para obtener el nombre del archivo sin la extensión
        // path.basename(file.originalname, path.extname(file.originalname))
        // Asigna los datos de la fecha actual timeStamp para generar un codigo de identificación único
        // Date.now() 

        // Para extraer la extensión del archivo solamente.
        // path.extname(file.originalname)


        cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now()  + path.extname(file.originalname))

    }
})

var uploadProductos = multer({storage: storageProductos})



// Para cargar imagenes de Productos

var storageBlogs = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'public/images/blogs')
    },
    filename: function (req,file,cb){

        console.log(path.basename(file.originalname))

        // Para obtener el nombre del archivo sin la extensión
        // path.basename(file.originalname, path.extname(file.originalname))
        // Asigna los datos de la fecha actual timeStamp para generar un codigo de identificación único
        // Date.now() 

        // Para extraer la extensión del archivo solamente.
        // path.extname(file.originalname)


        cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now()  + path.extname(file.originalname))

    }
})

var uploadBlogs = multer({storage: storageBlogs})



// Para cargar imagenes de Carrousel

var storageCarousel = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'public/images/carousel')
    },
    filename: function (req,file,cb){

        // console.log(path.basename(file.originalname))

        // Para obtener el nombre del archivo sin la extensión
        // path.basename(file.originalname, path.extname(file.originalname))
        // Asigna los datos de la fecha actual timeStamp para generar un codigo de identificación único
        // Date.now() 

        // Para extraer la extensión del archivo solamente.
        // path.extname(file.originalname)


        cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now()  + path.extname(file.originalname))

    }

})

var uploadCarousel = multer({storage: storageCarousel})





// Para cargar imagenes de Clientes y Aliados

var storageClientes = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'public/images/clientesAliados')
    },
    filename: function (req,file,cb){

        // console.log(path.basename(file.originalname))

        // Para obtener el nombre del archivo sin la extensión
        // path.basename(file.originalname, path.extname(file.originalname))
        // Asigna los datos de la fecha actual timeStamp para generar un codigo de identificación único
        // Date.now() 

        // Para extraer la extensión del archivo solamente.
        // path.extname(file.originalname)


        cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now()  + path.extname(file.originalname))

    }

})

var uploadClientes = multer({storage: storageClientes})




// Para cargar imagenes de Blogs Nuevos

var storageBlogNuevo = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'public/images/blogs')
    },
    filename: function (req,file,cb){

        // console.log(path.basename(file.originalname))

        // Para obtener el nombre del archivo sin la extensión
        // path.basename(file.originalname, path.extname(file.originalname))
        // Asigna los datos de la fecha actual timeStamp para generar un codigo de identificación único
        // Date.now() 

        // Para extraer la extensión del archivo solamente.
        // path.extname(file.originalname)


        cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now()  + path.extname(file.originalname))

    }

})

var uploadBlogNuevo = multer({storage: storageBlogNuevo})




// Para cargar imagenes de Características Nuevas

var storageCaracteristicaNueva = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'public/images/caracteristicas')
    },
    filename: function (req,file,cb){

        // console.log(path.basename(file.originalname))

        // Para obtener el nombre del archivo sin la extensión
        // path.basename(file.originalname, path.extname(file.originalname))
        // Asigna los datos de la fecha actual timeStamp para generar un codigo de identificación único
        // Date.now() 

        // Para extraer la extensión del archivo solamente.
        // path.extname(file.originalname)


        cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now()  + path.extname(file.originalname))

    }

})

var uploadCaracteristicaNueva = multer({storage: storageCaracteristicaNueva})




// Para cargar imagenes de Clientes Nuevos

var storageClienteNuevo = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'public/images/clientesAliados')
    },
    filename: function (req,file,cb){

        // console.log(path.basename(file.originalname))

        // Para obtener el nombre del archivo sin la extensión
        // path.basename(file.originalname, path.extname(file.originalname))
        // Asigna los datos de la fecha actual timeStamp para generar un codigo de identificación único
        // Date.now() 

        // Para extraer la extensión del archivo solamente.
        // path.extname(file.originalname)


        cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now()  + path.extname(file.originalname))

    }

})

var uploadClienteNuevo = multer({storage: storageClienteNuevo})




// Para cargar imagenes de Carousel Nuevas

var storageCarouselNuevo = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'public/images/carousel')
    },
    filename: function (req,file,cb){

        // console.log(path.basename(file.originalname))

        // Para obtener el nombre del archivo sin la extensión
        // path.basename(file.originalname, path.extname(file.originalname))
        // Asigna los datos de la fecha actual timeStamp para generar un codigo de identificación único
        // Date.now() 

        // Para extraer la extensión del archivo solamente.
        // path.extname(file.originalname)


        cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now()  + path.extname(file.originalname))

    }

})

var uploadCarouselNuevo = multer({storage: storageCarouselNuevo})




// Para cargar imagenes de Carousel Nuevas

var storageProductoNuevo = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'public/images/productos')
    },
    filename: function (req,file,cb){

        // console.log(path.basename(file.originalname))

        // Para obtener el nombre del archivo sin la extensión
        // path.basename(file.originalname, path.extname(file.originalname))
        // Asigna los datos de la fecha actual timeStamp para generar un codigo de identificación único
        // Date.now() 

        // Para extraer la extensión del archivo solamente.
        // path.extname(file.originalname)


        cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now()  + path.extname(file.originalname))

    }

})

var uploadProductoNuevo = multer({storage: storageProductoNuevo})






// Para cargar imagenes de Carousel Nuevas

var storageLogoNuevo = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'public/images/logo')
    },
    filename: function (req,file,cb){

        // console.log(path.basename(file.originalname))

        // Para obtener el nombre del archivo sin la extensión
        // path.basename(file.originalname, path.extname(file.originalname))
        // Asigna los datos de la fecha actual timeStamp para generar un codigo de identificación único
        // Date.now() 

        // Para extraer la extensión del archivo solamente.
        // path.extname(file.originalname)


        cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now()  + path.extname(file.originalname))

    }

})

var uploadLogoNuevo = multer({storage: storageLogoNuevo})


// Para cargar imagenes de Casos de Éxito

var storageImagenCasoExito = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'public/images/casosdeexito')
    },
    filename: function (req,file,cb){

        // console.log(path.basename(file.originalname))

        // Para obtener el nombre del archivo sin la extensión
        // path.basename(file.originalname, path.extname(file.originalname))
        // Asigna los datos de la fecha actual timeStamp para generar un codigo de identificación único
        // Date.now() 

        // Para extraer la extensión del archivo solamente.
        // path.extname(file.originalname)


        cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now()  + path.extname(file.originalname))

    }

})

var uploadImagenCasoExito  = multer({storage: storageImagenCasoExito })

// FIN PARA CARGAR ARCHIVOS CON MULTER


// RUTAS
router.get('/', adminController.admin);

router.get('/confirmacionaccionbd', confirmacionController.confirmacion);

router.get('/inicio', adminController.inicio);
router.post('/inicio', adminController.actualizacionDatosInicio);
router.post('/logo', uploadLogoNuevo.any(),adminController.cambioLogo);
router.get('/inicio/carousel/crear', adminController.crearCarousel);
router.post('/inicio/carousel/crear', uploadCarouselNuevo .any(),adminController.adicionarImagenCarousel);
router.get('/inicio/carousel/:id', adminController.editCarousel);
router.post('/inicio/carousel/:id', uploadCarousel.any(), adminController.actualizacionCarousel);
router.get('/inicio/carousel/eliminar/:id', adminController.eliminarCarousel);

router.get('/inicio/clientes/crear', adminController.crearClientes);
router.post('/inicio/clientes/crear', uploadClienteNuevo.any(), adminController.crearClientesEnBD);
router.get('/inicio/clientes/:id', adminController.clientes);
router.post('/inicio/clientes/:id',  uploadClientes.any(), adminController.actualizacionClientes);
router.get('/inicio/clientes/borrar/:id', adminController.borrarCliente);

router.post('/inicio/redessociales', adminController.redessociales);

router.get('/inicio/productos', adminController.productosInicio);
router.get('/inicio/productos/sacar/:id', adminController.sacarProductosInicio);


router.get('/nosotros', adminController.nosotros);
router.post('/nosotros', adminController.actualizacionDatosNosotros);
router.get('/productos', adminController.productos);

router.get('/productos/crear', adminController.crearProducto);
router.post('/productos/crear', uploadProductoNuevo.any(), adminController.generaProducto);

router.get('/productos/:id', adminController.edicionProducto);
router.post('/productos/:id', uploadProductos.any(), adminController.actualizacionProducto);

router.post('/productos/:id/cambiarimagen/:idImagen',uploadProductoNuevo.any(),adminController.edicionImagenProducto);

router.get('/productos/:id/eliminarimagen/:idImagen',adminController.eliminarImagenProducto);

router.post('/productos/:id/sumarimagenproducto',uploadProductoNuevo.any(),adminController.sumarImagenProducto);

router.get('/productos/:id/caracteristicas/:idCaracteristica', adminController.editarCaracteristicaProducto);
router.post('/productos/:id/caracteristicas/:idCaracteristica', uploadCaracteristicaNueva.any(), adminController.actualizacionCaracteristicaProducto);

router.get('/productos/:id/caracteristicas', adminController.crearCaracteristicaProducto);
router.post('/productos/:id/caracteristicas',uploadCaracteristicaNueva.any(), adminController.sumarCaracteristicaProducto);

router.get('/productos/:id/caracteristicas/eliminar/:idCaracteristica', adminController.eliminarCaracteristicaProducto);

router.get('/productos/:id/sacardelcarousel', adminController.sacarProductoCarousel);

router.get('/productos/eliminar/:id', adminController.eliminarProducto);

router.get('/casosdeexito', casosdeexitoController.visualizacion);
router.get('/casosdeexito/eliminar/:id', casosdeexitoController.eliminar);
router.get('/casosdeexito/editar/:id', casosdeexitoController.edicion);
router.post('/casosdeexito/actualizar/:id', casosdeexitoController.actualizar);
router.post('/casosdeexito/actualizar/imagen/:id',uploadImagenCasoExito.any(), casosdeexitoController.actualizarImagen);
router.post('/casosdeexito/:id/agregar/imagen',uploadImagenCasoExito.any(), casosdeexitoController.agregarImagen);
router.get('/casosdeexito/eliminar/imagen/:id', casosdeexitoController.eliminarImagen);
router.get('/casosdeexito/agregar', casosdeexitoController.agregarCasoDeExito);
router.post('/casosdeexito/agregar', casosdeexitoController.crearCasoDeExito);


// router.get('/blogs', adminController.blog);
// router.get('/blogs/:id', adminController.editBlog);
// router.post('/blogs/:id',  uploadBlogs.any(), adminController.actualizacionBlog);
// router.get('/blogs/crear/nuevo', adminController.crearBlog);
// router.post('/blogs/crear/nuevo',  uploadBlogNuevo.any(), adminController.crearEnBDNuevoBlog);

// router.get('/blogs/eliminar/:id', adminController.eliminarBlog);


module.exports = router;
