// construyo el servidor
const express = require('express');
const router = require('./routes/routes')
const morgan = require('morgan');
const cors = require('cors');

//solicitud entra
const app = express();

// ruta para manejar la peticion get a /

app.get('/',(req,res) => {
    res.send('todo ok en el server');
});

//utilizo el middelware 

app.use(morgan('dev'));

//utilizo el middelware cors
app.use(cors());
//transforma el json en algo que pueda leer el java
app.use(express.json());


//envio al enrutador la solicitud
app.use(router);


module.exports = app;