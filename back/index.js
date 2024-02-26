
// importo app desde el server 
const app = require('./src/server');

// levanto el servidor

app.listen(3000, () => {
    console.log(`Servidor Express escuchando en el puerto 3000`);
});

