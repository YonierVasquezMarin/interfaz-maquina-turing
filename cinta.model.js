import { Simbolo } from "./simbolo.model.js";

export class Cinta {
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

      console.log("Elemento html del simbolo");
      cinta.appendChild(simbolo.getElementHTML());
    }
  }
}
