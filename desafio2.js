let usuario = "Fernanda";
let numero = 10;
let dado1 = Math.round(Math.random() * 5) + 1;
let dado2 = Math.round(Math.random() * 5) + 1;

console.log(`Resultado do dado 1: ${dado1}`);
console.log(`Resultado do dado 2: ${dado2}`);

let resultadoFinal = dado1 + dado2;
console.log(`Soma dos dois dados: ${resultadoFinal}`);

if (resultadoFinal == numero) {
    console.log("Acertou!");
}
else {
    console.log("Continue tentando...");
}