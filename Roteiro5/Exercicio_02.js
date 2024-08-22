const E = 21
const D = 22
function avaliarTCC(e,d){
    saida = ""
    if(e < d-3){
        saida = "Muito bem! O aluno está apto a apresentar até o natal!"
    }else if(e+2 < 24){
        saida = "O trabalho está muito ruim! TCC Apresentado!" 
    }else{
        saida = "O trabalho está muito ruim! Não deu! Só no próximo ano agora."
    }
    return saida;
}
console.log(avaliarTCC(E,D))