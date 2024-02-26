const { Router } = require('express');
const moviesRouter = Router();
const { controllerMovies } = require('../controllers/moviesControllers');

moviesRouter.get('/', controllerMovies);

module.exports = moviesRouter;
