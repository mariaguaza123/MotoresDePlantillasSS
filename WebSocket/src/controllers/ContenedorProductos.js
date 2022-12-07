const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
let archivo = "src/Productos.json";
const path = require('path');

const filePath = path.resolve(__dirname,"../../src/Productos.json");
console.log(filePath);

module.exports = class ContenedorProductos{

  constructor(archivo){
    archivo = this.archivo;
}
  

getAllProductos(){
  const products =  fs.readFileSync(filePath, "utf-8");
  return JSON.parse(products);
}


    saveProduct(body){
      const products = this.getAllProductos();

      const nuevoProductoAgregado = {
          nameProduct: body.nameProduct,
          price: body.price,
          id : uuidv4()
      }
      console.log('entro');
      if(!nuevoProductoAgregado){
          return ('Campos invalidos');
      }else{
          products.push(nuevoProductoAgregado);
          const data = JSON.stringify(products, null, '\t');
          const lista = fs.writeFile(filePath, data, (err)=>{
              if(err){
                  console.log("No se pudo guardar");
              }
              return ('El producto fue guardado con exito');
          });
          
      }
      
  }
    }


