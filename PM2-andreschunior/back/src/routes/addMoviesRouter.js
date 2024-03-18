const { Router } = require('express');
const addMoviesRouter = Router();
const { controllerMovies,addMovieController } = require('../controllers/moviesControllers');

addMoviesRouter.post('/', addMovieController);

module.exports = addMoviesRouter ;
