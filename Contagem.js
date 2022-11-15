function contagem(n) {
    var quantidade = 0;

    var numeros = n.split(' ');

    for (i = 0; i < numeros.length; i++) {
        if (!(numeros[i].includes('.') || numeros[i].includes(','))) {
            quantidade++;
        }
    }

    return quantidade;
}
module.exports = contagem;