const { v4: uuidv4 } = require('uuid');


module.exports = class ContenedorProductos{

    constructor(){
        this.productos = [
            { 
            nameProduct: 'Camisa Roja', 
            price: 60, 
            id: uuidv4() 
            },
            { 
            nameProduct: 'Tacones', 
            price: 60, 
            id: uuidv4() 
            }
        ]
    }

    getAllProductos = () =>{
        return this.productos;
    }

   

    saveProducto = (req) =>{
        const nuevoProducto = {
            nameProduct: req.body.nameProduct,
            price: req.body.price,
            id: uuidv4()
        }
        this.productos.push(nuevoProducto);
        console.log("producto guardado con exito");
        return nuevoProducto;
    }
        
   


}