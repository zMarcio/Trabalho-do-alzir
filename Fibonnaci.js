function fibonacci(termo) {
    let resultado = []
    var numPenultimo=0, numUltimo=1;
    var numero;   
    for(var count=0 ; count<=termo ; count++){
        numero = numUltimo + numPenultimo;
        numPenultimo = numUltimo;
        numUltimo = numero;
        resultado.push(numero)
    }
    return resultado;
}
module.exports = fibonacci;