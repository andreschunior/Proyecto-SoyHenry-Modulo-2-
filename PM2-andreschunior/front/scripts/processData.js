const createQualitiesDiv = require('./createQualityDiv');
const {backgroundImages,backgroundAudios,backgroundmobileimages} = require('./Data');
// Función para procesar los datos (común para ambos casos)
function processData(data) {
    // Lógica común para procesar los datos, ya sea de la API o de tempData
    data.forEach((element, index) => {
      // Div para cada película (contenedor de película)
      const peliculaContainer = document.createElement("div");
      peliculaContainer.classList.add("peliculaContainer1");
    
      // Crear elemento de audio
      const audioElement = document.createElement("audio");
      audioElement.src = backgroundAudios[index];
      audioElement.id = `audio_${index}`;
    
      // Titulo H1
      const titleElement = document.createElement("h1");
      titleElement.textContent = element.title;
      titleElement.classList.add('tituloPelicula'); // agregar estilo CSS al titulo
    
      // Contenedor para el Poster (la imagen)
      const posterContainer = document.createElement("div");
      posterContainer.classList.add("posterContainer"); // agregar estilo al contenedor del poster
      const posterElement = document.createElement("img");
      posterElement.src = element.poster;
      posterElement.alt = `Póster de ${element.title}`;
      posterElement.classList.add("poster"); // agregar estilo al poster (imagen)
      posterContainer.appendChild(posterElement);
       // Agregar un ID único a cada póster
       posterElement.id = `poster_${index}`;
    
      // Contenedor para las calificaciones
      const calificacionDiv = createQualitiesDiv("Calificación:", element.rate);
      calificacionDiv.classList.add("calificacionDiv"); // agregar estilo a las calificaciones

      //contenedor para año
      const yearDiv = createQualitiesDiv("Year:", element.year);
      yearDiv.classList.add("calificacionDiv"); // agregar estilo a año

      //contenedor para director
      const directorDiv = createQualitiesDiv("Director:", element.director);
      directorDiv.classList.add("calificacionDiv");


    
      // Contenedor para los generos
      const generoDiv = createQualitiesDiv("Género:", element.genre.join(", "));
      generoDiv.classList.add("generoDiv"); // agregar estilo a los géneros

       generoDiv.style.whiteSpace = 'normal';

    
      // Contenedor para la duración
      const duracionDiv = createQualitiesDiv("Duración:", element.duration);
      duracionDiv.classList.add("duracionDiv"); // agregar estilo a la duración
    
      // Agregar los contenedores al contenedor de la película (tarjeta)
      peliculaContainer.appendChild(titleElement);
      peliculaContainer.appendChild(posterContainer);
      peliculaContainer.appendChild(calificacionDiv);
      peliculaContainer.appendChild(directorDiv);
      peliculaContainer.appendChild(generoDiv);
      peliculaContainer.appendChild(yearDiv)
      peliculaContainer.appendChild(duracionDiv);
      peliculaContainer.appendChild(audioElement);



      // logica para dispositivos moviles 
      $(document).ready(function() {
        $(posterElement).on('click', function() {
            if (window.innerWidth <= 576) {
                // Realizar el evento solo si el ancho de la ventana es menor o igual a 576px (dispositivo móvil)
                $('body').css('background-image', `url(${backgroundmobileimages[index]})`);
        $('.peliculaContainer1').css('background-color','transparent');
        $('.peliculaContainer1').css('box-shadow','none');
        $(`#audio_${index}`)[0].play(); 
            }
        });
    });

  
    
    
     
    
      $(posterElement).on('mouseenter', function() {
        // cambiar fondo cuando el cursor esté en el póster
        $('body').css('background-image', `url(${backgroundImages[index]})`);
        $('.peliculaContainer1').css('background-color','transparent');
        $('.peliculaContainer1').css('box-shadow','none');
        $(`#audio_${index}`)[0].play(); 
      });
    
      // quitar el fondo cuando el cursor esté fuera del póster 
      $(posterElement).on('mouseleave', function() {
        $('body').css('background-image', 'none'); // Deja el fondo por defecto
        $('.peliculaContainer1').css('background-color','#2D3E58');
        $('.peliculaContainer1').css('box-shadow','5px 5px 10px rgba(0, 0, 0, 0.5)');
        $(`#audio_${index}`)[0].pause();
        $(`#audio_${index}`)[0].currentTime = 0; 
      });

  
      // Agregar contenedor de película (tarjeta) al contenedor principal usando jQuery
      $("#tarjetasContainer").append(peliculaContainer);
    });
  }

  module.exports = processData;
  
  