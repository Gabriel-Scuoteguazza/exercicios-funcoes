/*
Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida 
(em Km) e o total de combustível gasto (em litros).

Entrada
O arquivo de entrada contém dois valores: um valor inteiro X representando a distância 
total percorrida (em Km), e um valor real Y representando o total de combustível gasto, 
com um dígito após o ponto decimal.

Saída
Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, 
seguido da mensagem "km/l
*/

function consumo_medio (x, y) {
    return x/y
}

let consumo1 = consumo_medio(500, 35)
let consumo2 = consumo_medio(2254, 124.4)
let consumo3 = consumo_medio(4554, 464.6)

console.log(`\nConsumo 1 = ${consumo1.toFixed(3)}km/l\n Consumo 2 = ${consumo2.toFixed(3)}km/l\n Consumo 3 = ${consumo3.toFixed(3)}km/l\n`)
