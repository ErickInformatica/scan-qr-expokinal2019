'use strict'

var express = require('express');
var UserController = require('../controllers/userController');
var md_auth = require('../middlewares/autheticated');

//SUBIR IMAGEN
var multiparty = require('connect-multiparty');
var md_subir = multiparty({uploadDir: './src/uploads/users'})


//Rutas
var api = express.Router();
api.get('/productos', md_auth.ensureAuth,UserController.getProductos);
api.post('/producto', UserController.agregarProducto);
api.post('/productoV',md_auth.ensureAuth ,UserController.agregarProductoVendidoPorUsuario);
api.put('/productoVendido/:productoId',md_auth.ensureAuth ,UserController.ProductoVendido);

api.get('/ejemplo', md_auth.ensureAuth ,UserController.ejemplo);
api.get('/usuarios',UserController.getUsers);
api.post('/registrar', UserController.registrar);
api.post('/login', UserController.login);
api.post('/subir-imagen-usuario/:id', [md_auth.ensureAuth, md_subir], UserController.subirImagen);
api.get('/obtener-imagen-usuario/:nombreImagen', UserController.obtenerImagen)
api.put('/editar-usuario/:id', md_auth.ensureAuth, UserController.editarUsuario)

module.exports = api;