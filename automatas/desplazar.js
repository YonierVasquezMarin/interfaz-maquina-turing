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
      case 76:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 77;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 77;
            break;
        }
        break;

      case 77:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "X");
            mt.estadoActual = 112;
            break;
          case "0":
            cinta.moverCabezal(false, "X");
            mt.estadoActual = 78;
            break;
        }
        break;

      case 78:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 79;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 79;
            break;
        }
        break;

      case 79:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "X");
            mt.estadoActual = 101;
            break;
          case "0":
            cinta.moverCabezal(true, "X");
            mt.estadoActual = 80;
            break;
        }
        break;

      case 80:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "X");
            mt.estadoActual = 93;
            break;
          case "0":
            cinta.moverCabezal(true, "X");
            mt.estadoActual = 81;
            break;
        }
        break;

      case 81:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 81;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 81;
            break;
          case "S":
            cinta.moverCabezal(false, "S");
            mt.estadoActual = 81;
            break;
          case "X":
            cinta.moverCabezal(false, "X");
            mt.estadoActual = 81;
            break;
          case "B":
            cinta.moverCabezal(true, "B");
            mt.estadoActual = 82;
            break;
        }
        break;

      case 82:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 83;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 83;
            break;
        }
        break;

      case 83:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 98;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 84;
            break;
        }
        break;

      case 84:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 85;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 85;
            break;
        }
        break;

      case 98:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 85;
            break;
          case "0":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 85;
            break;
        }
        break;

      case 85:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 86;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 86;
            break;
        }
        break;

      case 86:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 99;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 87;
            break;
        }
        break;

      case 87:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 88;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 88;
            break;
        }
        break;

      case 99:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 88;
            break;
          case "0":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 88;
            break;
        }
        break;

      case 88:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 89;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 89;
            break;
        }
        break;

      case 89:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 100;
            break;
          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 90;
            break;
        }
        break;

      case 90:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 91;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 91;
            break;
        }
        break;

      case 100:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 91;
            break;
          case "0":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 91;
            break;
        }
        break;

      case 91:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 92;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 92;
            break;
        }
        break;

      /*---------------------------------------
            Salida
            ----------------------------------------- */

      case 92:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 92;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 92;
            break;
          case "S":
            cinta.moverCabezal(true, "S");
            mt.estadoActual = 92;
            break;

          case "X":
            cinta.moverCabezal(true, "X");
            mt.estadoActual = 2;
            break;
        }
        break;

      case 93:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 93;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 93;
            break;

          case "S":
            cinta.moverCabezal(false, "S");
            mt.estadoActual = 93;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            mt.estadoActual = 93;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            mt.estadoActual = 94;
            break;
        }
        break;

      case 94:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 95;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 95;
            break;
        }
        break;

      case 95:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 96;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 96;
            break;
        }
        break;

      case 96:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 97;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 97;
            break;
        }
        break;

      case 97:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 82;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 82;
            break;
        }
        break;

      case 101:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "X");
            mt.estadoActual = 107;
            break;
          case "0":
            cinta.moverCabezal(true, "X");
            mt.estadoActual = 102;
            break;
        }
        break;

      case 102:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 102;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 102;
            break;

          case "S":
            cinta.moverCabezal(false, "S");
            mt.estadoActual = 102;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            mt.estadoActual = 102;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            mt.estadoActual = 103;
            break;
        }
        break;

      case 103:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 104;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 104;
            break;
        }
        break;

      case 104:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 105;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 105;
            break;
        }
        break;

      case 105:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 106;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 106;
            break;
        }
        break;

      case 106:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 94;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 94;
            break;
        }
        break;

      case 107:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 107;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 107;
            break;

          case "S":
            cinta.moverCabezal(false, "S");
            mt.estadoActual = 107;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            mt.estadoActual = 107;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            mt.estadoActual = 108;
            break;
        }
        break;

      case 108:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 109;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 109;
            break;
        }
        break;

      case 109:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 110;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 110;
            break;
        }
        break;

      case 110:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 111;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 111;
            break;
        }
        break;

      case 111:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 103;
            break;
          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 103;
            break;
        }
        break;

      case 112:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 113;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 113;
            break;
        }
        break;

      case 113:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "X");
            mt.estadoActual = 114;
            break;
          case "1":
            cinta.moverCabezal(true, "X");
            mt.estadoActual = 132;
            break;
        }
        break;

      case 114:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "X");
            mt.estadoActual = 115;
            break;
          case "1":
            cinta.moverCabezal(true, "X");
            mt.estadoActual = 127;
            break;
        }
        break;

      case 115:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 115;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 115;
            break;

          case "S":
            cinta.moverCabezal(false, "S");
            mt.estadoActual = 115;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            mt.estadoActual = 115;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            mt.estadoActual = 116;
            break;
        }
        break;

      case 127:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 127;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 127;
            break;

          case "S":
            cinta.moverCabezal(false, "S");
            mt.estadoActual = 127;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            mt.estadoActual = 127;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            mt.estadoActual = 128;
            break;
        }
        break;

      case 132:
        switch (simboloActual) {
          case "0":
            cinta.moverCabezal(true, "X");
            mt.estadoActual = 133;
            break;
          case "1":
            cinta.moverCabezal(true, "X");
            mt.estadoActual = 138;
            break;
        }
        break;

      case 133:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 133;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 133;
            break;

          case "S":
            cinta.moverCabezal(false, "S");
            mt.estadoActual = 133;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            mt.estadoActual = 133;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            mt.estadoActual = 134;
            break;
        }
        break;

      case 139:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 140;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 140;
            break;
        }
        break;

      case 138:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 138;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 138;
            break;

          case "S":
            cinta.moverCabezal(false, "S");
            mt.estadoActual = 138;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            mt.estadoActual = 138;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            mt.estadoActual = 139;
            break;
        }
        break;

      case 140:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 141;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 141;
            break;
        }
        break;

      case 141:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 142;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 142;
            break;
        }
        break;

      case 142:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 134;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 134;
            break;
        }
        break;

      case 134:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 135;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 135;
            break;
        }
        break;

      case 135:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 136;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 136;
            break;
        }
        break;

      case 136:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 137;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 137;
            break;
        }
        break;

      case 137:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 1128;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 128;
            break;
        }
        break;

      case 128:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 129;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 129;
            break;
        }
        break;

      case 129:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 130;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 130;
            break;
        }
        break;

      case 130:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 131;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 131;
            break;
        }
        break;

      case 131:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 116;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 116;
            break;
        }
        break;

      case 116:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 117;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 117;
            break;
        }
        break;

      case 117:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 118;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 118;
            break;
        }
        break;

      case 118:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 143;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 119;
            break;
        }
        break;

      case 119:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 120;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 120;
            break;
        }
        break;

      case 143:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 120;
            break;

          case "0":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 120;
            break;
        }
        break;

      case 120:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 121;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 121;
            break;
        }
        break;

      case 121:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 144;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 122;
            break;
        }
        break;

      case 122:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 123;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 123;
            break;
        }
        break;

      case 144:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 123;
            break;

          case "0":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 123;
            break;
        }
        break;

      case 123:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 124;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 124;
            break;
        }
        break;

      case 124:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 145;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 125;
            break;
        }
        break;

      case 125:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 126;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            mt.estadoActual = 126;
            break;
        }
        break;

      case 145:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 126;
            break;

          case "0":
            cinta.moverCabezal(false, "1");
            mt.estadoActual = 126;
            break;
        }
        break;

      case 126:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 146;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 146;
            break;
        }
        break;

      case 126:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 146;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 146;
            break;
        }
        break;

      /*---------------------------------------
            Salida
            ----------------------------------------- */

      case 146:
        switch (simboloActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            mt.estadoActual = 146;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            mt.estadoActual = 146;
            break;

          case "S":
            cinta.moverCabezal(true, "S");
            mt.estadoActual = 146;
            break;

          case "X":
            cinta.moverCabezal(true, "X");
            mt.estadoActual = 2;
            break;
        }
        break;
    }
  }
}
