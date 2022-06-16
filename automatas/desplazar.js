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

    switch (this.estadoActual) {
      case 76:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 77;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 77;
            break;
        }
        break;

      case 77:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 112;
            break;
          case "0":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 78;
            break;
        }
        break;

      case 78:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 79;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 79;
            break;
        }
        break;

      case 79:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 101;
            break;
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 80;
            break;
        }
        break;

      case 80:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 93;
            break;
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 81;
            break;
        }
        break;

      case 81:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 81;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 81;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 81;
            break;
          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 81;
            break;
          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 82;
            break;
        }
        break;

      case 82:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 83;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 83;
            break;
        }
        break;

      case 83:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 98;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 84;
            break;
        }
        break;

      case 84:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 85;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 85;
            break;
        }
        break;

      case 98:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 85;
            break;
          case "0":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 85;
            break;
        }
        break;

      case 85:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 86;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 86;
            break;
        }
        break;

      case 86:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 99;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 87;
            break;
        }
        break;

      case 87:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 88;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 88;
            break;
        }
        break;

      case 99:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 88;
            break;
          case "0":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 88;
            break;
        }
        break;

      case 88:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 89;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 89;
            break;
        }
        break;

      case 89:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 100;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 90;
            break;
        }
        break;

      case 90:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 91;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 91;
            break;
        }
        break;

      case 100:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 91;
            break;
          case "0":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 91;
            break;
        }
        break;

      case 91:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 92;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 92;
            break;
        }
        break;

      case 92:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 92;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 92;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 92;
            break;

          case "X":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 2;
            break;
        }
        break;

      case 93:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 93;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 93;
            break;

          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 93;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 93;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 94;
            break;
        }
        break;

      case 94:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 95;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 95;
            break;
        }
        break;

      case 95:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 96;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 96;
            break;
        }
        break;

      case 96:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 97;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 97;
            break;
        }
        break;

      case 97:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 82;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 82;
            break;
        }
        break;

      case 101:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 107;
            break;
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 102;
            break;
        }
        break;

      case 102:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 102;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 102;
            break;

          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 102;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 102;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 103;
            break;
        }
        break;

      case 103:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 104;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 104;
            break;
        }
        break;

      case 104:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 105;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 105;
            break;
        }
        break;

      case 105:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 106;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 106;
            break;
        }
        break;

      case 106:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 94;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 94;
            break;
        }
        break;

      case 107:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 107;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 107;
            break;

          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 107;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 107;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 108;
            break;
            break;

          case 108:
            switch (simboloActual) {
              case "1":
                cinta.moverCabezal(true, "1");
                this.estadoActual = 109;
                break;
              case "0":
                cinta.moverCabezal(true, "0");
                this.estadoActual = 109;
                break;
            }
            break;

          case 109:
            switch (simboloActual) {
              case "1":
                cinta.moverCabezal(true, "1");
                this.estadoActual = 110;
                break;
              case "0":
                cinta.moverCabezal(true, "0");
                this.estadoActual = 110;
                break;
            }
            break;

          case 110:
            switch (simboloActual) {
              case "1":
                cinta.moverCabezal(true, "1");
                this.estadoActual = 111;
                break;
              case "0":
                cinta.moverCabezal(true, "0");
                this.estadoActual = 111;
                break;
            }
            break;

          case 111:
            switch (simboloActual) {
              case "1":
                cinta.moverCabezal(true, "1");
                this.estadoActual = 103;
                break;
              case "0":
                cinta.moverCabezal(true, "0");
                this.estadoActual = 103;
                break;
            }
            break;

          case 112:
            switch (simboloActual) {
              case "1":
                cinta.moverCabezal(false, "1");
                this.estadoActual = 113;
                break;

              case "0":
                cinta.moverCabezal(false, "0");
                this.estadoActual = 113;
                break;
            }
            break;


        }
    }
  }
}
