const io = require('socket.io');
const path = require("path");
let contenedor = require('../controllers/ContenedorProductos');
let contenedorNuevo = new contenedor;


const products = {
  nameProduct: '',
  price: ''
};

//Se crea el socket y se inicia la conexion
const myHTTPSerever = http.Server(app);
const myWebSocketServer = io(myHTTPSerever);

myWebSocketServer.on('connection', (socket) =>{
    console.log("realizando conexion");
    console.log(socket.client.id);

    socket.on('cartOfServer',(data)=>{
        console.log('Llego info del cliente'+ ' ' + socket.client.id );
    });

     //Creando producto
     socket.on("addProduct", (newProduct) => {
      console.log(`Creando producto desde el socket`);
        products.nameProduct = newProduct.title;
        products.value = newProduct.value;
        contenedorNuevo.saveProducto(newProduct);
        io.emit("newProduct", newProduct);
      });

});

const initWsServer = (server) => {
  io = socketIo(server);


 

module.exports = {
  initWsServer
}
}