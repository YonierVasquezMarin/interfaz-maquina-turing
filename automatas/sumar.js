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

      case 439:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 439;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 439;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 439;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 439;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 440;
            break;
        }
        break;

      case 440:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 441;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 441;
            break;
        }
        break;

      case 441:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 442;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 442;
            break;
        }
        break;

      case 442:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 443;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 443;
            break;
        }
        break;

      case 443:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 508;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 444;
            break;
        }
        break;

      case 444:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 445;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 445;
            break;
        }
        break;

      case 445:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 446;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 446;
            break;
        }
        break;

      case 446:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 447;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 447;
            break;
        }
        break;

      case 447:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 489;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 448;
            break;
        }
        break;

      case 448:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 448;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 448;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 448;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 449;
            break;
        }
        break;

      case 449:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 450;
            break;

          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 491;
            break;
        }
        break;

      case 489:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 489;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 489;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 489;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 490;
            break;
        }
        break;

      case 490:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 491;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 492;
            break;
        }
        break;

      case 450:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 451;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 451;
            break;
        }
        break;

      case 491:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 451;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 451;
            break;
        }
        break;

      case 492:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 451;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 451;
            break;
        }
        break;

      case 510:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 511;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 511;
            break;
        }
        break;

      case 511:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 512;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 512;
            break;
        }
        break;

      case 512:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 513;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 513;
            break;
        }
        break;

      case 513:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 532;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 514;
            break;
        }
        break;

      case 514:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 514;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 514;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 514;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 515;
            break;
        }
        break;

      case 515:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 514;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 532;
            break;
        }
        break;

      case 532:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 533;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 533;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 533;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 533;
            break;
        }
        break;

      case 533:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 534;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 558;
            break;
        }
        break;

      case 516:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 451;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 451;
            break;
        }
        break;

      case 558:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 451;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 451;
            break;
        }
        break;

      case 534:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 451;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 451;
            break;
        }
        break;

      case 451:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 451;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 451;
            break;
          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 452;
            break;
        }
        break;

      case 452:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 453;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 453;
            break;
        }
        break;

      case 453:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 454;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 454;
            break;
        }
        break;

      case 454:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 517;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 455;
            break;
        }
        break;

      case 455:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 456;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 456;
            break;
        }
        break;

      case 456:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 457;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 457;
            break;
        }
        break;

      case 457:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 458;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 458;
            break;
        }
        break;

      case 458:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 493;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 459;
            break;
        }
        break;

      case 459:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 459;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 459;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 459;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 460;
            break;
        }
        break;

      case 460:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 461;
            break;

          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 495;
            break;
        }
        break;

      case 493:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 493;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 493;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 493;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 494;
            break;
        }
        break;

      case 494:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 495;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 497;
            break;
        }
        break;

      case 461:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 462;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 462;
            break;
        }
        break;

      case 462:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 463;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 463;
            break;
        }
        break;

      case 495:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 496;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 496;
            break;
        }
        break;

      case 496:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 463;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 463;
            break;
        }
        break;

      case 497:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 498;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 498;
            break;
        }
        break;

      case 498:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 463;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 463;
            break;
        }
        break;

      case 517:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 518;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 518;
            break;
        }
        break;

      case 518:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 519;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 520;
            break;
        }
        break;

      case 519:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 520;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 520;
            break;
        }
        break;

      case 520:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 535;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 521;
            break;
        }
        break;

      case 521:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 521;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 521;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 521;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 522;
            break;
        }
        break;

      case 522:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 523;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 537;
            break;
        }
        break;

      case 535:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 535;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 535;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 535;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 536;
            break;
        }
        break;

      case 536:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 537;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 559;
            break;
        }
        break;

      case 523:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 524;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 524;
            break;
        }
        break;

      case 524:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 463;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 463;
            break;
        }
        break;

      case 537:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 538;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 538;
            break;
        }
        break;

      case 538:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 463;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 463;
            break;
        }
        break;

      case 559:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 560;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 560;
            break;
        }
        break;

      case 560:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 463;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 463;
            break;
        }
        break;

      case 463:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 463;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 463;
            break;
          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 464;
            break;
        }
        break;

      case 464:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 565;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 565;
            break;
        }
        break;

      case 465:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 539;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 466;
            break;
        }
        break;

      case 466:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 467;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 467;
            break;
        }
        break;

      case 467:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 468;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 468;
            break;
        }
        break;

      case 468:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 469;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 469;
            break;
        }
        break;

      case 469:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 470;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 470;
            break;
        }
        break;

      case 470:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 470;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 470;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 470;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 471;
            break;
        }
        break;

      case 471:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 472;
            break;

          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 501;
            break;
        }
        break;

      case 499:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 499;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 499;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 499;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 500;
            break;
        }
        break;

      case 500:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 501;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 525;
            break;
        }
        break;

      case 472:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 473;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 473;
            break;
        }
        break;

      case 473:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 474;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 474;
            break;
        }
        break;

      case 474:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 475;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 475;
            break;
        }
        break;

      case 501:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 502;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 502;
            break;
        }
        break;

      case 502:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 503;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 503;
            break;
        }
        break;

      case 503:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 475;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 475;
            break;
        }
        break;

      case 525:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 526;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 526;
            break;
        }
        break;

      case 526:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 527;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 527;
            break;
        }
        break;

      case 527:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 475;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 475;
            break;
        }
        break;

      case 539:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 540;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 540;
            break;
        }
        break;

      case 540:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 541;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 541;
            break;
        }
        break;

      case 541:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 542;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 542;
            break;
        }
        break;

      case 542:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 561;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 543;
            break;
        }
        break;

      case 543:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 543;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 543;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 543;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 544;
            break;
        }
        break;

      case 544:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 545;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 563;
            break;
        }
        break;

      case 561:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 561;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 561;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 561;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 562;
            break;
        }
        break;

      case 562:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 563;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 564;
            break;
        }
        break;

      case 545:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 546;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 546;
            break;
        }
        break;

      case 546:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 547;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 547;
            break;
        }
        break;

      case 547:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 475;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 475;
            break;
        }
        break;

      case 563:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 565;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 565;
            break;
        }
        break;

      case 565:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 567;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 567;
            break;
        }
        break;

      case 567:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 475;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 475;
            break;
        }
        break;

      case 564:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 566;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 566;
            break;
        }
        break;

      case 566:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 568;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 568;
            break;
        }
        break;

      case 568:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 475;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 475;
            break;
        }
        break;

      case 475:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 475;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 475;
            break;
          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 476;
            break;
        }
        break;

      //----------------------------------------------------

      case 476:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 548;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 477;
            break;
        }
        break;

      case 477:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 478;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 478;
            break;
        }
        break;

      case 478:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 479;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 479;
            break;
        }
        break;

      case 479:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 480;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 480;
            break;
        }
        break;

      case 480:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 504;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 481;
            break;
        }
        break;

      case 481:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 481;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 481;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 481;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 482;
            break;
        }
        break;

      case 482:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 483;
            break;

          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 505;
            break;
        }
        break;

      case 504:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 504;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 504;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 504;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 505;
            break;
        }
        break;

      case 505:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 506;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 528;
            break;
        }
        break;

      case 483:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 484;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 484;
            break;
        }
        break;

      case 484:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 485;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 485;
            break;
        }
        break;

      case 485:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 486;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 486;
            break;
        }
        break;

      case 486:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 487;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 487;
            break;
        }
        break;

      case 506:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 507;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 507;
            break;
        }
        break;

      case 507:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 508;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 508;
            break;
        }
        break;

      case 508:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 509;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 509;
            break;
        }
        break;

      case 509:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 487;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 487;
            break;
        }
        break;

      case 528:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 529;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 529;
            break;
        }
        break;

      case 529:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 530;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 530;
            break;
        }
        break;

      case 530:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 531;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 531;
            break;
        }
        break;

      case 531:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 487;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 487;
            break;
        }
        break;

      case 548:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 549;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 549;
            break;
        }
        break;

      case 549:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 550;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 550;
            break;
        }
        break;

      case 550:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 551;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 551;
            break;
        }
        break;

      case 551:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 569;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 552;
            break;
        }
        break;

      case 552:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 552;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 552;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 552;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 553;
            break;
        }
        break;

      case 553:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 554;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 571;
            break;
        }
        break;

      case 569:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 569;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 569;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 569;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 570;
            break;
        }
        break;

      case 570:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 571;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 575;
            break;
        }
        break;

      case 554:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 555;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 555;
            break;
        }
        break;

      case 555:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 556;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 556;
            break;
        }
        break;

      case 556:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 557;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 557;
            break;
        }
        break;

      case 557:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 487;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 487;
            break;
        }
        break;

      case 571:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 572;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 572;
            break;
        }
        break;

      case 572:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 573;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 573;
            break;
        }
        break;

      case 573:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 574;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 574;
            break;
        }
        break;

      case 574:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 487;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 487;
            break;
        }
        break;

      case 575:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 576;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 576;
            break;
        }
        break;

      case 576:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 577;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 577;
            break;
        }
        break;

      case 577:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 578;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 578;
            break;
        }
        break;

      case 578:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 487;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 487;
            break;
        }
        break;

      case 487:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 487;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 487;
            break;
          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 488;
            break;
        }
        break;

      /*---------------------------------------
            Salida
            ----------------------------------------- */

      case 488:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 543;
            break;
          case "1":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 543;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 543;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 2;
            break;
        }
        break;
    }
  }
}
