/*Escreva uma função do tipo Arrow que receba como parâmetro um vetor de notas e mostre os conceitos de
cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a
8,9 o conceito B e de 9,0 a 10,0 o conceito A. Atenção: a função deve utilizar alguma função callback.*/

const notas = [4.5,6.7,8,9,10]

const correcao = nota => {
    if (nota<5) {
        return 'D'
    }else if(nota<7) {
        return 'C'
    }else if(nota<9){
        return 'B'
    }else {
        return 'A'
    }
}

const conceitos = notas.map(correcao)

console.log(conceitos)