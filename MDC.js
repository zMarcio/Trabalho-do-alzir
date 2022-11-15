function maximoDivisor(entrada) {
    mdc = 0;

    var num_separado = entrada.split(' ');

    for (var i = 0; i < num_separado.length; i++) {
        num_separado[i] = parseInt(num_separado[i]);
    }

    var a = num_separado[0];
    var b = num_separado[1];

    if (a < b) {
        aux = a;
        a = b;
        b = aux;
    }

    for (i = 1; i < a; i++) {
        if (a % i == 0 && b % i == 0) {
            mdc = i;
        }
    }

    return mdc;
}
module.exports = maximoDivisor;