/*Escreva duas funções arrow, uma para progressão aritmética e outra para progressão geométrica. Estas
funções receberam como parâmetros um objeto (criado por você, lembre-se que deves escolher bons nomes)
contendo os seguinte parâmetros: id: Number (identificador da função); nome: String (nome da função); n:
Number (número de termo), a1:Number (o primeiro termo) e r :Number (a razão). Esse objeto vai ser passado
com parâmetro para as duas funções, e com o uso do operador de desestruturação, só devem ser passados como
parâmetros os atributos n, a1 e r. As funções devem imprimir os n termos, bem como a soma dos elementos.*/

const entrada = new Object();
entrada.r = 2
entrada.a1 = 5
entrada.n = 10

let soma_pa = 0
let lista_pa = []
const prog_a = entrada => {
    let n = entrada.n;
    let a1 = entrada.a1;
    let r = entrada.r;
    for (let index = 0; index < n-1; index++) {
        const an = a1+(index)*r;
        soma_pa += an;
        lista_pa.push(an);
    }
}
prog_a(entrada)
console.log(soma_pa)
console.log(lista_pa)