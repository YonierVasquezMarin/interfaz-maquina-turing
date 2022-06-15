export class Simbolo {
    simbolo
    #elementoHTML

    constructor(simbolo) {
        this.simbolo = simbolo
        this.iniciarElemento()
    }

    iniciarElemento() {
        let bitContainer = document.createElement('div')
        bitContainer.classList.add('bit-container')
        bitContainer.innerHTML = `
        <div class="bit-simbolo">${this.simbolo}</div>
        <div class="cabezal-container">
            <img class="cabezal-element" src="./resources/img/triangle.png" alt="triangle" class="pos_cabezal">
        </div>`
        this.#elementoHTML = bitContainer
    }

    desactivarCabezal() {
        this.#elementoHTML.querySelector('.cabezal-element').classList.toggle('pos_cabezal')
    }

    activarCabezal() {
        this.#elementoHTML.querySelector('.cabezal-element').classList.toggle('pos_cabezal')
    }

    cambiarSimbolo(nuevoSimbolo) {

    }

    getElementHTML() {
        return this.#elementoHTML
    }
}