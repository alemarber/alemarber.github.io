
let btn_datos = document.getElementById("btn_datos");        // Encuentra el elemento en el sitio
let btn_experiencia = document.getElementById("btn_experiencia");
let btn_habilidades = document.getElementById("btn_habilidades");

function mostrar(parametro) {
    document.getElementById(parametro).style.display = "block";
    if(parametro == "datos") {
        document.getElementById("btn_experiencia").style.display = "none";
        document.getElementById("btn_habilidades").style.display = "none";
    } else {
        if(parametro == "experiencia") {
            document.getElementById("btn_datos").style.display = "none";
            document.getElementById("btn_habilidades").style.display = "none";
        } else {
            document.getElementById("btn_datos").style.display = "none";
            document.getElementById("btn_experiencia").style.display = "none";
        }
    }
}
    

function ocultar(parametro) {
    document.getElementById(parametro).style.display = "none";
}