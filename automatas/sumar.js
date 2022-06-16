export class Desplazar {
  #simboloActual;
  #cinta;
  #mt;

  constructor(simboloActual, cinta, mt) {
    this.#simboloActual = simboloActual;
    this.#cinta = cinta;
    this.#mt = mt;
    this.efectuarOperacion();
  }

  efectuarOperacion() {
    let simboloActual = this.#simboloActual;
    let cinta = this.#cinta;
    let mt = this.#mt;

    switch (mt.estadoActual) {
      case 384:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 818;
            break;
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 385;
            break;
        }
        break;

      case 385:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 576;
            break;
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 386;
            break;
        }
        break;

      case 386:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 439;
            break;
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 387;
            break;
        }
        break;

      case 387:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 387;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 387;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 387;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 387;
            break;
        }
        break;

      case 388:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 389;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 389;
            break;
        }
        break;

      case 389:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 390;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 390;
            break;
        }
        break;

      case 390:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 391;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 391;
            break;
        }
        break;

      case 391:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 421;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 392;
            break;
        }
        break;

<<<<<<< HEAD
=======

>>>>>>> 215704d5d994c865a1866c921778aac3340a7773
      case 392:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 392;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 392;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 392;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 393;
            break;
        }
        break;

      case 421:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 421;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 421;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 421;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 422;
            break;
        }
        break;

      case 422:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 423;
            break;
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 394;
            break;
        }
        break;

      case 393:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 423;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 394;
            break;
        }
        break;

      case 394:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 395;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 395;
            break;
        }
        break;

      case 423:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 395;
            break;
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 395;
            break;
        }
        break;

      case 395:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 395;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 395;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 396;
            break;
        }
        break;

      case 396:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 397;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 397;
            break;
        }
        break;

      case 397:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 398;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 398;
            break;
        }
        break;

      case 398:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 424;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 399;
            break;
        }
        break;

      case 399:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 399;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 399;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 399;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 400;
            break;
        }
        break;

      case 424:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 424;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 424;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 424;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 425;
            break;
        }
        break;

      case 425:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 426;
            break;
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 401;
            break;
        }
        break;

      case 400:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 426;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 401;
            break;
        }
        break;

      case 401:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 402;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 402;
            break;
        }
        break;

      case 402:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 403;
            break;
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 403;
            break;
        }
        break;

      case 426:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 427;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 427;
            break;
        }
        break;

      case 427:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 403;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 403;
            break;
        }
        break;

      case 403:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 403;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 403;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 404;
            break;
        }
        break;

      case 404:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 405;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 405;
            break;
        }

        break;

      case 405:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 428;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 406;
            break;
        }
        break;

      case 406:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 406;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 406;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 406;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 407;
            break;
        }
        break;

      case 428:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 428;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 428;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 428;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 429;
            break;
        }
        break;

      case 429:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 430;
            break;
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 408;
            break;
        }
        break;

      case 407:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 430;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 408;
            break;
        }
        break;

      case 408:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 409;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 409;
            break;
        }
        break;

      case 430:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 431;
            break;
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 431;
            break;
        }
        break;

      case 409:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 410;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 410;
            break;
        }
        break;

      case 431:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 432;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 432;
            break;
        }
        break;

      case 410:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 411;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 411;
            break;
        }
        break;

      case 432:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 411;
            break;
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 411;
            break;
        }
        break;

      case 411:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 411;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 411;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 412;
            break;
        }
        break;

      case 412:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 433;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 413;
            break;
        }
        break;

      case 413:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 413;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 413;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 413;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 414;
            break;
        }
        break;

      case 433:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 433;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 433;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 433;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 434;
            break;
        }
        break;

      case 434:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 435;
            break;
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 415;
            break;
        }
        break;

      case 414:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 435;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 415;
            break;
        }
        break;

      case 415:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 416;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 416;
            break;
        }
        break;

      case 435:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 436;
            break;
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 436;
            break;
        }
        break;

      case 416:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 417;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 417;
            break;
        }
        break;

      case 436:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 437;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 437;
            break;
        }
        break;

      case 417:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 418;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 418;
            break;
        }
        break;

      case 437:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 438;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 438;
            break;
        }
        break;

      case 418:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 419;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 419;
            break;
        }
        break;

      case 438:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 419;
            break;
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 419;
            break;
        }
        break;

      case 419:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 420;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 420;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 420;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 420;
            break;
        }
        break;

<<<<<<< HEAD
      /*---------------------------------------
            Salida
            ----------------------------------------- */

      case 420:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 420;
            break;
          case "1":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 420;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 420;
            break;

          case "X":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 2;
            break;
        }
        break;
=======
>>>>>>> 215704d5d994c865a1866c921778aac3340a7773




      case 439:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 427;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 427;
            break;
        }
        break;
    }
  }
}
