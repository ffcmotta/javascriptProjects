const numeroTiros = 10;
let somatorio = 0;
let i;
let pontos;

for (i = 1; i <= numeroTiros; i++) {
    let tiro = Math.round(Math.random() * 5);

    switch (tiro) {
        case 0:
            pontos = 1500;
            msg = "Acertou em cheio!"
            break;
        case 1:
            pontos = 500;
            msg = "Por um fio!"
            break;
        case 2:
            pontos = 200;
            msg = "Passou perto"
            break;
        case 3:
            pontos = 100;
            msg = "Não foi tão bom"
            break;
        case 4:
            pontos = 20;
            msg = "Esse foi longe"
            break;
        default:
            pontos = 0;
            msg = "Errou feio"
            break;
    }

    somatorio += pontos;
    console.log(`Tentativa: ${i}.Alvo: ${tiro}.Pontos ${pontos}.${msg}`);

}

console.log(`Seu total de pontos foi: ${somatorio}`);