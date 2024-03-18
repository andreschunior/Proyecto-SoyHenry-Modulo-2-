//llamo a router para crear rutas
const { Router } = require('express');
const moviesRouter = require('./moviesRouter');
const addMoviesRouter = require('./addMoviesRouter');
const router = Router();


router.use('/movies',moviesRouter);




module.exports = router;
