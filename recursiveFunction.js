decrementa(3);

function decrementa(numero) {
    console.log(`Número: ${numero}`);
    numero--;

    if (numero < 0) {
        return;
    }
    else {
        decrementa(numero);
    }
}