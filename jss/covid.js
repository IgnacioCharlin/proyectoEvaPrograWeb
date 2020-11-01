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
    var contadorSintomas =0;
    var radiosQueEstanSeleccionados = 0;
    function radiosSeleccionados(nombreDelRadio){
        opcion = document.getElementsByName(nombreDelRadio);
        for(i in opcion){
            if (opcion[i].checked) {
                radiosQueEstanSeleccionados++;
                if (opcion[0].checked) {
                    contadorSintomas++;
                }
            }
        }
    }
    radiosSeleccionados("fiebre");
    radiosSeleccionados("cabeza");
    radiosSeleccionados("tos");
    radiosSeleccionados("garganta");
    radiosSeleccionados("respirar");
    if (radiosQueEstanSeleccionados != 5) {
        error = true;
        mensajeError = "<p>Completa los campos Obligatorios (*)</p>";
    }

  
    if(document.getElementsByName("viajo").value == 0){
        getElementById("paises").disabled=false;
    }
    if (error) {
        document.getElementById("mensaje").innerHTML=mensajeError;
        return false;
    }else{
        alert("El formulario fue completado correctamente " + contadorSintomas +  " síntomas de COVID-19 fueron registrados");
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


