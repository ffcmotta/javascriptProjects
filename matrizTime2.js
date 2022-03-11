//DESEMPATE COM UM JOGO DE FINAL.

//Times para o campeonato 
//[Time, Pontos, Saldo de Gols]
let timesRJ = [
    ["Fluminense",0,0],
    ["Flamengo",0,0],
    ["Botafogo",0,0],
    ["Vasco",0,0]
];

//Campeonato Carioca
let totalTimesRJ = timesRJ.length;
console.log(timesRJ);

for (let anfitriao = 0; anfitriao < totalTimesRJ; anfitriao++) {
    for (let convidado = 0; convidado < totalTimesRJ; convidado++) {

        //Realiza jogo se anfitrião e convidado forem diferentes
        if (anfitriao !== convidado) {
            let limiteGols = Math.round(Math.random() * 6);
            let golsAnfitriao = Math.round(Math.random() * limiteGols);
            let golsConvidado = Math.round(Math.random() * limiteGols);
            let time1 = `${timesRJ[anfitriao][0]}`;
            let time2 = `${timesRJ[convidado][0]}`;

            timesRJ[anfitriao][2] += golsAnfitriao;
            timesRJ[convidado][2] += golsConvidado;

            console.log(`JOGO: ${time1} ${golsAnfitriao} x ${golsConvidado} ${time2}`);
            //Atribui pontuação para os times
            if (golsAnfitriao > golsConvidado) {
                timesRJ[anfitriao][1] += 3;
            }
            else if (golsConvidado > golsAnfitriao) {
                timesRJ[convidado][1] += 3;
            }
            else {
                timesRJ[anfitriao][1] += 1;
                timesRJ[convidado][1] += 1;
            }
        }        
    }
}

//Ordena por número de pontos
timesRJ.sort((a,b) => a[1] - b[1]);
timesRJ.reverse();

//Exibe a tabela do campeonato
console.log(timesRJ);

//Exibe o campeão
let campeaoNome = `${timesRJ[0][0]}`;
let campeaoPontos = `${timesRJ[0][1]}`;

console.log(`TABELA DA RODADA:`);
for (let contador = 0; contador < timesRJ.length; contador++) {
    console.log(`${contador+1}º Lugar: ${timesRJ[contador][0]} - Pontos: ${timesRJ[contador][1]} - Saldo de Gols: ${timesRJ[contador][2]}`);
}

if (timesRJ[0][1] == timesRJ[1][1]) {
    console.log(`Empate entre ${timesRJ[0][0]} e ${timesRJ[1][0]}, ambos com ${timesRJ[0][1]} pontos. O desempate será pelo SALDO DE GOLS.`);

    if (timesRJ[0][2] > timesRJ[1][2]) {
        console.log(`O campeão foi o ${timesRJ[0][0]} com ${timesRJ[0][2]} gols.`); 
    }
    else if (timesRJ[1][2] > timesRJ[0][2]) {
        console.log(`O campeão foi o ${timesRJ[1][0]} com ${timesRJ[1][2]} gols.`); 
    }
    else {
        console.log("Novo empate");
    }    
}
else {    
    console.log(`O campeão foi o ${campeaoNome} com ${campeaoPontos} pontos.`);
}
