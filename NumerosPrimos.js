function NumerosPrimos(numeroAuxiliar) {

    for (i = numeroAuxiliar - 1; i > 1; i--) {
        if (numeroAuxiliar % i == 0) {
            return "Não primo";
        }
    }
    return "Primo";
}
module.exports = NumerosPrimos;