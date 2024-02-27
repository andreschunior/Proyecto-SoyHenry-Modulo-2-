const tempData = require('../tempData');

class Movie {
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
    getMovies: function () {
        try {
            const movies = tempData.map((movieData, index) => {
                try {
                    return new Movie(
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
    }
};



