/*Escreva uma função arrow que recebe um valor de X e imprima a soma dos 5 pares consecutivos a partir
de X, inclusive o X, se for par. Se o valor de entrada for 4, por exemplo, a saída deve ser 40, que é o resultado
da operação: 4+6+8+10+12, enquanto que se o valor de entrada for 11, por exempo, a saída deve ser 80, que é a
soma de 12+14+16+18+20. Atenção: Você deve usar uma função de callback para realizar o somatório.*/
const x = 11; 

const cinco_pares = valor => {
    let inicial=0;
    if(valor%2==0){
        inicial=valor
    }else{
        inicial=valor+1
    }
    return inicial*5+(20)
}

console.log(cinco_pares(x))