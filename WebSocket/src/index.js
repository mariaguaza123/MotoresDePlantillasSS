const server = require('./services/server');
const PUERTO = 8080;


server.listen(PUERTO, ()=>{
    console.log(`Server on ${PUERTO}`);
});