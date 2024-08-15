/* Escreva uma função arrow que receba dois parâmetros: início e fim. Essa função deve imprimir todos os
números primos que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim.
Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

const primos = (inicio=0,fim=100) => {
    let lista = []
    if(inicio>fim){
        let aux = inicio;
        inicio = fim;
        fim = aux;
    }
    for (let i = inicio; i < fim+1; i++) {
        if(isPrimo(i)){
            lista.push(i)
        }
    }
    return lista;
}


const isPrimo = num => {
    for (let i = 2; i < num; i++) {
        if (num%i==0) {
            return false;
        }
    }
    return true;
}

console.log(primos(0,100))