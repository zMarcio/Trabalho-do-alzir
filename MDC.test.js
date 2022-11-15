const maximoDivisor = require("../Funcoes/MDC")

test('A divisão de 10 e 5 vai da 5 (5)' ,() =>{
    expect(maximoDivisor("10 5")).toEqual(5);
})
test('A divisão de 15 e 10 vai da 0 (0)' ,() =>{
    expect(maximoDivisor("15 10")).toEqual(5);
})
