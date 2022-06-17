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
            case 290:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 291
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 291
                        break;
                }
                break
            case 291:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 292
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 292
                        break;
                }
                break
            case 292:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 293
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 293
                        break;
                }
                break
            case 293:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 294
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 294
                        break;
                }
                break
            case 294:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 295
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 295
                        break;
                }
                break
            case 295:
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
            case 299:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 300
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 300
                        break;
                }
                break
            case 300:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 301
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 301
                        break;
                }
                break
            case 301:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 302
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 302
                        break;
                }
                break
            case 302:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 303
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 303
                        break;
                }
                break
            case 303:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 304
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 304
                        break;
                }
                break
            case 304:
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
            case 305:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 306
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 306
                        break;
                }
                break
            case 306:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 307
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 307
                        break;
                }
                break
            case 307:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 308
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 308
                        break;
                }
                break
            case 308:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 309
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 309
                        break;
                }
                break
            case 309:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 310
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 310
                        break;
                }
                break
            case 310:
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
            case 312:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 313
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 313
                        break;
                }
                break
            case 313:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 314
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 314
                        break;
                }
                break
            case 314:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 315
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 315
                        break;
                }
                break
            case 315:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 316
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 316
                        break;
                }
                break
            case 316:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 317
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 317
                        break;
                }
                break
            case 317:
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
            case 318:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 319
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 319
                        break;
                }
                break
            case 319:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 320
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 320
                        break;
                }
                break
            case 320:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 321
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 321
                        break;
                }
                break
            case 321:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 322
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 322
                        break;
                }
                break
            case 322:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 323
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 323
                        break;
                }
                break
            case 323:
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
            case 326:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 327
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 327
                        break;
                }
                break
            case 327:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 328
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 328
                        break;
                }
                break
            case 328:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 329
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 329
                        break;
                }
                break
            case 329:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 330
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 330
                        break;
                }
                break
            case 330:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 331
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 331
                        break;
                }
                break
            case 331:
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
            case 332:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 333
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 333
                        break;
                }
                break
            case 333:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 334
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 334
                        break;
                }
                break
            case 334:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 335
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 335
                        break;
                }
                break
            case 335:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 336
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 336
                        break;
                }
                break
            case 336:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 337
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 337
                        break;
                }
                break
            case 337:
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
            case 339:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 340
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 340
                        break;
                }
                break
            case 340:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 341
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 341
                        break;
                }
                break
            case 341:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 342
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 342
                        break;
                }
                break
            case 342:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 343
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 343
                        break;
                }
                break
            case 343:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 344
                        break;
                    case '1':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 344
                        break;
                }
                break
            case 344:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 344
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 344
                        break;
                    case 'S':
                        cinta.moverCabezal(true, 'S')
                        mt.estadoActual = 344
                        break;
                    case 'X':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 344
                        break;
                    case 'Y':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 345
                        break;
                }
                break
            case 345:
                switch (simboloActual) {
                    case 'Y':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 346
                        break;
                }
                break
            case 346:
                switch (simboloActual) {
                    case 'Y':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 347
                        break;
                }
                break
            case 347:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 347
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 347
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 348
                        break;
                }
                break
            case 348:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 349
                        break;
                }
                break
            case 349:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 350
                        break;
                }
                break
            case 350:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 350
                        break;
                    case '1':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 350
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 348
                        break;
                }
                break
            case 351:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 350
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 350
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 348
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 2
                        break;
                }
                break
            case 352:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 352
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 352
                        break;
                    case 'S':
                        cinta.moverCabezal(true, 'S')
                        mt.estadoActual = 352
                        break;
                    case 'X':
                        cinta.moverCabezal(true, 'X')
                        mt.estadoActual = 352
                        break;
                    case 'Y':
                        cinta.moverCabezal(true, 'Y')
                        mt.estadoActual = 352
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 353
                        break;
                }
                break
            case 353:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 354
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 354
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 354
                        break;
                }
                break
            case 354:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 355
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 355
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 355
                        break;
                }
                break
            case 355:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 355
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 355
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 356
                        break;
                }
                break
            case 356:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 357
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 358
                        break;
                }
                break
            case 357:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 357
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 357
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 357
                        break;
                    case 'Y':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 357
                        break;
                    case 'X':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 359
                        break;
                }
                break
            case 359:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 359
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 359
                        break;
                    case 'Y':
                        cinta.moverCabezal(true, 'Y')
                        mt.estadoActual = 359
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 361
                        break;
                }
                break
            case 361:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 363
                        break;
                    case '1':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 363
                        break;
                    case 'B':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 363
                        break;
                }
                break
            case 358:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 358
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 358
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 358
                        break;
                    case 'Y':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 358
                        break;
                    case 'X':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 360
                        break;
                }
                break
            case 360:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 360
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 360
                        break;
                    case 'Y':
                        cinta.moverCabezal(true, 'Y')
                        mt.estadoActual = 360
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 362
                        break;
                }
                break
            case 362:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 363
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 363
                        break;
                    case 'B':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 363
                        break;
                }
                break
            case 363:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 364
                        break;
                }
                break
            case 364:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 364
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 364
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 365
                        break;
                }
                break
            case 365:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, 'Z')
                        mt.estadoActual = 366
                        break;
                    case '1':
                        cinta.moverCabezal(false, 'Z')
                        mt.estadoActual = 366
                        break;
                }
                break
            case 366:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 367
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 368
                        break;
                }
                break
            case 367:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 367
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 367
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 367
                        break;
                    case 'Y':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 367
                        break;
                    case 'X':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 369
                        break;
                }
                break
            case 368:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 368
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 368
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 368
                        break;
                    case 'Y':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 368
                        break;
                    case 'X':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 369
                        break;
                }
                break
            case 369:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 369
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 369
                        break;
                    case 'Y':
                        cinta.moverCabezal(true, 'Y')
                        mt.estadoActual = 369
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 370
                        break;
                }
                break
            case 370:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 371
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 372
                        break;
                }
                break
            case 371:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 371
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 371
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 371
                        break;
                    case 'Z':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 373
                        break;
                }
                break
            case 372:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 372
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 372
                        break;
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 372
                        break;
                    case 'Z':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 373
                        break;
                }
                break
            case 373:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 374
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 374
                        break;
                }
                break
            case 374:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 377
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 377
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 375
                        break;
                }
                break
            case 375:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 376
                        break;
                    case '1':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 376
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 376
                        break;
                }
                break
            case 376:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 376
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 376
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 376
                        break;
                    case 'Y':
                        cinta.moverCabezal(false, 'Y')
                        mt.estadoActual = 376
                        break;
                    case 'X':
                        cinta.moverCabezal(false, 'X')
                        mt.estadoActual = 2
                        break;
                }
                break
            case 377:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, 'Z')
                        mt.estadoActual = 378
                        break;
                    case '1':
                        cinta.moverCabezal(false, 'Z')
                        mt.estadoActual = 379
                        break;
                }
                break
            case 378:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 378
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 378
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 380
                        break;
                }
                break
            case 380:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 382
                        break;
                    case '1':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 382
                        break;
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 382
                        break;
                }
                break
            case 379:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(false, '0')
                        mt.estadoActual = 379
                        break;
                    case '1':
                        cinta.moverCabezal(false, '1')
                        mt.estadoActual = 379
                        break;
                    case 'B':
                        cinta.moverCabezal(false, 'B')
                        mt.estadoActual = 381
                        break;
                }
                break
            case 381:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 382
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 382
                        break;
                    case '0':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 382
                        break;
                }
                break
            case 382:
                switch (simboloActual) {
                    case 'B':
                        cinta.moverCabezal(true, 'B')
                        mt.estadoActual = 383
                        break;
                }
                break
            case 383:
                switch (simboloActual) {
                    case '0':
                        cinta.moverCabezal(true, '0')
                        mt.estadoActual = 383
                        break;
                    case '1':
                        cinta.moverCabezal(true, '1')
                        mt.estadoActual = 383
                        break;
                    case 'Z':
                        cinta.moverCabezal(false, 'Z')
                        mt.estadoActual = 366
                        break;
                }
                break
        }
    }
}