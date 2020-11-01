var regexCampoNumerico=/^[0-9]+$/
var regexCampoTexto=/^[a-z][A-Z]+$/

var regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
var regexTelefono=/^[0-9]{4}-[0-9]{4}$/
function validar(){
    var error=false;
    var mensajesError="";

    if (document.getElementById("nombre").value ==='') {
		error= true
		mensajeError+="*Ingrese su nombre "
	}
    if(!regexTelefono.test(document.getElementById("numero").value)){
        error=true;
        mensajesError+="Tiene que ingresar un telefono";
    }
    if(!regexEmail.test(document.getElementById("mail").value)){
        error=true;
        mensajesError+="Tiene que ser un email valido";
    }

    if(error){
        /*mostrar los mensajes de error*/
        document.getElementById("mensaje").innerHTML=mensajesError;
        return false;
    }else{
        return false;
    }
}



const CANTIDAD =1000;

function contarCaracteres(){
	var caracteresEscritos= document.getElementById('consulta').value.length;
	var restantes= CANTIDAD-caracteresEscritos;
	if (restantes<500) {
		document.getElementById("caracteres").style.color="red";
	} else {
		document.getElementById("caracteres").style.color="black";
	}

	document.getElementById("caracteres").innerHTML=restantes;
}


