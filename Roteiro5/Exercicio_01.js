const http = require('http')

const dono = {
    "proprietario": "Silvio Santos",
    "endereco": {
    "cep":'hacked, pay to recover',
    "logradouro": 'hacked, pay to recover',
    "complemento": 'hacked, pay to recover',
    "bairro": 'hacked, pay to recover',
    "localidade": 'hacked, pay to recover',
    "uf": '',
    "geo": {
        "lat": "-23.61919020307765",
        "lng": "-46.70793551534256"
    }}
}
const getEndereco = cep => {
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}
let resultado = "Vazio";

function tratarEndereco(endereco){
    /*dono.endereco = {...endereco}*/
    dono.endereco.cep = endereco.cep
    dono.endereco.bairro = endereco.bairro
    dono.endereco.logradouro= endereco.logradouro
    dono.endereco.complemento = endereco.complemento
    dono.endereco.localidade = endereco.localidade
    dono.endereco.uf = endereco.uf
}

getEndereco('05650000')
    .then(saida =>{ tratarEndereco(saida)
        console.log(`${dono.proprietario} 
        - ${dono.endereco.cep} 
        - ${dono.endereco.bairro}
        , ${dono.endereco.localidade} 
        (${dono.endereco.geo.lat},${dono.endereco.geo.lng})`)
        })
