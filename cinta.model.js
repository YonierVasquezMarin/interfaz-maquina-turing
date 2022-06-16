import { Simbolo } from "./simbolo.model.js";

export class Cinta {
  #bitApuntado = 0;
  #cinta;
  #listaSimbolos = [];
  #cintaHTML = document.querySelector('#cinta')

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
    for (let i = 0; i < this.#listaSimbolos.length; i++) {
      const simbolo = this.#listaSimbolos[i];
      this.#cintaHTML.appendChild(simbolo.getElementHTML());
    }
  }

  moverCabezal(haciaDer, nuevoSimbolo) {
    // cambiar el simbolo actual
    this.#listaSimbolos[this.#bitApuntado].cambiarSimbolo(nuevoSimbolo)

    // mover cabezal
    this.#listaSimbolos[this.#bitApuntado].desactivarCabezal();

    if (haciaDer) {
      let esUltimoBit = this.#bitApuntado == this.#listaSimbolos.length - 1

      if (esUltimoBit) {
        // agregar un blanco al final de la cinta
        let nuevoBlanco = new Simbolo('B')
        this.#listaSimbolos.push(nuevoBlanco)
        this.#cintaHTML.appendChild(nuevoBlanco.getElementHTML())
      }
      this.#bitApuntado += 1;

    } else {

      if (this.#bitApuntado == 0) {
        // agregar un blanco al inicio de la cinta
        let nuevoBlanco = new Simbolo('B')
        this.#listaSimbolos.unshift(nuevoBlanco)
        this.#cintaHTML.insertAdjacentElement("afterbegin", nuevoBlanco.getElementHTML())
      } else {
        this.#bitApuntado -= 1;
      }
    }

    this.#listaSimbolos[this.#bitApuntado].activarCabezal();

  }

  bitFinal() {
    return this.#bitApuntado == this.#listaSimbolos.length - 1;
  }

  lecturaSimboloCabezal() {
    return this.#listaSimbolos[this.#bitApuntado].getSimbol()
  }

  getBitApuntado() {
    return this.#bitApuntado;
  }

  // rempSimActual(nuevoSimbolo) {
  //   this.#listaSimbolos[this.#bitApuntado].cambiarSimbolo(nuevoSimbolo)
  // }

}
