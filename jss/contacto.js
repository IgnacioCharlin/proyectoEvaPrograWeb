var regexTelefono=/^[0-9]{4}-[0-9]{4}/;
var regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/

function validar(){
    var error=false;
    var mensajeError="";
    if(!regexTelefono.test(document.getElementById("numero").value)){
        error=true;
        mensajeError+="<p>El telfono debe contar con los 8 numeros separados por - </p></br>";
    }
    if(!regexEmail.test(document.getElementById("mail").value)){
        error=true;
        mensajeError+="<p>Tiene que ser un email valido</p></br>";
    }
    if (document.getElementById("nombre").value.length == 0) {
        error = true;
        mensajeError += "<p>Completa los campos Obligatorios (*)</p></br>";
    }
    if(error){
        document.getElementById("mensaje").innerHTML=mensajeError;
        return false;
    }else{
        return true;
    }
}
const CANTIDAD=1000;
function contarCaracteres(){
    var caracteresEscritos=document.getElementById("consulta").value.length;
    var restantes=CANTIDAD-caracteresEscritos;
    if(restantes<=5){
        document.getElementById("caracteres").style.color="red";
    }else{
        document.getElementById("caracteres").style.color="black";
    }
    document.getElementById("caracteres").innerHTML=restantes;
}
