const { getMovies, addMovieFromForm } = require('../services/movieService');
const Movie = require('../models/Movie');

const controllerMovies = async (req, res) => {
  try {
    const movies = await getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });

    throw error;
  }
};

const addMovieController = async (req, res) => {
  try {
    // Verificar si 'form' está presente en req.body
    if (!req.body.form) {
      throw new Error('No se proporcionó el formulario correctamente');
    }
     // Extraer datos del cuerpo de la solicitud
    const newMovie = req.body.form;
    const addedMovie = await addMovieFromForm(newMovie)

  
    // const addedMovie = await Movie.create(newMovie);
    // Responder con la película recién creada
    res.status(201).json({message:'se agrego la pelicula correctamente', movie:addedMovie});
  } catch (error) {
    // Manejar errores
    console.error('Error al agregar la película:', error.message);
    res.status(500).json({ error: 'No se pudo agregar la película' });
  }
};
module.exports = { controllerMovies, addMovieController  };