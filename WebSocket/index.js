const path = require('path');
const express = require('express');
const app = express();
 
//create port
const port = 8080;
//static files
app.use(express.static(path.join(__dirname,'public')));
//call the port
app.listen(port, ()=>{
    console.log(`Server Ready on ${port}`);
});
