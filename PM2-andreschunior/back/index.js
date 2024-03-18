
// importo app desde el server 
const app = require('./src/server');
const dbCon = require('./src/config/dbCon');

dbCon().then(
    res=> {
    // levanto el servidor
    app.listen(3000, () => {
    console.log(`Servidor Express escuchando en el puerto 3000`);
    });
    });




