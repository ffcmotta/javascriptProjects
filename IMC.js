//Definição dos dados
let nome = "Fernanda Motta";
let peso = 60; //Em quilos
let altura = 1.65; //Em metros

//Fórmula
let imc = peso / (altura * altura);

//Apresentação do resultado
console.log(`${nome}, seu IMC é de ${imc.toFixed(1)}`);