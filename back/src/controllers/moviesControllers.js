const { getMovies } = require('../services/movieService');

const controllerMovies = (req, res) => {
  try {
    const movies = getMovies();
    res.status(200).json(movies); // Cambiado para enviar movies como un array
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });

    throw error;
  }
};

module.exports = { controllerMovies };