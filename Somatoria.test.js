const somatoria = require("../Funcoes/Somatorio")

test('Irá somar 17 8 6, dando resultado de 31' ,() =>{
    expect(somatoria("17 8 6")).toEqual(31);
})
test('Irá somar 10 15 13, dando resultado de 38' ,() =>{
    expect(somatoria("10 15 13")).toEqual(38);
})