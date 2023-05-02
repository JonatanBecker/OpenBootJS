function ejercicio() {
    return (true)
}
let retEjercicio = ejercicio()
console.log(retEjercicio)

async function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hola soy una promesa");
            resolve();
        }, 5000);
    })
}

asincrona();

function* generaIdPares() {
    let id = 0;
    while(true) {
        id = id + 2;
        if (id === 20) {
            return id
        }
        yield id
    }
};
const gen = generaIdPares();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


