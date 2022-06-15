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

<<<<<<< HEAD
  renderCinta() {
    let cinta = document.querySelector("#cinta");
=======
        // this.#listaSimbolos[0].activarCabezal()
    }
>>>>>>> 2d80f73a8bd8e8190f6521dcb70a39aae1c1ca8c

    for (let i = 0; i < this.#listaSimbolos.length; i++) {
      const simbolo = this.#listaSimbolos[i];

<<<<<<< HEAD
      cinta.appendChild(simbolo);
=======
        for (let i = 0; i < this.#listaSimbolos.length; i++) {
            const simbolo = this.#listaSimbolos[i];
            
            console.log('Elemento html del simbolo');
            cinta.appendChild(simbolo.getElementHTML())
        }
>>>>>>> 2d80f73a8bd8e8190f6521dcb70a39aae1c1ca8c
    }
  }
}
