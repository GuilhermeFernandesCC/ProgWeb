/*Dado um array [1, 60, 232, 7, 25, 76, 29,74, 92], use a função (callback) filter e uma função arrow para
criar um array de valores maiores que 60 e menores que 300 (armazenar em: $lista). Depois utilize a função
(callback) foreach para somar todos os valores filtrados neste array (armazenar em: $somatorio). Usando
template strings, retorne a seguinte mensagem depois da execução do código: "A lista dos valores maiores que
60 é: $lista. A soma dos elementos da lista é: $somatorio". */

const input = [1, 60, 232, 7, 25, 76, 29,74, 92];
const filter60_300 = num => num > 60 && num <  300;

let somatorio = 0

let lista = input.filter(filter60_300);

lista.forEach(value => somatorio+=value);

console.log(`A lista dos valores maiores que 60 é: ${lista}. A soma dos elementos da lista é: ${somatorio}`);
