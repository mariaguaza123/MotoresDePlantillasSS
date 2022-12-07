const { Router } = require('express');
const rutaProductos = Router();
let contenedor = require('../controllers/ContenedorProductos');
let contenedorNuevo = new contenedor;



rutaProductos.get('/', (req,res) =>{
    let listaProductos =  contenedorNuevo.getAllProductos();
    res.render('productos', { listaProductos });
 });

 rutaProductos.post('/', (req,res)=>{
  contenedorNuevo.saveProduct(req);
  res.redirect('/');
});

  module.exports = rutaProductos;