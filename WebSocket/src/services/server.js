const express = require('express');
const path = require('path');
const mainRouter = require('../routes/index');
const viewsFolderPath = path.resolve(__dirname, '../../views');
let contenedor = require('../controllers/ContenedorProductos');
let contenedorNuevo = new contenedor;
const { productArray } = require('../controllers/ContenedorProductos');
const http = require('http');
const io = require('socket.io');
const app = express();

const productNew = {
    nameProduct: undefined,
    price: undefined
  };


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.set('views', viewsFolderPath);
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('formulario');
});

app.use('/api', mainRouter);

app.use((err, req, res, next) => {

    const status = err.status || 500;
    const message = err.message || 500;

    res.status(status).json({ message });
});
//Creando servidor
const myHTTPSerever = http.Server(app);
const myWebSocketServer = io(myHTTPSerever);
myWebSocketServer.on('connection', (socket) =>{
    console.log("realizando conexion");
    console.log(socket.client.id);

    socket.on('cartOfServer',(data)=>{
        console.log('Llego info del cliente'+ ' ' + socket.client.id );
        productNew.nameProduct = data.nameProduct;
        productNew.price = data.price;
        contenedorNuevo.saveProduct(productNew);
        myWebSocketServer.emit('informacion',{productNew});
    });
    

    

});





module.exports = myHTTPSerever;