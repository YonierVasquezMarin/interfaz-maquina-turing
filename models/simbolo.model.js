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
            <img class="cabezal-element pos_cabezal" src="./resources/img/triangle.png" alt="triangle">
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
        this.simbolo = nuevoSimbolo
        this.#elementoHTML.querySelector('.bit-simbolo').innerText = nuevoSimbolo
    }

    getElementHTML() {
        return this.#elementoHTML
    }

    getSimbol(){
        return this.simbolo
    }
}