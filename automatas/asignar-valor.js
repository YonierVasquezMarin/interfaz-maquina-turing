export class AsignarValor {

    #simboloActual
    #cinta
    #mt

    constructor(simboloActual, cinta, mt) {
        this.#simboloActual = simboloActual
        this.#cinta = cinta
        this.#mt = mt
        this.efectuarOperacion()
    }

    efectuarOperacion() {
        let simboloActual = this.#simboloActual
        let cinta = this.#cinta
        let mt = this.#mt

        switch (mt.estadoActual) {
            case 5:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 16 // esta mal, esto es una prueba
                        break;

                    // continuara.....
                }
                break;
        }

    }
}