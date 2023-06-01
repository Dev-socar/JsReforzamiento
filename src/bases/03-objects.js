/**
 * OBJECT LITERAL (Diccionarios, mapas,etc )
 * Los objetos en js son pasados por referencia, no por valor, es decir que si se cambia uno, el original se ve afectado
 * Para evitar eso usamos el operador spread {... objeto}
 */

const persona = {
    nombre : 'Tony',
    apellido : 'Stark',
    edad : 45,
    direccion : {
        ciudad: 'New York',
        zip : 23121,
        lat : 12.3123,
        lng : 14.1231
    }
}

const persona2 = { ...persona } //Le hacemos spread
persona2.nombre = 'Peter'
console.log(persona);
console.log(persona2);