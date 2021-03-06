var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');
var mailController = require('../controllers/mailController');
var casosdeexitoController = require('../controllers/casosdeexitoController');

/* GET home page. */
router.get('/', indexController.index);
router.get('/nosotros', indexController.nosotros);
router.get('/productos', indexController.productos);
router.get('/productos/:id', indexController.detalleProducto);
// router.get('/blogs', indexController.blog);
// router.get('/blogs/:id', indexController.blogDetalle);
router.get('/contactenos', indexController.contactenos);

router.post('/contactenos/enviandomail', mailController.enviandomail);

router.get('/contactenos/confirmacion', mailController.confirmacionEnvio);

router.get('/casosdeexito', casosdeexitoController.casosdeexito);


module.exports = router;
