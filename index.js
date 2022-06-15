import { Cinta } from "./cinta.model.js";

console.log("funciona desde index.js");

let contenedorCinta = document.getElementById("cinta");

function leerArchivo(e) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function (e) {
    var contenido = e.target.result;
    //mostrarContenido(contenido);
    let cinta = new Cinta(contenido);
  };
  lector.readAsText(archivo);
}

/*
function mostrarContenido(contenido) {
  var elemento = document.getElementById("cinta");
  console.log("cargando programa:", contenido);

  let arraycinta = contenido.split("");
  
  arraycinta.forEach((element) => {
    crearCelda(element);
  });
  

  console.log(cinta);

  var programa = document.getElementById("programa");
  programa.innerHTML = "¡Programa Cargado!";
}
*/

function crearCelda(valor) {
  let celda = `<div class="bit-container">
                <div class="bit-simbolo">${valor}</div>
                <div class="cabezal-container">
                    <img src="./resources/img/triangle.png" alt="triangle" class="pos_cabezal">
                </div>
            </div>`;

  contenedorCinta.insertAdjacentHTML("beforeend", celda);
}

document
  .getElementById("subir-programa")
  .addEventListener("change", leerArchivo, false);
