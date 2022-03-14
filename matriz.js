/*
let predio = [
                ["Vinícius", "Mario"],
                ["Manuel", "Ferreira"],
                ["Hilda", "Cecília"],
                ["Adélia","Cora"]
                ["Carlos","Clarice"]
            ];
*/

predio = [];
predio.push(["Carlos","Clarice"]);
predio.push(["Adélia","Cora"]);
predio.push(["Hilda","Cecília"]);
predio.push(["Manuel","Ferreira"]);
predio.push(["Vinícius","Mario"]);

console.log(`Morador do 3-1: ${predio[3][1]}`);
console.log(`Morador do 2-0: ${predio[2][0]}`);
console.log(`Morador do 0-1: ${predio[0][1]}`);

for (let andar=0; andar < predio.length; andar++) {
    console.log(`Andar ${andar}|> Coluna 0: ${predio[andar][0]} - Coluna 1: ${predio[andar][1]}`); 
}