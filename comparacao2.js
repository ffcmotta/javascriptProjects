//Atribuição de valores
let sol = true;
let chuva = !sol;
let brinco = false;
let estudo = !brinco;
let tranquilo = false;
let correndo = !tranquilo;

//Exibição dos resultados armazenados
console.log(`Está fazendo sol: ${sol}`);
console.log(`Está chovendo: ${chuva}`);
console.log(`Eu brinco: ${brinco}`);
console.log(`Estou estudando: ${estudo}`);
console.log(`Estou tranquilo: ${tranquilo}`);
console.log(`Estou correndo: ${correndo}`);

//Análise das expressões booleanas
console.log(`Está fazendo sol e estou brincando: ${Boolean(sol && brinco)}`);
console.log(`Vou brincar: ${Boolean(sol || tranquilo)}`);
