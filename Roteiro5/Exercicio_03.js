const colocarTodasLetrasEmMaiusculoEm500ms = palavra =>  {
    return new Promise((resolve, reject) => {
        //setTimeout = recebe em milisegundos, por isso está multiplicado por 1000
        setTimeout(() => {
            //importante = resolve só recebe um parâmetro
            if (typeof(palavra)==String){
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
            if (typeof(palavra)==String){
                resolve(palavra.str.split("").reverse().join(""))
            }
            else{    
                reject(`Rejeita ${palavra}`)          
            }
            //reject("Erro no servidor!")
        }, 500)
    })
}

