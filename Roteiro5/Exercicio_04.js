const colocarTodasLetrasEmMaiusculoEm500ms = palavra =>  {
    return new Promise((resolve, reject) => {
        //setTimeout = recebe em milisegundos, por isso está multiplicado por 1000
        setTimeout(() => {
            //importante = resolve só recebe um parâmetro
            if (typeof(palavra)==typeof("")){
                resolve(palavra.toUpperCase())
            }
            else{    
                reject(`Rejeita ${palavra}`)          
            }
            //reject("Erro no servidor!")
        }, 500)
    })
}

const inverteTodasLetras = palavra => {
    return new Promise((resolve, reject) => {
        //setTimeout = recebe em milisegundos, por isso está multiplicado por 1000
        setTimeout(() => {
            //importante = resolve só recebe um parâmetro
            if (typeof(palavra)==typeof("")){
                resolve(palavra.split("").reverse().join(""))
            }
            else{    
                reject(`Rejeita ${palavra}`)          
            }
            //reject("Erro no servidor!")
        }, 500)
    })
}

let obterAlunos = async (palavra) => {
    const maiuscula = await colocarTodasLetrasEmMaiusculoEm500ms(palavra)
    const inversa = await inverteTodasLetras(maiuscula)
    return inversa
}

obterAlunos("banana")
    .then(saida => console.log(saida))


