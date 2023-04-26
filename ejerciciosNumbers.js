let altura_cm = 177;
let altura_mts = 1.77;
let peso_kg = 80.7;

let altura_redondeo = altura_mts.toFixed();
console.log(altura_redondeo);

let peso_redondeo = Math.floor(peso_kg);
console.log(peso_redondeo);

let maxNumber = (Number.MAX_VALUE + 1) === Number.MAX_VALUE;
console.log(maxNumber);