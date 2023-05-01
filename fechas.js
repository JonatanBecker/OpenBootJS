const fecha = new Date();

const fechaNacimiento = new Date(1985, 2, 6);

let comparar = fecha > fechaNacimiento;
console.log(comparar);

let diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

let mesNacimiento = fechaNacimiento.getMonth();
console.log(mesNacimiento);

let anyoNacimiento = fechaNacimiento.getFullYear();
console.log(anyoNacimiento);