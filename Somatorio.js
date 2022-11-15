function somatorio(conjuntoDeNumeros) {

    var soma = 0;
    var numeros = conjuntoDeNumeros.split(' ');

    for (var i = 0; i < numeros.length; i++) {
        numeros[i] = parseInt(numeros[i]);
    }

    for (var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;

}
module.exports = somatorio;