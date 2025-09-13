import * as readline from 'node:readline/promises'
import { stdin as entrada, stdout as salida } from 'node:process'
import { comentarios, VerComentarios, BuscarComentario } from './comentarios.js'

const rl = readline.createInterface({
     input: entrada, 
     output: salida
 })

//VerComentarios()

const respuesta = await rl.question(
    'Buscar comentario: \n '
)
BuscarComentario(Number(respuesta))


 rl.close()