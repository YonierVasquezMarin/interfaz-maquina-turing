import { Cinta } from "./cinta.model.js";

console.log("funciona desde index.js");

let contenedorCinta = document.getElementById("cinta");
let cinta = new Cinta();

function leerArchivo(e) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function (e) {
    var contenido = e.target.result;
    //mostrarContenido(contenido);
    var programa = document.getElementById("programa");
    programa.innerHTML = "¡Programa Cargado!";
  cinta = new Cinta(contenido)
  };
  lector.readAsText(archivo);
}


document
  .getElementById("subir-programa")
  .addEventListener("change", leerArchivo, false);


let ejecutar = document.getElementById("play")

  ejecutar.addEventListener('click',()=>{
    
    
    
    console.log("text");

ejecutarPrograma()

  })




function ejecutarPrograma(){
  let repetir=cb=>{

  }
}