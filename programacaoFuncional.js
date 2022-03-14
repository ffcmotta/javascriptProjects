//Criar um array com valores aleatórios
let meuArray = [];
for (let i = 0; i < 10; i++) {
    let valor = Math.round(Math.random() * 10 * i);
    meuArray.push(valor);
}

//Exibir os dados do Array
for (let i = 0; i < meuArray.length; i++) {
    console.log(meuArray[i]);
}