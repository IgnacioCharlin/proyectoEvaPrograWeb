function validar(){
    var error=false;
    var mensajeError="";
    if (document.getElementById("nombre").value.length == 0) {
        error = true;
        mensajeError = "<p>Completa los campos Obligatorios (*)</p>";
    }
    if (document.getElementById("dni").value.length == 0) {
        error = true;
        mensajeError = "<p>Completa los campos Obligatorios (*)</p>";
    }
    if (document.getElementById("telefono").value.length == 0) {
        error = true;
        mensajeError = "<p>Completa los campos Obligatorios (*)</p>";
    }
    var opcionFiebre = document.getElementsByName("fiebre");
    var opcionCabeza = document.getElementsByName("cabeza");
    var opcionTos = document.getElementsByName("tos");
    var opcionGarganta = document.getElementsByName("garganta");
    var opcionRespirar = document.getElementsByName("respirar");
    let contador = 0;
    var seleccionado=false;
    for(i in opcionFiebre){
        if(opcionFiebre[i].checked){
            seleccionado=true;
        }else if(opcionCabeza[i].checked){
            seleccionado=true;
        }else if(opcionTos[i].checked ){
            seleccionado=true;
        }else if(opcionGarganta[i].checked){
            seleccionado=true;
        }else if(opcionRespirar[i].checked){
            seleccionado=true;
        }
    }
    if (opcionFiebre[0].checked) {
        contador++;
    }
    if (opcionCabeza[0].checked) {
        contador++;
    }
    if (opcionTos[0].checked) {
        contador++;
    }
    if (opcionGarganta[0].checked) {
        contador++;
    }
    if (opcionRespirar[0].checked) {
        contador++;
    }
    if(document.getElementsByName("viajo").value == 0){
        getElementById("paises").disabled=false;
    }
    if(!seleccionado){
        error=true;
        mensajesError="<p>Completa los campos Obligatorios (*)</p>";
    }
    if (error) {
        document.getElementById("mensaje").innerHTML=mensajeError;
        return false;
    }else{
        alert("El formulario fue completado correctamente " + contador +  " síntomas de COVID-19 fueron registrados");
        return true;
    }
}
function activar() {
    document.getElementById('paises').disabled=false;
}

function desactivar() {
    document.getElementById('paises').disabled=true;
}

function mostrar(){
    document.getElementById('ciudadDirrecion').style.display="flex"; 
}

function ocultar() {
    document.getElementById('ciudadDirrecion').style.display="none"; 
}


