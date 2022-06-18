export class Repetir {

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
            case 175:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 176
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 184
                        break;
                }
                break;
            case 175:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 176
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 184
                        break;
                }
                break;
            case 176:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 178
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 177
                        break;
                }
                break;
            case 184:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 186
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 185
                        break;
                }
                break;
            case 187:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 188
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 190
                        break;
                }
                break;
            case 178:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 179
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 179
                        break;
                }
                break;
            case 179:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 180
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 180
                        break;
                }
                break;
            case 180:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 181
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 181
                        break;
                }
                break;
            case 181:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 182
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 182
                        break;
                }
                break;
            case 182:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 183
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 183
                        break;
                }
                break;
            case 183:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 14
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 14
                        break;
                }
                break;
            case 177:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 181
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 181
                        break;
                }
                break;
            case 185:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 181
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 181
                        break;
                }
                break;
            case 186:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 182
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 182
                        break;
                }
                break;
            case 189:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 183
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 183
                        break;
                }
                break;
            case 188:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 189
                        break;
                }
                break;
            case 190:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 191
                        break;
                }
                break;
            case 191:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 192
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 192
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 192
                        break;
                }
                break;
            case 192:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 193
                        break;
                    case '1':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 193
                        break;
                }
                break;
            case 193:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 194
                        break;
                    case '1':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 194
                        break;
                }
                break;
            case 194:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 195
                        break;
                    case '1':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 195
                        break;
                }
                break;
            case 195:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 195
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 195
                        break;
                    case 'X':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 196
                        break;
                }
                break;
            case 196:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 197
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 198
                        break;
                }
                break;
            case 197:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 197
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 197
                        break;
                    case 'Y':
                        cinta.moverCabezal(true, 'Y')
                        mt.estadoActual = 197
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 199
                        break;
                }
                break;
            case 199:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 201
                        break;
                }
                break
            case 201:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 203
                        break;
                }
                break
            case 203:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 205
                        break;
                }
                break
            case 198:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 198
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 198
                        break;
                    case 'Y':
                        cinta.moverCabezal(true, 'Y')
                        mt.estadoActual = 198
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 200
                        break;
                }
                break;
            case 200:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 202
                        break;
                }
                break
            case 202:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 204
                        break;
                }
                break
            case 204:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 205
                        break;
                }
                break
            case 205:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 205
                        break;
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 205
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 205
                        break;
                    case 'Y':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 205
                        break;
                    case 'X':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 206
                        break;
                }
                break
            case 206:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 207
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 207
                        break;
                }
                break;
            case 207:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 208
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 208
                        break;
                    case 'Y':
                        cinta.moverCabezal(true, 'Y')
                        mt.estadoActual = 227
                        break;
                }
                break;
            case 227:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 227
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 227
                        break;
                    case 'Y':
                        cinta.moverCabezal(true, 'Y')
                        mt.estadoActual = 227
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 228
                        break;
                }
                break
            case 228:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 229
                        break;
                    case '1':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 229
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 229
                        break;
                }
                break
            case 229:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 229
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 229
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 229
                        break;
                    case 'Y':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 229
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 2
                        break;
                }
                break
            case 208:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, 'Z')
                        mt.estadoActual = 209
                        break;
                    case '1':
                        cinta.moverCabezal(true, 'Z')
                        mt.estadoActual = 221
                        break;
                }
                break;
            case 209:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 209
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 209
                        break;
                    case 'Y':
                        cinta.moverCabezal(true, 'Y')
                        mt.estadoActual = 209
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 210
                        break;
                }
                break;
            case 221:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 221
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 221
                        break;
                    case 'Y':
                        cinta.moverCabezal(true, 'Y')
                        mt.estadoActual = 221
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 222
                        break;
                }
                break;
            case 210:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 211
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 211
                        break;
                    case 'B':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 211
                        break;
                }
                break;
            case 222:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 211
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 211
                        break;
                    case 'B':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 211
                        break;
                }
                break;
            case 211:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 211
                        break;
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 211
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 211
                        break;
                    case 'Y':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 211
                        break;
                    case 'Z':
                        cinta.moverCabezal(true, 'Z')
                        mt.estadoActual = 212
                        break;
                }
                break
            case 212:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 213
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 223
                        break;
                }
                break;
            case 213:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 213
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 213
                        break;
                    case 'Y':
                        cinta.moverCabezal(true, 'Y')
                        mt.estadoActual = 213
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 214
                        break;
                }
                break;
            case 214:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 215
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 215
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 215
                        break;
                }
                break;
            case 215:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 216
                        break
                }
                break
            case 216:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 216
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 216
                        break;
                    case 'B':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 217
                        break;
                }
                break;
            case 223:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 223
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 223
                        break;
                    case 'Y':
                        cinta.moverCabezal(true, 'Y')
                        mt.estadoActual = 223
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 224
                        break;
                }
                break;
            case 224:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 225
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 225
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 225
                        break;
                }
                break;
            case 225:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 226
                        break
                }
                break
            case 226:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 226
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 226
                        break;
                    case 'B':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 217
                        break;
                }
                break;
            case 217:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 217
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 217
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 218
                        break;
                }
                break;
            case 218:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 219
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 220
                        break;
                }
                break;
            case 219:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 219
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 219
                        break;
                    case 'Y':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 219
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 219
                        break;
                    case 'Z':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 206
                        break;
                }
                break;
            case 220:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 220
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 220
                        break;
                    case 'Y':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 220
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 220
                        break;
                    case 'Z':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 206
                        break;
                }
                break;
        }
    }
}