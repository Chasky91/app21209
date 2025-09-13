const comentarios = [
    'Mi primer comentario',
    'Mi segundo comentario',
    'Mi tercer comentario',
    'Mi cuarto comentario',
]

function VerComentarios() {

    for(let contador = 0; contador < comentarios.length;contador++ ) {
        console.log(comentarios[contador])
    }

}

function BuscarComentario(indice) {
    for(let contador = 0; contador < comentarios.length;contador++ ) {
        //muestro  cada uno de los comentarios
        if(contador === indice) { //si es igual al  indice  "0" se ejecuta el codigo
                console.log(comentarios[contador])
        }
    }
}


export {comentarios, VerComentarios, BuscarComentario}