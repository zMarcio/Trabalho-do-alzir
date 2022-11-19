const numerosPrimos = require("../Funcoes/NumerosPrimos")

test('Irá dizer se o número 7 é primo ou não' ,() =>{
    expect(numerosPrimos("7")).toEqual("Primo");
})
test('Irá dizer se o número 6 é primo ou não' ,() =>{
    expect(numerosPrimos("6")).toEqual("Não primo");
})