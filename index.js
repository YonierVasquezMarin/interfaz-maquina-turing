import { Cinta } from "./models/cinta.model.js";
import { MaquinaTuring } from "./models/maquina-turing.model.js";


let contenedorCinta = document.getElementById("cinta");
let cinta;

function leerArchivo(e) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function (e) {
    var contenido = e.target.result;
    var programa = document.getElementById("programa");
    programa.innerHTML = "¡Programa Cargado!";
    cinta = new Cinta(contenido);
  };
  lector.readAsText(archivo);
}

document
  .getElementById("subir-programa")
  .addEventListener("change", leerArchivo, false);

let ejecutar = document.getElementById("play");

ejecutar.addEventListener("click", ejecutarPrograma);


function ejecutarPrograma() {

  let mt = new MaquinaTuring(cinta)

  let repetir = () => {
    mt.efectuarOperacion()

    if (!mt.haFinalizado()) {
      setTimeout(repetir, 200);//500
    }
  };

  repetir();
}
