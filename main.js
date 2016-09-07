window.addEventListener("load", function () { 
	var boton = document.getElementById("cambiar");
	boton.addEventListener("click", function() {
		var segundos = parseInt(document.getElementById("ingresarSegundos").value);
		setInterval(cambioColor , segundos*1000);
		function cambioColor() {
			document.body.style.background = '#'+Math.floor(Math.random()*16777215).toString(16); 
		}
	});
});