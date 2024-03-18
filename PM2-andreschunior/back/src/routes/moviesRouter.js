const { Router } = require('express');
const moviesRouter = Router();
const { controllerMovies, addMovieController } = require('../controllers/moviesControllers');

moviesRouter.get('/', controllerMovies);
moviesRouter.post('/', addMovieController);

module.exports = moviesRouter;
