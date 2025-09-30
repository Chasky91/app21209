import * as readline from 'node:readline/promises'
import { stdin as entrada, stdout as salida } from 'node:process'
import { eliminarComentario, VerComentarios, BuscarComentario } from './comentarios.js'

const rl = readline.createInterface({
     input: entrada, 
     output: salida
 })

//VerComentarios()

const respuesta = await rl.question(
    'Buscar comentario: \n '
)

//estructura  que maneja   la gestion  o llamada de funciones
if()

BuscarComentario(Number(respuesta))
VerComentarios()

eliminarComentario()



rl.close()