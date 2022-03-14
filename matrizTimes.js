//DESEMPATE COM UM JOGO DE FINAL.

//Times para o campeonato
let timesRJ = [
                ["Fluminense",0],
                ["Flamengo",0],
                ["Botafogo",0],
                ["Vasco",0]
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

//Exibe a tabela do campeonato
console.log(timesRJ);

//Exibe o campeão
let campeaoNome = `${timesRJ[totalTimesRJ-1][0]}`;
let campeaoPontos = `${timesRJ[totalTimesRJ-1][1]}`;

for (let contador = 0; contador < timesRJ.length; contador++) {
    console.log(`Time: ${timesRJ[contador][0]} - Pontos: ${timesRJ[contador][1]}`);
}

if (timesRJ[timesRJ.length-1][1] == timesRJ[timesRJ.length-2][1]) {
    console.log(`Empate entre ${timesRJ[timesRJ.length-2][0]} e ${timesRJ[timesRJ.length-1][0]}, ambos com ${timesRJ[timesRJ.length-1][1]} pontos.`);

    let limiteGols = Math.round(Math.random() * 6);
    let golsTimeEmpatado1 = Math.round(Math.random() * limiteGols);
    let golsTimeEmpatado2 = Math.round(Math.random() * limiteGols);

    console.log(`JOGO: ${timesRJ[timesRJ.length-2][0]} ${golsTimeEmpatado1} x ${golsTimeEmpatado2} ${timesRJ[timesRJ.length-1][0]}`);
    //Atribui pontuação para os times
    if (golsTimeEmpatado1 > golsTimeEmpatado2) {
        timesRJ[timesRJ.length-2][1] += 3;
    }
    else if (golsTimeEmpatado2 > golsTimeEmpatado1) {
        timesRJ[timesRJ.length-1][1] += 3;
    }
    else {
        timesRJ[timesRJ.length-2][1] += 1;
        timesRJ[timesRJ.length-1][1] += 1;
    }

    //Ordena por número de pontos
    timesRJ.sort((a,b) => a[1] - b[1]);

    //Exibe a tabela do campeonato
    console.log(timesRJ);

    //Exibe o campeão
    campeaoNome = `${timesRJ[totalTimesRJ-1][0]}`;
    campeaoPontos = `${timesRJ[totalTimesRJ-1][1]}`;
}

console.log(`O campeão foi o ${campeaoNome} com ${campeaoPontos} pontos.`);