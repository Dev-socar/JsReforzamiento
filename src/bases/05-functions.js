/**
 * FUNCIONES
 */

// function saludar(xyz){
//     return `Hola ${xyz}`
// }

const saludar = (nombre = "Peter") => `Hola ${nombre}`;

const nombre = "Tony";

// console.log(saludar(nombre));

const getUser = () => ({
  uid: "ABC123",
  username: "Tony001",
});

console.log(getUser());

const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
  },
];

// const existe = heroes.some((heroe)=> heroe.id === 3);
const { name } = heroes.find((heroe) => heroe.id === 2);

console.log(name);
