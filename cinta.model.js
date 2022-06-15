import { Simbolo } from "./simbolo.model.js";

export class Cinta {
  #bitApuntado = 0;
  #cinta;
  #listaSimbolos = [];

  constructor(cintaPrograma) {
    this.#cinta = cintaPrograma;
    this.iniciarCinta();
    this.renderCinta();
  }

  iniciarCinta() {
    for (let i = 0; i < this.#cinta.length; i++) {
      const caracter = this.#cinta[i];

      // construir el objeto Simbolo
      let nuevoSimbolo = new Simbolo(caracter);
      this.#listaSimbolos.push(nuevoSimbolo);
    }

    this.#listaSimbolos[0].activarCabezal();
  }

  renderCinta() {
    let cinta = document.querySelector("#cinta");

    for (let i = 0; i < this.#listaSimbolos.length; i++) {
      const simbolo = this.#listaSimbolos[i];
      cinta.appendChild(simbolo.getElementHTML());
    }
  }

  moverCabezal(haciaDer) {
    this.#listaSimbolos[this.#bitApuntado].desactivarCabezal();

    if (haciaDer) {
      this.#bitApuntado += 1;
    } else {
      this.#bitApuntado -= 1;
    }

    this.#listaSimbolos[this.#bitApuntado].activarCabezal();
  }

  bitFinal() {
    return this.#bitApuntado == this.#listaSimbolos.length - 1;
  }

    lecturaCabezal(){

      return this.#listaSimbolos[this.#bitApuntado]
  
    }
    
    


}
