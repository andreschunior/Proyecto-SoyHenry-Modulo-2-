const axios = require('axios');
// const tempData = require('./tempData');
const {tempData} = require('./Data');
const processData = require('./processData');

// Realiza la solicitud GET
axios.get('http://localhost:3000/movies')
  .then(response => {
    
    // Lógica para manejar los datos exitosos
    processData(response.data);
  })
  .catch(error => {
    alert(error + ' - Error al obtener los datos de la API. Utilizando datos de respaldo.');
    // Lógica para manejar el error y utilizar datos de respaldo
    processData(tempData);

  });


    
     
     






