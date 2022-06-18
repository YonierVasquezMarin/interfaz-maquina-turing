export class Sumar {
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

      case 752:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 439;
            break;
          case "1":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 753;
            break;
        }
        break;

      case 753:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 753;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 753;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 753;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 753;
            break;
        }
        break;

      case 754:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 755;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 755;
            break;
        }
        break;

      case 755:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 756;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 756;
            break;
        }
        break;

      case 756:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 757;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 757;
            break;
        }
        break;

      case 757:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 758;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 758;
            break;
        }
        break;

      case 758:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 759;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 759;
            break;
        }
        break;

      case 759:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 760;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 760;
            break;
        }
        break;

      case 760:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 761;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 761;
            break;
        }
        break;

      case 761:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 765;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 762;
            break;
        }
        break;

      case 762:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 762;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 762;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 762;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 763;
            break;
        }
        break;

      case 765:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 765;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 765;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 765;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 766;
            break;
        }
        break;

      case 763:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 767;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 764;
            break;
        }
        break;

      case 766:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 767;
            break;
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 764;
            break;
        }
        break;

      case 764:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 768;
            break;
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 768;
            break;
        }
        break;

      case 767:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 768;
            break;
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 768;
            break;
        }
        break;

      case 768:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 768;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 768;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 769;
            break;
        }
        break;

      case 769:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 770;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 770;
            break;
        }
        break;

      case 770:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 771;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 771;
            break;
        }
        break;

      case 771:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 772;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 772;
            break;
        }
        break;

      case 772:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 773;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 773;
            break;
        }
        break;

      case 773:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 774;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 774;
            break;
        }
        break;

      case 774:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 775;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 775;
            break;
        }
        break;

      case 775:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 780;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 776;
            break;
        }
        break;

      case 776:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 776;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 776;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 776;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 777;
            break;
        }
        break;

      case 780:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 780;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 780;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 780;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 781;
            break;
        }
        break;

      case 777:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 782;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 778;
            break;
        }
        break;

      case 781:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 782;
            break;
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 778;
            break;
        }
        break;

      case 778:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 779;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 779;
            break;
        }
        break;

      case 779:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 784;
            break;
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 784;
            break;
        }
        break;

      case 782:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 783;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 783;
            break;
        }
        break;

      case 783:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 784;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 784;
            break;
        }
        break;

      case 784:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 784;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 784;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 785;
            break;
        }
        break;

      case 785:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 786;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 786;
            break;
        }

        break;

      case 786:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 787;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 787;
            break;
        }

        break;

      case 787:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 788;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 788;
            break;
        }

        break;

      case 788:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 789;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 789;
            break;
        }

        break;

      case 789:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 790;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 790;
            break;
        }

        break;

      case 790:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 796;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 791;
            break;
        }
        break;

      case 791:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 791;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 791;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 791;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 792;
            break;
        }
        break;

      case 792:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 798;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 793;
            break;
        }
        break;

      case 796:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 796;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 796;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 796;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 797;
            break;
        }
        break;

      case 797:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 798;
            break;
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 793;
            break;
        }
        break;

      case 793:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 794;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 794;
            break;
        }
        break;

      case 794:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 795;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 795;
            break;
        }
        break;

      case 795:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 801;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 801;
            break;
        }
        break;

      case 798:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 799;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 799;
            break;
        }
        break;

      case 799:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 800;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 800;
            break;
        }
        break;

      case 800:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 801;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 801;
            break;
        }
        break;

      case 801:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 801;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 801;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 802;
            break;
        }
        break;

      case 802:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 803;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 803;
            break;
        }
        break;

      case 803:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 804;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 804;
            break;
        }
        break;

      case 804:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 805;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 805;
            break;
        }
        break;

      case 805:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 806;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 806;
            break;
        }
        break;

      case 806:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 813;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 807;
            break;
        }
        break;

      case 807:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 807;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 807;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 807;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 808;
            break;
        }
        break;

      case 813:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 813;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 813;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 813;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 814;
            break;
        }
        break;

      case 808:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 815;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 809;
            break;
        }
        break;

      case 814:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 815;
            break;
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 809;
            break;
        }
        break;

      case 809:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 810;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 810;
            break;
        }
        break;

      case 815:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 816;
            break;
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 816;
            break;
        }
        break;

      case 810:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 811;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 811;
            break;
        }
        break;

      case 816:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 817;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 817;
            break;
        }
        break;

      case 811:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 812;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 812;
            break;
        }
        break;

      case 817:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 818;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 818;
            break;
        }
        break;

      case 812:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 819;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 819;
            break;
        }
        break;

      case 818:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 819;
            break;
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 819;
            break;
        }
        break;

      case 819:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 819;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 819;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 820;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 820;
            break;
        }
        break;

      /*---------------------------------------
      Salida
      ----------------------------------------- */

      case 820:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 820;
            break;
          case "1":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 820;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 820;
            break;

          case "X":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 2;
            break;
        }
        break;

      case 821:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "x");
            this.estadoActual = 822;
            break;
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 752;
            break;
        }
        break;

      case 822:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 823;
            break;
        }
        break;

      case 823:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 823;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 823;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 823;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 823;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 824;
            break;
        }
        break;

      case 824:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 825;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 825;
            break;
        }
        break;

      case 825:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 826;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 826;
            break;
        }
        break;

      case 826:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 827;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 827;
            break;
        }
        break;

      case 828:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 829;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 829;
            break;
        }
        break;

      case 829:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 830;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 830;
            break;
        }
        break;

      case 830:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 831;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 831;
            break;
        }
        break;

      case 831:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 843;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 832;
            break;
        }
        break;

      case 832:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 833;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 833;
            break;
        }
        break;

      case 833:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 834;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 834;
            break;
        }
        break;

      case 834:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 835;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 835;
            break;
        }
        break;

      case 835:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 839;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 836;
            break;
        }
        break;

      case 839:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 839;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 839;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 839;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 840;
            break;
        }
        break;

      case 840:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 841;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 842;
            break;
        }
        break;

      case 836:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 836;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 836;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 836;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 837;
            break;
        }
        break;

      case 837:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 838;
            break;

          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 841;
            break;
        }
        break;

      case 838:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 854;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 854;
            break;
        }
        break;

      case 841:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 854;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 854;
            break;
        }
        break;

      case 842:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 854;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 854;
            break;
        }
        break;

      case 843:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 844;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 844;
            break;
        }
        break;

      case 844:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 845;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 845;
            break;
        }
        break;

      case 845:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 846;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 846;
            break;
        }
        break;

      case 846:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 850;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 847;
            break;
        }
        break;

      case 847:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 847;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 847;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 847;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 848;
            break;
        }
        break;

      case 848:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 846;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 852;
            break;
        }
        break;

      case 850:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 850;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 850;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 850;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 851;
            break;
        }
        break;

      case 851:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 852;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 853;
            break;
        }
        break;

      case 846:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 854;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 854;
            break;
        }
        break;

      case 852:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 854;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 854;
            break;
        }
        break;

      case 853:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 854;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 854;
            break;
        }
        break;

      case 854:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 854;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 854;
            break;
          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 855;
            break;
        }
        break;

      case 855:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 856;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 856;
            break;
        }
        break;

      case 856:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 857;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 857;
            break;
        }
        break;

      case 857:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 858;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 858;
            break;
        }
        break;

      case 858:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 859;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 859;
            break;
        }
        break;

      case 859:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 860;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 860;
            break;
        }
        break;

      case 860:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 861;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 861;
            break;
        }
        break;

      case 861:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 876;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 862;
            break;
        }
        break;

      case 862:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 863;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 863;
            break;
        }
        break;

      case 863:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 864;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 864;
            break;
        }
        break;

      case 864:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 865;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 865;
            break;
        }
        break;

      case 865:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 870;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 866;
            break;
        }
        break;

      case 866:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 866;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 866;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 866;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 867;
            break;
        }
        break;

      case 867:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 868;
            break;

          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 872;
            break;
        }
        break;

      case 870:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 870;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 870;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 870;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 871;
            break;
        }
        break;

      case 871:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 872;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 874;
            break;
        }
        break;

      case 868:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 868;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 868;
            break;
        }
        break;

      case 869:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 890;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 890;
            break;
        }
        break;

      case 872:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 873;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 873;
            break;
        }
        break;

      case 873:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 890;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 890;
            break;
        }
        break;

      case 874:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 875;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 875;
            break;
        }
        break;

      case 875:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 890;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 890;
            break;
        }
        break;

      case 876:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 877;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 877;
            break;
        }
        break;

      case 877:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 878;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 878;
            break;
        }
        break;

      case 878:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 879;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 879;
            break;
        }
        break;

      case 879:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 884;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 880;
            break;
        }
        break;

      case 880:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 880;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 880;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 880;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 881;
            break;
        }
        break;

      case 881:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 882;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 886;
            break;
        }
        break;

      case 884:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 884;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 884;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 884;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 885;
            break;
        }
        break;

      case 885:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 886;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 888;
            break;
        }
        break;

      case 882:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 883;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 883;
            break;
        }
        break;

      case 883:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 890;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 890;
            break;
        }
        break;

      case 886:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 887;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 887;
            break;
        }
        break;

      case 887:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 890;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 890;
            break;
        }
        break;

      case 888:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 889;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 889;
            break;
        }
        break;

      case 889:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 890;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 890;
            break;
        }
        break;

      case 890:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 890;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 890;
            break;
          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 891;
            break;
        }
        break;

      case 891:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 892;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 892;
            break;
        }
        break;

      case 892:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 893;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 893;
            break;
        }
        break;

      case 893:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 894;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 894;
            break;
        }
        break;

      case 894:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 895;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 895;
            break;
        }
        break;

      case 895:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 896;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 896;
            break;
        }
        break;

      case 896:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 914;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 897;
            break;
        }
        break;

      case 897:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 898;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 898;
            break;
        }
        break;

      case 898:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 899;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 899;
            break;
        }
        break;

      case 899:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 900;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 900;
            break;
        }
        break;

      case 900:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 906;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 901;
            break;
        }
        break;

      case 901:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 901;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 901;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 901;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 902;
            break;
        }
        break;

      case 902:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 903;
            break;

          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 908;
            break;
        }
        break;

      case 906:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 906;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 906;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 906;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 907;
            break;
        }
        break;

      case 907:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 908;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 911;
            break;
        }
        break;

      case 903:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 904;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 904;
            break;
        }
        break;

      case 904:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 905;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 905;
            break;
        }
        break;

      case 905:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 931;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 931;
            break;
        }
        break;

      case 908:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 909;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 909;
            break;
        }
        break;

      case 909:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 910;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 910;
            break;
        }
        break;

      case 910:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 931;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 931;
            break;
        }
        break;

      case 911:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 912;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 912;
            break;
        }
        break;

      case 912:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 913;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 913;
            break;
        }
        break;

      case 913:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 931;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 931;
            break;
        }
        break;

      case 914:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 915;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 915;
            break;
        }
        break;

      case 915:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 916;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 916;
            break;
        }
        break;

      case 916:
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

      case 917:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 923;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 918;
            break;
        }
        break;

      case 918:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 918;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 918;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 918;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 919;
            break;
        }
        break;

      case 919:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 920;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 925;
            break;
        }
        break;

      case 923:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 923;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 923;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 923;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 924;
            break;
        }
        break;

      case 924:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 925;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 928;
            break;
        }
        break;

      case 920:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 921;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 921;
            break;
        }
        break;

      case 921:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 922;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 922;
            break;
        }
        break;

      case 922:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 931;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 931;
            break;
        }
        break;

      case 925:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 926;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 926;
            break;
        }
        break;

      case 926:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 927;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 927;
            break;
        }
        break;

      case 927:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 931;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 931;
            break;
        }
        break;

      case 928:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 929;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 929;
            break;
        }
        break;

      case 929:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 930;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 930;
            break;
        }
        break;

      case 930:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 931;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 931;
            break;
        }
        break;

      case 931:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 931;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 931;
            break;
          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 932;
            break;
        }
        break;

      case 932:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 933;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 933;
            break;
        }
        break;

      case 933:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 934;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 934;
            break;
        }
        break;

      case 934:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 935;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 935;
            break;
        }
        break;

      case 935:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 936;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 936;
            break;
        }
        break;

      case 936:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 957;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 937;
            break;
        }
        break;

      case 937:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 938;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 938;
            break;
        }
        break;

      case 938:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 939;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 939;
            break;
        }
        break;

      case 939:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 940;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 940;
            break;
        }
        break;

      case 940:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 947;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 941;
            break;
        }
        break;

      case 941:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 941;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 941;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 941;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 942;
            break;
        }
        break;

      case 942:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 943;
            break;

          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 949;
            break;
        }
        break;

      case 947:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 947;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 947;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 947;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 948;
            break;
        }
        break;

      case 948:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 949;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 953;
            break;
        }
        break;

      case 943:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 944;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 944;
            break;
        }
        break;

      case 944:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 945;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 945;
            break;
        }
        break;

      case 945:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 946;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 946;
            break;
        }
        break;

      case 946:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 977;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 977;
            break;
        }
        break;

      case 949:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 950;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 950;
            break;
        }
        break;

      case 950:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 951;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 951;
            break;
        }
        break;

      case 951:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 952;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 952;
            break;
        }
        break;

      case 952:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 977;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 977;
            break;
        }
        break;

      case 953:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 954;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 954;
            break;
        }
        break;

      case 954:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 955;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 955;
            break;
        }
        break;

      case 955:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 956;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 956;
            break;
        }
        break;

      case 956:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 977;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 977;
            break;
        }
        break;

      case 957:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 958;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 958;
            break;
        }
        break;

      case 958:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 959;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 959;
            break;
        }
        break;

      case 959:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 960;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 960;
            break;
        }
        break;

      case 960:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 967;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 961;
            break;
        }
        break;

      case 961:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 961;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 961;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 961;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 962;
            break;
        }
        break;

      case 962:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 963;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 969;
            break;
        }
        break;

      case 967:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 967;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 967;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 967;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 968;
            break;
        }
        break;

      case 968:
        switch (simboloActual) {
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 969;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 973;
            break;
        }
        break;

      case 963:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 964;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 964;
            break;
        }
        break;

      case 964:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 965;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 965;
            break;
        }
        break;

      case 965:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 966;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 966;
            break;
        }
        break;

      case 966:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 977;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 977;
            break;
        }
        break;

      case 969:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 970;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 970;
            break;
        }
        break;

      case 970:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 971;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 971;
            break;
        }
        break;

      case 971:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 972;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 972;
            break;
        }
        break;

      case 972:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 977;
            break;

          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 977;
            break;
        }
        break;

      case 973:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 974;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 974;
            break;
        }
        break;

      case 974:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 975;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 975;
            break;
        }
        break;

      case 975:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 976;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 976;
            break;
        }
        break;

      case 976:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 977;
            break;

          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 977;
            break;
        }
        break;

      case 977:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 977;
            break;

          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 977;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 978;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 978;
            break;
        }
        break;

      /*---------------------------------------
        Salida
        ----------------------------------------- */

      case 978:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 978;
            break;
          case "1":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 978;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 978;
            break;

          case "X":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 2;
            break;
        }

        break;

      case 979:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 980;
            break;
        }
        break;

      case 980:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 981;
            break;
          case "1":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 982;
            break;
        }
        break;

      case 982:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 983;
            break;
        }
        break;

      case 983:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 983;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 983;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 983;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 983;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 985;
            break;
        }
        break;

      case 984:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 985;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 985;
            break;
        }
        break;

      case 985:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 986;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 986;
            break;
        }
        break;

      case 987:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 988;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 988;
            break;
        }
        break;

      case 988:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 989;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 989;
            break;
        }
        break;

      case 989:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 990;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 990;
            break;
        }
        break;

      case 990:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 991;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 991;
            break;
        }
        break;

      case 991:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 992;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 992;
            break;
        }
        break;

      case 992:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 993;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 993;
            break;
        }
        break;

      case 993:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 994;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 994;
            break;
        }
        break;

      case 994:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 995;
            break;
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 995;
            break;
        }
        break;

      case 995:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 999;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 996;
            break;
        }
        break;

      case 996:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 996;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 996;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 996;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 997;
            break;
        }
        break;

      case 999:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 999;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 999;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 999;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 1000;
            break;
        }
        break;

      case 997:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 1001;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 998;
            break;
        }
        break;

      case 1000:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1001;
            break;
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 998;
            break;
        }
        break;

      case 998:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1002;
            break;
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1002;
            break;
        }
        break;

      case 1001:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1002;
            break;
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1002;
            break;
        }
        break;

      case 1002:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1002;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1002;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 1003;
            break;
        }
        break;

      case 1003:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1004;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1004;
            break;
        }
        break;

      case 1004:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1005;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1005;
            break;
        }
        break;

      case 1005:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1006;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1006;
            break;
        }
        break;

      case 1006:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1007;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1007;
            break;
        }
        break;

      case 1007:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1008;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1008;
            break;
        }
        break;

      case 1008:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1009;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1009;
            break;
        }
        break;

      case 1009:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1010;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1010;
            break;
        }
        break;

      case 1010:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1011;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1011;
            break;
        }
        break;

      case 1012:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1013;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1013;
            break;
        }
        break;

      case 1013:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1018;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1014;
            break;
        }
        break;

      case 1014:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1014;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1014;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 1014;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 1015;
            break;
        }
        break;

      case 1018:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1018;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1018;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 1018;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 1019;
            break;
        }
        break;

      case 1015:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 1020;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 1016;
            break;
        }
        break;

      case 1019:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1020;
            break;
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1016;
            break;
        }
        break;

      case 1016:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1017;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1017;
            break;
        }
        break;

      case 1017:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1022;
            break;
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1022;
            break;
        }
        break;

      case 1020:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1021;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1021;
            break;
        }
        break;

      case 1021:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1022;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1022;
            break;
        }
        break;

      case 1022:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1022;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1022;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 1023;
            break;
        }
        break;

      case 1023:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1024;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1024;
            break;
        }

        break;

      case 1024:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1025;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1025;
            break;
        }

        break;

      case 1025:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1026;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1026;
            break;
        }

        break;

      case 1026:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1027;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1027;
            break;
        }

        break;

      case 1027:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1028;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1028;
            break;
        }

        break;

      case 1028:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1029;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1029;
            break;
        }

        break;

      case 1029:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1030;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1030;
            break;
        }

        break;

      case 1030:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1031;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1031;
            break;
        }

        break;

      case 1031:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1032;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1032;
            break;
        }
        break;

      case 1032:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1038;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1033;
            break;
        }
        break;

      case 1033:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1033;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1033;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 1033;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 1034;
            break;
        }
        break;

      case 1034:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 1040;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 1035;
            break;
        }
        break;

      case 1038:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1038;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1038;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 1038;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 1039;
            break;
        }
        break;

      case 1039:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1040;
            break;
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1035;
            break;
        }
        break;

      case 1035:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1036;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1036;
            break;
        }
        break;

      case 1040:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1041;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1041;
            break;
        }
        break;

      case 1036:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1037;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1037;
            break;
        }
        break;

      case 1041:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1042;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1042;
            break;
        }
        break;

      case 1037:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1043;
            break;
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1043;
            break;
        }
        break;

      case 1042:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1043;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1043;
            break;
        }
        break;

      case 1043:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1043;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1043;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 1044;
            break;
        }
        break;

      case 1044:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1045;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1045;
            break;
        }

        break;

      case 1045:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1046;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1046;
            break;
        }

        break;

      case 1046:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1047;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1047;
            break;
        }

        break;

      case 1047:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1048;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1048;
            break;
        }

        break;

      case 1048:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1049;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1049;
            break;
        }

        break;

      case 1049:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1050;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1050;
            break;
        }

        break;

      case 1050:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1051;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1051;
            break;
        }

        break;

      case 1051:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1052;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1052;
            break;
        }

        break;

      case 1052:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1059;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1053;
            break;
        }
        break;

      case 1059:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1059;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1059;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 1059;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 1060;
            break;
        }
        break;

      case 1053:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1053;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1053;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 1053;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 1054;
            break;
        }
        break;

      case 1054:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 1061;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 1055;
            break;
        }
        break;

      case 1060:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1061;
            break;
          case "S":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1055;
            break;
        }
        break;

      case 1055:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1056;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1056;
            break;
        }
        break;

      case 1061:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1062;
            break;
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1062;
            break;
        }
        break;

      case 1056:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1057;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1057;
            break;
        }
        break;

      case 1057:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1058;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1058;
            break;
        }
        break;

      case 1062:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1063;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1063;
            break;
        }
        break;

      case 1058:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1065;
            break;
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1065;
            break;
        }
        break;

      case 1063:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1064;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 1064;
            break;
        }
        break;

      case 1064:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1065;
            break;
          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 1065;
            break;
        }
        break;

      case 1065:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1065;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 1065;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 1066;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 1066;
            break;
        }
        break;

      /*---------------------------------------
        Salida
        ----------------------------------------- */

      case 1066:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 1066;
            break;
          case "1":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 1066;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 1066;
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
