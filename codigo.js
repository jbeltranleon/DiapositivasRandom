function inicio(){
    var caja = document.getElementById("caja");
    var boton = document.getElementById("boton");
    var siguiente = document.getElementById("siguiente");
    
    function nombrar(){
        function Tema(minimo, maximo){
	       var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	       return numero;
        }
        var nombrePresentacion = Tema(0,2);
        if (nombrePresentacion == 0){
            caja.innerHTML = "Física Cuantica";
        }
        else if (nombrePresentacion == 1){
            caja.innerHTML = "Paradojas para dormir";
        }
        else {
            caja.innerHTML = "Agujeros negros";
        }
        
    }
    boton.addEventListener("click", nombrar);
    function pasarDiapositiva(){
        function Azar(minimo, maximo){
	       var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	       return numero;
        }
        var diapositiva = Azar(0,2);
        if (diapositiva == 0){
            document.getElementById("imagen").src = "eureka.png";
        }
        else if (diapositiva == 1){
            document.getElementById("imagen").src = "dios.jpg";
        }
        else {
            document.getElementById("imagen").src = "despair.jpg";
        }
        
    }
    siguiente.addEventListener("click", pasarDiapositiva);
}