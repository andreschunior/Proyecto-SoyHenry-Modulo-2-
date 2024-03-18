// const tempData = require('../tempData');
// const Movie = require('./models/Movie');
// const tempData = Movie;
// module.exports = tempData;
const Movie = require('../models/Movie');
// const Movie = require('../tempData');


class peliculas {
    constructor(title, year, director, duration, genre, rate, poster) {
        if (!title || !poster || !director) {
            const missingFields = [];
            if (!title) missingFields.push('title');
            if (!poster) missingFields.push('poster');
            if (!director) missingFields.push('director');

            const errorMessage = `Error: se necesitan los siguientes campos: ${missingFields.join(', ')}`;
            throw new Error(errorMessage);
        }

        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

module.exports = {
    getMovies: async  function () {
        try {
            const info = await Movie.find();
            const movies = info.map((movieData, index) => {
                try {
                    return new peliculas(
                        movieData.title,
                        movieData.year,
                        movieData.director,
                        movieData.duration,
                        movieData.genre,
                        movieData.rate,
                        movieData.poster
                    );
                } catch (error) {
                    throw new Error(`Error al crear la instancia para la película en la posición ${index}: ${error.message}`);
                
                }
            });
            return movies;
            
        } catch (error) {
            console.error('Error en getMovies:', error);
            throw new Error('Error al crear instancias de películas: ' + error.message);
        }
    },

    addMovieFromForm: async function (form) {
        try{
            const addedMovie = await Movie.create(form);
            return addedMovie;
             }
    
        catch (error) {
            // Manejar errores, por ejemplo, registrar en un archivo de registro o lanzar una excepción
            console.error('Error al agregar la película:', error);
            throw new Error('No se pudo agregar la película');
        }



    }
};




