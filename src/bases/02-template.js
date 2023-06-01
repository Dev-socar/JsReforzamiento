/**
 * TEMPLATE STRINGS
 * Permite agrupar strings con variables de una mejor forma y debe estar entre ${variable}
 * Se puede poner cualquier cosa como operaciones, funciones, variables, etc
 */

const nombre = 'Omar'
const apellido = 'Solis'

const nombreCompleto = `Hola soy ${nombre} ${apellido}`

// console.log(`Resultado: ${1+10}`);

function getSaludo(nombre){
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)