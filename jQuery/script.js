// Escribe el Document Ready Event.
$( document ).ready(function() {

  // A cada link (etiqueta <a> ) se le debe atribuir el atributo target con valor _blank
    $("a").addClass('<target="_blank">');

  // A cada link (etiqueta <a> ), a través del método prepend() , se le añada su ícono de FontAwesome correspondiente:
    // Facebook: <i class="fab fa-facebook-f"></i>
    // Instagram: <i class="fab fa-instagram"></i>
    // Twitter: <i class="fab fa-twitter"></i>
    // Pinterest: <i class="fab fa-pinterest"></i>

$("ul li:first-child").find("a").prepend('<i class="fab fa-facebook-f"></i>');
$("ul li:nth-child(2)").find("a").prepend('<i class="fab fa-instagram"></i>');
$("ul li:nth-child(3)").find("a").prepend('<i class="fab fa-twitter"></i>');
$("ul li:last-child").find("a").prepend('<i class="fab fa-pinterest"></i>');

  // Al clickear cualquier <h2> cambie su color de letra a rojo.
    $("h2").click(function(){
      $(this).css({"color": "red"});
    });

 // Seleccionar el cuarto <li> de la segunda <section>
  // Por medio de un append agrega este string: <ul><li><a href="#">link 4.a</a></li></ul>
  // Por medio de un un after agrega este otro string: <li><a href="#">link 5</a></li>
    $("ul li:last-child").eq(1).append("<ul><li><a href='#'>link 4.a</a></li></ul>").after('<li><a href="#">link 5</a></li>');

});
