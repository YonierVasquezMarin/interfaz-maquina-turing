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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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

      /*---------------------------------------
            Salida
            ----------------------------------------- */

      case 92:
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        }
        break;

      case 108:
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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
        switch (mt.estadoActual) {
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

      case 113:
        switch (mt.estadoActual) {
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 114;
            break;
          case "1":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 132;
            break;
        }
        break;

      case 114:
        switch (mt.estadoActual) {
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 115;
            break;
          case "1":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 127;
            break;
        }
        break;

      case 115:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 115;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 115;
            break;

          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 115;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 115;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 116;
            break;
        }
        break;

      case 127:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 127;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 127;
            break;

          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 127;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 127;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 128;
            break;
        }
        break;

      case 132:
        switch (mt.estadoActual) {
          case "0":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 133;
            break;
          case "1":
            cinta.moverCabezal(true, "X");
            this.estadoActual = 138;
            break;
        }
        break;

      case 133:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 133;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 133;
            break;

          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 133;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 133;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 134;
            break;
        }
        break;

      case 139:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 140;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 140;
            break;
        }
        break;

      case 138:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 138;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 138;
            break;

          case "S":
            cinta.moverCabezal(false, "S");
            this.estadoActual = 138;
            break;

          case "X":
            cinta.moverCabezal(false, "X");
            this.estadoActual = 138;
            break;

          case "B":
            cinta.moverCabezal(true, "B");
            this.estadoActual = 139;
            break;
        }
        break;

      case 140:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 141;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 141;
            break;
        }
        break;

      case 141:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 142;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 142;
            break;
        }
        break;

      case 142:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 134;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 134;
            break;
        }
        break;

      case 134:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 135;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 135;
            break;
        }
        break;

      case 135:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 136;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 136;
            break;
        }
        break;

      case 136:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 137;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 137;
            break;
        }
        break;

      case 137:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 1128;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 128;
            break;
        }
        break;

      case 128:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 129;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 129;
            break;
        }
        break;

      case 129:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 130;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 130;
            break;
        }
        break;

      case 130:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 131;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 131;
            break;
        }
        break;

      case 131:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 116;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 116;
            break;
        }
        break;

      case 116:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 117;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 117;
            break;
        }
        break;

      case 117:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 118;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 118;
            break;
        }
        break;

      case 118:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 143;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 119;
            break;
        }
        break;

      case 119:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 120;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 120;
            break;
        }
        break;

      case 143:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 120;
            break;

          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 120;
            break;
        }
        break;

      case 120:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 121;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 121;
            break;
        }
        break;

      case 121:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 144;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 122;
            break;
        }
        break;

      case 122:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 123;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 123;
            break;
        }
        break;

      case 144:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 123;
            break;

          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 123;
            break;
        }
        break;

      case 123:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 124;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 124;
            break;
        }
        break;

      case 124:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 145;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 125;
            break;
        }
        break;

      case 125:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 126;
            break;

          case "0":
            cinta.moverCabezal(false, "0");
            this.estadoActual = 126;
            break;
        }
        break;

      case 145:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 126;
            break;

          case "0":
            cinta.moverCabezal(false, "1");
            this.estadoActual = 126;
            break;
        }
        break;

      case 126:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 146;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 146;
            break;
        }
        break;

      case 126:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 146;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 146;
            break;
        }
        break;

      /*---------------------------------------
            Salida
            ----------------------------------------- */

      case 146:
        switch (mt.estadoActual) {
          case "1":
            cinta.moverCabezal(true, "1");
            this.estadoActual = 146;
            break;

          case "0":
            cinta.moverCabezal(true, "0");
            this.estadoActual = 146;
            break;

          case "S":
            cinta.moverCabezal(true, "S");
            this.estadoActual = 146;
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
