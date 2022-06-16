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
                        mt.estadoActual = 18
                        break;
                    case '1':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 17
                        break;
                }
                break;
            case 17:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 20
                        break;
                    case '1':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 21
                        break;
                }
                break;
            case 18:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 36
                        break;
                    case '1':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 19
                        break;
                }
                break;
            case 19:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 19
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 19
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 19
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 19
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 30
                        break;
                }
                break;
            case 20:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 20
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 20
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 20
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 20
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 26
                        break;
                }
                break;
            case 21:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 21
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 21
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 21
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 21
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 22
                        break;
                }
                break;
            case 22:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 23
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 23
                        break;
                }
                break
            case 23:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 24
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 24
                        break;
                }
                break
            case 23:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 24
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 24
                        break;
                }
                break
            case 24:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 25
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 25
                        break;
                }
                break
            case 25:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 26
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 26
                        break;
                }
                break
            case 26:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 27
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 27
                        break;
                }
                break
            case 27:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 28
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 28
                        break;
                }
                break
            case 28:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 29
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 29
                        break;
                }
                break
            case 29:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 30
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 30
                        break;
                }
                break
            case 30:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 31
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 31
                        break;
                }
                break
            case 31:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 32
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 32
                        break;
                }
                break
            case 32:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 33
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 33
                        break;
                }
                break
            case 33:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, 'Z')
                        mt.estadoActual = 34
                        break;
                    case '1':
                        cinta.moverCabezal(true, 'Z')
                        mt.estadoActual = 35
                        break;
                }
                break
            case 34:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 34
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 34
                        break;
                    case 'S':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 36
                        break;
                }
                break
            case 35:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 35
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 35
                        break;
                    case 'S':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 36
                        break;
                }
                break
            case 36:
                switch (simboloActual) {
                    case 'X':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 36
                        break;
                    case '0':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 37
                        break;
                    case '1':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 39
                        break;
                }
                break
            case 37:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 37
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 37
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 37
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 37
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 38
                        break;
                    case 'Z':
                        cinta.moverCabezal(true, 'Z')
                        mt.estadoActual = 38
                        break;
                }
                break
            case 38:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 41
                        break;
                    case '1':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 41
                        break;
                }
                break
            case 39:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 39
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 39
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 39
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 39
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 40
                        break;
                    case 'Z':
                        cinta.moverCabezal(true, 'Z')
                        mt.estadoActual = 40
                        break;
                }
                break
            case 40:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 41
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 41
                        break;
                }
                break
            case 41:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 41
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 41
                        break;
                    case 'S':
                        cinta.moverCabezal(true, 'S')
                        mt.estadoActual = 41
                        break;
                    case 'X':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 42
                        break;
                }
                break
            case 42:
                switch (simboloActual) {
                    case 'X':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 42
                        break;
                    case '0':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 43
                        break;
                    case '1':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 46
                        break;
                }
                break
            case 43:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 43
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 43
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 43
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 43
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 44
                        break;
                    case 'Z':
                        cinta.moverCabezal(true, 'Z')
                        mt.estadoActual = 44
                        break;
                }
                break
            case 44:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 45
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 45
                        break;
                }
                break
            case 45:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 49
                        break;
                    case '1':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 49
                        break;
                }
                break
            case 46:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 46
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 46
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 46
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 46
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 47
                        break;
                    case 'Z':
                        cinta.moverCabezal(true, 'Z')
                        mt.estadoActual = 47
                        break;
                }
                break
            case 47:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 48
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 48
                        break;
                }
                break
            case 48:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 49
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 49
                        break;
                }
                break
            case 49:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 49
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 49
                        break;
                    case 'S':
                        cinta.moverCabezal(true, 'S')
                        mt.estadoActual = 49
                        break;
                    case 'X':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 50
                        break;
                }
                break
            case 50:
                switch (simboloActual) {
                    case 'X':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 50
                        break;
                    case '0':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 51
                        break;
                    case '1':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 55
                        break;
                }
                break
            case 51:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 51
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 51
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 51
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 51
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 52
                        break;
                    case 'Z':
                        cinta.moverCabezal(true, 'Z')
                        mt.estadoActual = 52
                        break;
                }
                break
            case 52:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 53
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 53
                        break;
                }
                break
            case 53:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 54
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 54
                        break;
                }
                break
            case 54:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 59
                        break;
                    case '1':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 59
                        break;
                }
                break
            case 55:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 55
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 55
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 55
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 55
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 56
                        break;
                    case 'Z':
                        cinta.moverCabezal(true, 'Z')
                        mt.estadoActual = 56
                        break;
                }
                break
            case 56:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 57
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 57
                        break;
                }
                break
            case 57:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 58
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 58
                        break;
                }
                break
            case 58:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 59
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 59
                        break;
                }
                break
            case 59:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 59
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 59
                        break;
                    case 'S':
                        cinta.moverCabezal(true, 'S')
                        mt.estadoActual = 59
                        break;
                    case 'X':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 60
                        break;
                }
                break
            case 60:
                switch (simboloActual) {
                    case 'X':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 60
                        break;
                    case '0':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 66
                        break;
                    case '1':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 61
                        break;
                }
                break
            case 66:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 66
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 66
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 66
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 66
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 67
                        break;
                    case 'Z':
                        cinta.moverCabezal(true, 'Z')
                        mt.estadoActual = 67
                        break;
                }
                break
            case 67:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 68
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 68
                        break;
                }
                break
            case 68:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 69
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 69
                        break;
                }
                break
            case 69:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 70
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 70
                        break;
                }
                break
            case 70:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 71
                        break;
                    case '1':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 71
                        break;
                }
                break
            case 61:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 61
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 61
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 61
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 61
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 62
                        break;
                    case 'Z':
                        cinta.moverCabezal(true, 'Z')
                        mt.estadoActual = 62
                        break;
                }
                break
            case 62:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 63
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 63
                        break;
                }
                break
            case 63:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 64
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 64
                        break;
                }
                break
            case 64:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 65
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 65
                        break;
                }
                break
            case 65:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 71
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 71
                        break;
                }
                break
            case 71:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 71
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 71
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 72
                        break;
                    case 'S':
                        cinta.moverCabezal(true, 'S')
                        mt.estadoActual = 75
                        break;
                }
                break
            case 72:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 73
                        break;
                    case '1':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 74
                        break;
                }
                break
            case 73:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 73
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 73
                        break;
                    case 'Z':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 75
                        break;
                }
                break
            case 74:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 74
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 74
                        break;
                    case 'Z':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 75
                        break;
                }
                break
            case 75:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 75
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 75
                        break;
                    case 'S':
                        cinta.moverCabezal(true, 'S')
                        mt.estadoActual = 75
                        break;
                    case 'X':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 2
                        break;
                }
                break
        }

    }
}