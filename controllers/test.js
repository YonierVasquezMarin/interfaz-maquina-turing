/* Cargar los programas que se suban */
const entradaArchivo = document.querySelector('#subir-programa')
entradaArchivo.addEventListener('change', abrirArchivo)

/**
 * Recibe el valor del <input file> y carga el archivo si existe.
 * @param {Event} evento el valor del HTMLElement del <input>
 */
function abrirArchivo(evento) {
    let archivo = evento.target.files[0]

    if (archivo) {
        let reader = new FileReader()
        reader.onload = (e) => {
            // enviar el contenido del archivo al compilador
            let contenido = e.target.result
            let nombreArchivo = archivo.name
            
            console.log(`Nombre archivo ${nombreArchivo}`);
            console.log(`Contenido archivo ${contenido}`);

            // resetear la entrada para nuevos archivos
            entradaArchivo.value = ""
        }
        reader.readAsText(archivo)
    } else {
        console.log('No se seleccionó ningún archivo.');
    }
}