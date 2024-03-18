const mongoose = require('mongoose');
require('dotenv').config();

const dbCon = async () => {
    //realiza conexion con la base de datos 
    await mongoose.connect(
        process.env.MONGOURI
        );
        console.log('Conexión a MongoDB establecida correctamente.');

};
module.exports = dbCon; 