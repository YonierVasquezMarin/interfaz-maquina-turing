import { AsignarValor } from "./automatas/asignar-valor.js";

export class MaquinaTuring {

    estadoActual = 1
    #cinta

    constructor(cinta) {
        this.#cinta = cinta
    }

    efectuarOperacion() {
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
            // Asignar valor
            default:
                new AsignarValor(simboloActual, this.#cinta, this)
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