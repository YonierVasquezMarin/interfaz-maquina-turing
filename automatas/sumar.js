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

      case 579:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 580;
            break;
        }
        break;

      case 580:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 580;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 580;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 580;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 580;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 581;
            break;
        }
        break;

      case 581:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 582;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 582;
            break;
        }
        break;

      case 582:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 583;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 583;
            break;
        }
        break;

      case 583:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 584;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 584;
            break;
        }
        break;

      case 584:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 601;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 585;
            break;
        }
        break;

      case 585:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 586;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 586;
            break;
        }
        break;

      case 586:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 587;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 587;
            break;
        }
        break;

      case 587:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 588;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 588;
            break;
        }
        break;

      case 588:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 589;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 589;
            break;
        }
        break;

      case 589:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 590;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 590;
            break;
        }
        break;

      case 590:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 591;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 591;
            break;
        }
        break;

      case 591:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 592;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 592;
            break;
        }
        break;

      case 592:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 597;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 593;
            break;
        }
        break;

      case 593:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 593;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 593;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 593;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 594;
            break;
        }
        break;

      case 594:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 595;
            break;

          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 599;
            break;
        }
        break;

      case 597:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 597;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 597;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 597;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 598;
            break;
        }
        break;

      case 598:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 599;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 600;
            break;
        }
        break;

      case 595:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 596;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 596;
            break;
        }
        break;

      case 599:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 596;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 596;
            break;
        }
        break;

      case 600:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 596;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 596;
            break;
        }
        break;

      case 601:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 602;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 602;
            break;
        }
        break;

      case 602:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 603;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 603;
            break;
        }
        break;

      case 603:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 604;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 604;
            break;
        }
        break;

      case 604:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 605;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 605;
            break;
        }
        break;

      case 605:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 606;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 606;
            break;
        }
        break;

      case 606:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 607;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 607;
            break;
        }
        break;

      case 607:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 608;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 608;
            break;
        }
        break;

      case 608:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 609;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 609;
            break;
        }
        break;

      case 609:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 609;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 609;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 609;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 610;
            break;
        }
        break;

      case 610:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 613;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 615;
            break;
        }
        break;

      case 611:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 611;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 611;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 611;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 612;
            break;
        }
        break;

      case 612:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 615;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 614;
            break;
        }
        break;

      case 613:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 596;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 596;
            break;
        }
        break;

      case 615:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 596;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 596;
            break;
        }
        break;

      case 614:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 596;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 596;
            break;
        }
        break;

      case 596:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 596;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 596;
            break;
          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 616;
            break;
        }
        break;

      case 616:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 617;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 617;
            break;
        }
        break;

      case 617:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 618;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 618;
            break;
        }
        break;

      case 618:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 619;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 619;
            break;
        }
        break;

      case 619:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 620;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 620;
            break;
        }
        break;

      case 620:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 621;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 621;
            break;
        }
        break;

      case 621:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 622;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 622;
            break;
        }
        break;

      case 622:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 623;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 623;
            break;
        }
        break;

      case 623:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 624;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 624;
            break;
        }
        break;

      case 624:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 625;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 625;
            break;
        }
        break;

      case 625:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 626;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 626;
            break;
        }
        break;

      case 626:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 633;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 627;
            break;
        }
        break;

      case 633:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 633;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 633;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 633;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 634;
            break;
        }
        break;

      case 634:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 629;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 635;
            break;
        }
        break;

      case 627:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 627;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 627;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 627;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 628;
            break;
        }
        break;

      case 628:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 631;
            break;

          case "1":
            cinta.moverCabezal(false, "s");
            this.estadoActual = 629;
            break;
        }
        break;

      case 631:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 632;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 632;
            break;
        }
        break;

      case 632:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 637;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 637;
            break;
        }
        break;

      case 629:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 630;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 630;
            break;
        }
        break;

      case 630:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 637;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 637;
            break;
        }
        break;

      case 635:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 636;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 636;
            break;
        }
        break;

      case 636:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 637;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 637;
            break;
        }
        break;

      case 638:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 639;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 639;
            break;
        }
        break;

      case 639:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 640;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 640;
            break;
        }
        break;

      case 640:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 641;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 641;
            break;
        }
        break;

      case 641:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 642;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 642;
            break;
        }
        break;

      case 642:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 643;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 643;
            break;
        }
        break;

      case 643:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 644;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 644;
            break;
        }
        break;

      case 644:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 645;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 645;
            break;
        }
        break;

      case 645:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 650;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 646;
            break;
        }
        break;

      case 650:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 650;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 650;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 650;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 651;
            break;
        }
        break;

      case 651:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 652;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 654;
            break;
        }
        break;

      case 646:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 646;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 646;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 646;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 647;
            break;
        }
        break;

      case 647:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "s");
            this.estadoActual = 648;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 652;
            break;
        }
        break;

      case 648:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 649;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 649;
            break;
        }
        break;

      case 649:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 637;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 637;
            break;
        }
        break;

      case 652:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 653;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 653;
            break;
        }
        break;

      case 653:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 637;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 637;
            break;
        }
        break;

      case 654:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 655;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 655;
            break;
        }
        break;

      case 655:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 6;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 6;
            break;
        }
        break;

      case 637:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 596;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 596;
            break;
          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 616;
            break;
        }
        break;

      case 656:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 657;
            break;

          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 657;
            break;
        }
        break;

      case 657:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 680;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 658;
            break;
        }
        break;

      case 658:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 659;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 659;
            break;
        }
        break;

      case 659:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 660;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 660;
            break;
        }
        break;

      case 660:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 661;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 661;
            break;
        }
        break;

      case 661:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 662;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 662;
            break;
        }
        break;

      case 662:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 663;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 663;
            break;
        }
        break;

      case 663:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 664;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 664;
            break;
        }
        break;

      case 664:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 665;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 665;
            break;
        }
        break;

      case 665:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 671;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 666;
            break;
        }
        break;

      case 671:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 671;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 671;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 671;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 672;
            break;
        }
        break;

      case 672:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 673;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 676;
            break;
        }
        break;

      case 666:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 666;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 666;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 666;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 667;
            break;
        }
        break;

      case 667:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 668;
            break;

          case "1":
            cinta.moverCabezal(false, "s");
            this.estadoActual = 673;
            break;
        }
        break;

      case 668:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 669;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 669;
            break;
        }
        break;

      case 669:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 670;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 670;
            break;
        }
        break;

      case 670:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 679;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 679;
            break;
        }
        break;

      case 673:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 674;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 674;
            break;
        }
        break;

      case 674:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 675;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 675;
            break;
        }
        break;

      case 675:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 679;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 679;
            break;
        }
        break;

      case 676:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 677;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 677;
            break;
        }
        break;

      case 677:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 678;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 678;
            break;
        }
        break;

      case 678:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 679;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 679;
            break;
        }
        break;

      case 680:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 681;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 681;
            break;
        }
        break;

      case 681:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 682;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 682;
            break;
        }
        break;

      case 682:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 683;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 683;
            break;
        }
        break;

      case 683:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 684;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 684;
            break;
        }
        break;

      case 684:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 685;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 685;
            break;
        }
        break;

      case 685:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 686;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 686;
            break;
        }
        break;

      case 686:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 687;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 687;
            break;
        }
        break;

      case 687:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 693;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 688;
            break;
        }
        break;

      case 693:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 693;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 693;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 693;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 694;
            break;
        }
        break;

      case 694:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 695;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 698;
            break;
        }
        break;

      case 688:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 688;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 688;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 688;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 689;
            break;
        }
        break;

      case 689:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "s");
            this.estadoActual = 690;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 695;
            break;
        }
        break;

      case 690:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 691;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 69;
            break;
        }
        break;

      case 691:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 692;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 692;
            break;
        }
        break;

      case 692:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 679;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 679;
            break;
        }
        break;

      case 695:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 696;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 696;
            break;
        }
        break;

      case 696:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 697;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 697;
            break;
        }
        break;

      case 697:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 679;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 679;
            break;
        }
        break;

      case 698:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 699;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 699;
            break;
        }
        break;

      case 699:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 700;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 700;
            break;
        }
        break;

      case 700:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 679;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 679;
            break;
        }
        break;

      case 679:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 679;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 679;
            break;
          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 701;
            break;
        }
        break;

      case 701:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 726;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 702;
            break;
        }
        break;

      case 702:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 703;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 703;
            break;
        }
        break;

      case 703:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 704;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 704;
            break;
        }
        break;

      case 704:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 705;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 705;
            break;
        }
        break;

      case 705:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 706;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 706;
            break;
        }
        break;

      case 706:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 707;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 707;
            break;
        }
        break;

      case 707:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 708;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 708;
            break;
        }
        break;

      case 708:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 709;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 709;
            break;
        }
        break;

      case 709:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 720;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 710;
            break;
        }
        break;

      case 720:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 720;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 720;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 720;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 721;
            break;
        }
        break;

      case 721:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 716;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 722;
            break;
        }
        break;

      case 710:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 710;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 710;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 710;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 711;
            break;
        }
        break;

      case 711:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 712;
            break;

          case "1":
            cinta.moverCabezal(false, "s");
            this.estadoActual = 716;
            break;
        }
        break;

      case 712:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 713;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 713;
            break;
        }
        break;

      case 713:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 714;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 714;
            break;
        }
        break;

      case 714:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 715;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 715;
            break;
        }
        break;

      case 715:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 750;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 750;
            break;
        }
        break;

      case 716:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 717;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 717;
            break;
        }
        break;

      case 717:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 718;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 718;
            break;
        }
        break;

      case 718:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 719;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 719;
            break;
        }
        break;

      case 719:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 750;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 750;
            break;
        }
        break;

      case 722:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 723;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 723;
            break;
        }
        break;

      case 723:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 724;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 724;
            break;
        }
        break;

      case 724:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 725;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 725;
            break;
        }
        break;

      case 725:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 750;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 750;
            break;
        }
        break;

      case 726:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 727;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 727;
            break;
        }
        break;

      case 727:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 728;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 728;
            break;
        }
        break;

      case 728:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 729;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 729;
            break;
        }
        break;

      case 729:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 730;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 730;
            break;
        }
        break;

      case 730:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 731;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 731;
            break;
        }
        break;

      case 731:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 732;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 733;
            break;
        }
        break;

      case 732:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 733;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 733;
            break;
        }
        break;

      case 733:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 740;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 734;
            break;
        }
        break;

      case 740:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 740;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 740;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 740;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 741;
            break;
        }
        break;

      case 741:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 742;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 746;
            break;
        }
        break;

      case 734:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 734;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 734;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 734;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 735;
            break;
        }
        break;

      case 735:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "s");
            this.estadoActual = 736;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 742;
            break;
        }
        break;

      case 736:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 737;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 737;
            break;
        }
        break;

      case 737:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 738;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 738;
            break;
        }
        break;

      case 738:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 739;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 739;
            break;
        }
        break;

      case 739:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 750;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 750;
            break;
        }
        break;

      case 742:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 743;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 743;
            break;
        }
        break;

      case 743:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 744;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 744;
            break;
        }
        break;

      case 744:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 745;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 745;
            break;
        }
        break;

      case 745:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 750;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 750;
            break;
        }
        break;

      case 746:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 747;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 747;
            break;
        }
        break;

      case 747:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 748;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 748;
            break;
        }
        break;

      case 748:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 749;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 749;
            break;
        }
        break;

      case 749:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 750;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 750;
            break;
        }
        break;

      case 750:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 750;
            break;

          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 750;
            break;
          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 751;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 751;
            break;
        }
        break;

      /*---------------------------------------
            Salida
            ----------------------------------------- */

      case 751:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 751;
            break;

          case "1":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 751;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 751;
            break;
          case "X":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 2;
            break;
        }
        break;
    }
  }
}
