export class ComplementoA2 {

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
            case 147:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 148
                        break;
                    case '1':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 158
                        break;
                }
                break;
            case 148:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 148
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 148
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 148
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 148
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 149
                        break;
                }
                break
            case 158:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 158
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 158
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 158
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 158
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 159
                        break;
                }
                break
            case 163:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 164
                        break;
                    case '1':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 165
                        break;
                }
                break;
            case 164:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 164
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 164
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 164
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 164
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 170
                        break;
                }
                break
            case 165:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 165
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 165
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 165
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 165
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 166
                        break;
                }
                break
            case 166:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 167
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 167
                        break;
                }
                break;
            case 167:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 168
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 168
                        break;
                }
                break;
            case 168:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 169
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 169
                        break;
                }
                break;
            case 169:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 170
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 170
                        break;
                }
                break;
            case 170:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 171
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 171
                        break;
                }
                break;
            case 171:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 172
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 172
                        break;
                }
                break;
            case 172:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 173
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 173
                        break;
                }
                break;
            case 173:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 159
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 159
                        break;
                }
                break;
            case 159:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 160
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 160
                        break;
                }
                break;
            case 160:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 161
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 161
                        break;
                }
                break;
            case 161:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 162
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 162
                        break;
                }
                break;
            case 162:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 149
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 149
                        break;
                }
                break;
            case 149:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 150
                        break;
                    case '1':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 150
                        break;
                }
                break;
            case 150:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 151
                        break;
                    case '1':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 151
                        break;
                }
                break;
            case 151:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 152
                        break;
                    case '1':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 152
                        break;
                }
                break;
            case 152:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 153
                        break;
                    case '1':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 153
                        break;
                }
                break;
            case 153:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 154
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 154
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 154
                        break;
                }
                break;
            case 154:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 174
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 155
                        break;
                }
                break;
            case 155:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 174
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 156
                        break;
                }
                break;
            case 156:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 174
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 157
                        break;
                }
                break;
            case 157:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 174
                        break;
                    case '1':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 174
                        break;
                }
                break;
            case 174:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 174
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 174
                        break;
                    case 'S':
                        cinta.moverCabezal(true, 'S')
                        mt.estadoActual = 174
                        break;
                    case 'X':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 2
                        break;
                }
                break;
        }
    }
}