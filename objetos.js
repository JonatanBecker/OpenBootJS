let person = {
    nombre: "Jonatan",
    apellido: "Becker",
    edad: 38,
    altura: 1.77,
    eresDesarrollador: false
}

let edad = person.edad;
console.log(edad);

let lista = [
    {person},
    {
    nombre: "Erik",
    apellido: "Murgio",
    edad: 26,
    altura: 1.84,
    eresDesarrollador: false
    },
    {
        nombre: "Andres",
        apellido: "Rizzo",
        edad: 34,
        altura: 1.76,
        eresDesarrollador: false
    }
];

lista.sort((a, b) => b.edad - a.edad);
console.log(lista);