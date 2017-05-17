var carga = function load(){
	alert("Funciona!");
}
window.onload = carga;

document.getElementById("demo").addEventListener("click", function(evento){
    alert("Hola Mundo");
});

document.getElementById("entrada").addEventListener("mouseout", function(){
		alert("No estas sobre mi!");
});

document.getElementById("salida").addEventListener("mouseover", function(){
		alert("Estas sobre mi!");
});