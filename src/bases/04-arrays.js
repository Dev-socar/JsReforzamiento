/**
 * ARRAYS
 * Pasa lo mismo que con los object literal ya que se pasa por referencia
 * Para romper la referencia usamos el spread en forma [...arrayName]
 * con la funcion map() podemos romper la referencia
 */


const arreglo = [1,2,3,4]

//insertar valor al final
arreglo.push(5)

const arreglo2 = [...arreglo]//Rompemos la referencia
arreglo2.push(6)

const arreglo3 = arreglo2.map((n)=>{
    return n*2
})
arreglo3.push(21)
console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)