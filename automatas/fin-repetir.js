export class FinRepetir {

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
            case 231:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 231
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 231
                        break;
                    case 'S':
                        cinta.moverCabezal(false, 'S')
                        mt.estadoActual = 231
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 231
                        break;
                    case 'Y':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 231
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 232
                        break;
                }
                break
            case 232:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 233
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 233
                        break;
                }
                break
            case 233:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 234
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 234
                        break;
                }
                break
            case 234:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 235
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 235
                        break;
                }
                break
            case 235:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 236
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 236
                        break;
                }
                break
            case 236:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 237
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 237
                        break;
                }
                break
            case 237:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 238
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 238
                        break;
                }
                break
            case 238:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 239
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 239
                        break;
                }
                break
            case 239:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 240
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 240
                        break;
                }
                break
            case 240:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 296
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 241
                        break;
                }
                break
            case 241:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 269
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 242
                        break;
                }
                break
            case 242:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 256
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 243
                        break;
                }
                break
            case 243:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 250
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 244
                        break;
                }
                break
            case 256:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 263
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 257
                        break;
                }
                break
            case 269:
                switch (simboloActual) {
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 270
                        break;
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 283
                        break;
                }
                break
            case 270:
                switch (simboloActual) {
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 271
                        break;
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 277
                        break;
                }
                break
            case 283:
                switch (simboloActual) {
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 284
                        break;
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 290
                        break;
                }
                break
            case 296:
                switch (simboloActual) {
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 297
                        break;
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 324
                        break;
                }
                break
            case 297:
                switch (simboloActual) {
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 298
                        break;
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 311
                        break;
                }
                break
            case 297:
                switch (simboloActual) {
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 298
                        break;
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 311
                        break;
                }
                break
            case 298:
                switch (simboloActual) {
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 299
                        break;
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 305
                        break;
                }
                break
            case 311:
                switch (simboloActual) {
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 312
                        break;
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 318
                        break;
                }
                break
            case 324:
                switch (simboloActual) {
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 325
                        break;
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 338
                        break;
                }
                break
            case 325:
                switch (simboloActual) {
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 326
                        break;
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 332
                        break;
                }
                break
            case 338:
                switch (simboloActual) {
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 339
                        break;
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 344
                        break;
                }
                break
            case 244:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 245
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 245
                        break;
                }
                break
            case 245:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 246
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 246
                        break;
                }
                break
            case 246:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 247
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 247
                        break;
                }
                break
            case 247:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 248
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 248
                        break;
                }
                break
            case 248:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 249
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 249
                        break;
                }
                break
            case 249:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 352
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 352
                        break;
                }
                break
            case 250:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 251
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 251
                        break;
                }
                break
            case 251:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 252
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 252
                        break;
                }
                break
            case 252:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 253
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 253
                        break;
                }
                break
            case 253:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 254
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 254
                        break;
                }
                break
            case 254:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 255
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 255
                        break;
                }
                break
            case 255:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 352
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 352
                        break;
                }
                break
            case 257:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 258
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 258
                        break;
                }
                break
            case 258:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 259
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 259
                        break;
                }
                break
            case 259:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 260
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 260
                        break;
                }
                break
            case 260:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 261
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 261
                        break;
                }
                break
            case 261:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 262
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 262
                        break;
                }
                break
            case 262:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 352
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 352
                        break;
                }
                break
            case 263:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 264
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 264
                        break;
                }
                break
            case 264:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 265
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 265
                        break;
                }
                break
            case 265:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 266
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 266
                        break;
                }
                break
            case 266:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 267
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 267
                        break;
                }
                break
            case 267:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 268
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 268
                        break;
                }
                break
            case 268:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 352
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 352
                        break;
                }
                break
            case 271:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 272
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 272
                        break;
                }
                break
            case 272:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 273
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 273
                        break;
                }
                break
            case 273:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 274
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 274
                        break;
                }
                break
            case 274:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 275
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 275
                        break;
                }
                break
            case 275:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 276
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 276
                        break;
                }
                break
            case 276:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 352
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 352
                        break;
                }
                break
            case 277:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 278
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 278
                        break;
                }
                break
            case 278:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 279
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 279
                        break;
                }
                break
            case 279:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 280
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 280
                        break;
                }
                break
            case 280:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 281
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 281
                        break;
                }
                break
            case 281:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 282
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 282
                        break;
                }
                break
            case 282:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 352
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 352
                        break;
                }
                break
            case 284:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 285
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 285
                        break;
                }
                break
            case 285:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 286
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 286
                        break;
                }
                break
            case 286:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 287
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 287
                        break;
                }
                break
            case 287:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 288
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 288
                        break;
                }
                break
            case 288:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 289
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 289
                        break;
                }
                break
            case 289:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 352
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 352
                        break;
                }
                break
        }
    }
}