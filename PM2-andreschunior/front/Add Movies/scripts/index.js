document.getElementById('botonClean').addEventListener('click', async function() {
  // Selecciona todos los elementos de tipo input y los limpia
  var inputs = document.querySelectorAll('input');
  inputs.forEach(function(input) {
      input.value = '';
  });
});

// Validar Datos del Formulario
document.getElementById('movieForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  var title = document.getElementById('title').value;
  var year = document.getElementById('year').value;
  var director = document.getElementById('director').value;
  var duration = document.getElementById('duration').value;
  var genre = document.getElementById('genre').value;
  var rate = document.getElementById('rate').value;
  var poster = document.getElementById('poster').value;

  if (!title || !director || !duration || !genre || !rate || !poster) {
      alert('Por favor, completa todos los campos.');
      return;
  }

  if (isNaN(year) || isNaN(parseFloat(rate))) {
      alert('Year y Rate deben ser números válidos.');
      return;
  }

  // Crear un objeto con los datos de la película
  const movieData = {
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
  };

//   alert('Datos del formulario enviados al servidor:', movieData);

  try {
      const response = await window.axios.post('http://localhost:3000/addmovies', { form: movieData }//, {
        //   headers: {
        //       'Content-Type': 'application/json',
        //   },
      //}
      );
      alert('Datos del formulario enviados al servidor:', movieData);

      // Aquí puedes manejar la respuesta del servidor
      console.log('Respuesta del servidor:', response.data);

      // Puedes redirigir al usuario a otra página, mostrar un mensaje, etc.

  } catch (error) {
      console.error('Error al enviar la solicitud POST:', error.message);
      // Puedes manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
  }

});