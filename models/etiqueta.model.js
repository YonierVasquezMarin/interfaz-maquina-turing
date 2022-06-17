export class Etiqueta {

    #margenIzquierdo = 32
    #anchoBit = 57.59
    #elementoHTML = document.querySelector('#tags')

    constructor() {
        this.#elementoHTML.style.visibility = 'visible'
    }

    moverEtiqueta() {
        // ampliar el margen izquierdo
        this.#margenIzquierdo += this.#anchoBit
        this.#elementoHTML.style.marginLeft = `${this.#margenIzquierdo}px`
    }
}