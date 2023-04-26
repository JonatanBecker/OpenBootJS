let nombre = "Jonatan";
let apellido = "Becker";
let estudiante = nombre + " ".concat(apellido);
console.log(estudiante);


let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let estudiante_length = estudiante.length;
console.log(estudiante_length);

let firstLetter_nombre = nombre.charAt(0);
console.log(firstLetter_nombre);

let firstLetter_apellido = apellido.charAt(0);
console.log(firstLetter_apellido);

let estudianteSinEspacios = estudiante.replace(" ", "");
console.log(estudianteSinEspacios);

let verificarNombre = estudiante.includes("Jonatan");
console.log(verificarNombre);

