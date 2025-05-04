/*
Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem, 
ao utilizar um automóvel que faz 12 KM/L. Para isso, ele gostaria que você o auxiliasse através 
de um simples programa. Para efetuar o cálculo, deve-se fornecer o tempo gasto na viagem (em horas) 
e a velocidade média durante a mesma (em km/h). Assim, pode-se obter distância percorrida e, em seguida, 
calcular quantos litros seriam necessários. Mostre o valor com 3 casas decimais após o ponto.

Entrada
O arquivo de entrada contém dois inteiros. O primeiro é o tempo gasto na viagem (em horas) 
e o segundo é a velocidade média durante a mesma (em km/h).

Saída
Imprima a quantidade de litros necessária para realizar a viagem, com três dígitos após o ponto decimal
*/

function litros (horas, velocidade_media) {
    return (horas * velocidade_media) / 12
}

let viagem1 = litros(10, 80)
let viagem2 = litros(2, 92)
let viagem3 = litros(22, 67)


console.log(`VIAGEM 1 = ${viagem1.toFixed(3)}`)
console.log(`VIAGEM 2 = ${viagem2.toFixed(3)}`)
console.log(`VIAGEM 3 = ${viagem3.toFixed(3)}`)