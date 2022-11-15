const fibonnaci = require("../Funcoes/Fibonnaci")

test('Os 5 primeiros numeros devem ser (0,1,1,2,3)' ,() =>{
    expect(fibonnaci(5)).toMatchObject([1, 2 ,3 ,5 ,8, 13]);
})

test('Os 2 primeiros numeros devem ser (1,2,3)' ,() =>{
    expect(fibonnaci(2)).toMatchObject([1,2,3]);
})