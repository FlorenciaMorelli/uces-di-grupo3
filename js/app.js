// Esperar a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el elemento del carrusel por su ID
  var carousel = document.getElementById("carouselExampleIndicators");

  // Crear un nuevo objeto de carrusel utilizando el constructor de Bootstrap
  var carouselObj = new bootstrap.Carousel(carousel, {
    interval: 2000, // Intervalo de tiempo entre las transiciones de diapositivas (en milisegundos)
    wrap: true // Permitir que el carrusel se repita continuamente
  });
});