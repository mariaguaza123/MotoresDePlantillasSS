const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('../routes/index');
const { ProductosController } = require('../controllers/ContenedorProductos');
const viewsFolderPath = path.resolve(__dirname, '../../views');
const http = require('http');
const io = require('socket.io');

app.use(express.static('views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('public', viewsFolderPath);
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

const myHTTPServer = http.Server(app);
const myWebSocketServer = io(myHTTPServer);
myWebSocketServer.on('connection',(socket)=>{
    console.log('se acaba de conectar un cliente');
    console.log('ID SOCKET: ' + socket.id);
    console.log('ID CLIENT SOCKET: ' + socket.client.id);
})

module.exports = myHTTPServer;