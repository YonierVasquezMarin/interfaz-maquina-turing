import { AsignarValor } from "../automatas/asignar-valor.js";
import { Desplazar } from "../automatas/desplazar.js";
import { ComplementoA2 } from "../automatas/complemento-a2.js";
import { Repetir } from "../automatas/repetir.js";
import { FinRepetir } from "../automatas/fin-repetir.js";
import { Sumar } from "../automatas/sumar.js";

export class MaquinaTuring {

    estadoActual = 1
    #cinta

    constructor(cinta) {
        this.#cinta = cinta
    }

    efectuarOperacion() {
        console.log(`Estado actual ${this.estadoActual}`);
        let simboloActual = this.#cinta.lecturaSimboloCabezal()

        switch (this.estadoActual) {
            case 1:
                switch (simboloActual) {
                    case "0":
                        this.#cinta.moverCabezal(true, '0')
                        this.estadoActual = 1
                        break
                    case "1":
                        this.#cinta.moverCabezal(true, '1')
                        this.estadoActual = 1
                        break
                    case "S":
                        this.#cinta.moverCabezal(true, 'S')
                        this.estadoActual = 2
                        break
                }
                break;
            case 2:
                switch (simboloActual) {
                    case "0":
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 3
                        break;
                    case "X":
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 2
                        break
                    case "1":
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 11
                        break
                    case "Y":
                        this.#cinta.moverCabezal(true, 'Y')
                        this.estadoActual = 10
                        break
                }
                break
            case 3:
                switch (simboloActual) {
                    case "0":
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 4
                        break;
                    case "1":
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 7
                        break
                }
                break
            case 4:
                switch (simboloActual) {
                    case '0':
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 5
                        break;
                    case '1':
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 6
                        break;
                }
                break
            case 11:
                switch (simboloActual) {
                    case '0':
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 12
                        break;
                    case '1':
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 15
                        break;
                }
                break
            case 15:
                switch (simboloActual) {
                    case '1':
                        this.#cinta.moverCabezal(false, 'X')
                        this.estadoActual = 16
                        break;
                }
                break
            case 5:
                switch (simboloActual) {
                    case '0':
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 18
                        break;
                    case '1':
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 17
                        break;
                }
                break;
            case 7:
                switch (simboloActual) {
                    case '0':
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 8
                        break;
                    case '1':
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 9
                        break;
                }
                break
            case 8:
                switch (simboloActual) {
                    case '0':
                        this.#cinta.moverCabezal(true, '0')
                        this.estadoActual = 76
                        break;
                    case '1':
                        this.#cinta.moverCabezal(true, '1')
                        this.estadoActual = 76
                        break;
                }
                break
            case 12:
                switch (simboloActual) {
                    case '0':
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 13
                        break;
                    case '1':
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 14
                        break;
                }
                break
            case 13:
                switch (simboloActual) {
                    case '0':
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 147
                        break;
                    case '1':
                        this.#cinta.moverCabezal(true, 'X')
                        this.estadoActual = 163
                        break;
                }
                break
            case 14:
                switch (simboloActual) {
                    case '0':
                        this.#cinta.moverCabezal(true, '0')
                        this.estadoActual = 175
                        break;
                    case '1':
                        this.#cinta.moverCabezal(true, '1')
                        this.estadoActual = 187
                        break;
                }
                break
            case 10:
                switch (simboloActual) {
                    case 'Y':
                        this.#cinta.moverCabezal(false, 'Y')
                        this.estadoActual = 231
                        break;
                }
                break
            default:
                new AsignarValor(simboloActual, this.#cinta, this)
                new Desplazar(simboloActual, this.#cinta, this)
                new ComplementoA2(simboloActual, this.#cinta, this)
                new Repetir(simboloActual, this.#cinta, this)
                new FinRepetir(simboloActual, this.#cinta, this)
                new Sumar(simboloActual, this.#cinta, this)
                break
        }
    }

    haFinalizado() {
        if (this.estadoActual == 16) {
            return true
        } else {
            return false
        }
    }
}