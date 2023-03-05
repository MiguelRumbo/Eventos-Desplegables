// Selecciona los elementos <details>
var details1 = document.querySelector('#details1');
var details2 = document.querySelector('#details2');
var details3 = document.querySelector('#details3');

// Agrega un evento de escucha a cada elemento <details> para detectar cambios
details1.addEventListener('toggle', function() {
  // Selecciona el elemento <html>
  var html = document.querySelector('html');
  
  // Cambia el color de fondo de la página
  html.style.backgroundColor = '#00ffff';
});

details2.addEventListener('toggle', function() {
  var html = document.querySelector('html');
  html.style.backgroundColor = '#dc143c';
});

details3.addEventListener('toggle', function() {
  var html = document.querySelector('html');
  html.style.backgroundColor = '#ff1493';
});