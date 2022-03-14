let nome = "Fernanda Motta";
let produto = "Notebook Gamer";
let preco = 6200;
let desconto = 10;

console.log(`Oi, ${nome}.`);
console.log(`Você comprou: ${produto}.`);
console.log(`Custou: R$ ${preco}.`);
console.log(`Desconto: ${desconto}%`);

let descontoCalculado;
descontoCalculado = (preco * desconto)/100;

console.log(`Desconto calculado: ${descontoCalculado}%`)

let precoFinal;
precoFinal = preco - descontoCalculado;

console.log(`Preço final: R$ ${precoFinal}.`);