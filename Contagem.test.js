const contagem = require("../Funcoes/Contagem")

test('Irá contar quantos números foi dado, resultando em 6' ,() =>{
    expect(contagem("2 2 5 7 8 9")).toEqual(6);
})
test('Irá contar quantos números foi dado, resultando em 5' ,() =>{
    expect(contagem("1 5 7 8 9")).toEqual(5);
})
