let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
const adicionaAoCarrinho = (nomeProduto, precoProduto) => {
    const produto = { nome: nomeProduto, preco: precoProduto };
    carrinho.push(produto);
    atualizaContagemCarrinho();
    salvarCarrinho();
    alert(`O produto ${nomeProduto} foi adicionado ao seu carrinho.`);
}

const atualizaContagemCarrinho = () => {
    document.getElementById('carrinho-contagem').textContent = carrinho.length;
}

const salvarCarrinho = () => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

const carregaCarrinho = () =>{
    carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    atualizaContagemCarrinho();
    mostrarItensCarrinho();
}

const mostrarItensCarrinho = () => {
    const containerCarrinho = document.getElementById('carrinho-container');
    const totalCarrinho = document.getElementById('carrinho-total');
    containerCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach((produto, indice) => {
        const itemCarrinho = document.createElement('div');
        itemCarrinho.classList.add('carrinho__item');
        
        itemCarrinho.innerHTML = `
            <img src="./img/${produto.nome}.jpg" alt="${produto.nome}">
            <div class="carrinho__item--detalhes">
                <h3>${produto.nome}</h3>
                <p>${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
            <button onclick="removerItemCarrinho(${indice})">Remover</button>
        `;

        containerCarrinho.appendChild(itemCarrinho);
        total += produto.preco;
    });

    totalCarrinho.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const removerItemCarrinho = indice => {
    carrinho.splice(indice, 1);
    atualizaContagemCarrinho();
    salvarCarrinho();
    mostrarItensCarrinho();
}

const limpaCarrinho =()=> {
    carrinho = [];
    atualizaContagemCarrinho();
    salvarCarrinho();
    mostrarItensCarrinho();
}





//RESPOSTAS

//Etapa 02
//URL para buscar: https://viacep.com.br/ws/58400240/json/
//Método http para usar: GET
//Resposta do Reject: reject('Erro ao consultar o CEP'))
const buscarEndereco = (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => {
                if(!res.ok){
                    reject('Erro ao consultar o CEP');
                }
                return res.json();
                
            })
            .then(data => {
                if(data.erro){
                    reject('CEP não encontrado!')
                }else{
                    console.log(data)
                    resolve(data)
                }
            })
            .catch(()=>reject("Houve problema de conexão"))
    });
}

const consultaCep = () => {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length === 8) {
        buscarEndereco(cep)
            .then(data => {
                let log = document.getElementById('logradouro');
                log.value = data.logradouro;
                let cid = document.getElementById('cidade');
                cid.value = data.localidade;
                const est = document.getElementById('estado');
                est.value = data.estado;

            })
            .catch(error => alert(error+"TESTE"));
    } else {
        alert('CEP inválido!');
    }
};




//Etapa 03
//URL para buscar: http://demo2582395.mockable.io/enviar
//Método http para usar: POST
//Resposta do Reject: reject('Erro ao enviar o formulário'))
const enviarDados = (dadosFormulario) => {
    const url = 'http://demo2582395.mockable.io/enviar'
    return new Promise((resolve, reject) => {
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(dadosFormulario)
        })
            .then(res=>{
                if(!res.ok){
                    reject("Erro de Envio de formulario")
                }else{
                    return res.json()
                }
            })
            .then(data=>{
                resolve(data);
            })
    });

}

//Não mexer neste método
const submeterDados = event =>{

    const dadosFormulario = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        motivo: document.getElementById('motivo').value,
        cep: document.getElementById('cep').value,
        endereco: document.getElementById('logradouro').value,
        endereco: document.getElementById('complemento').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value
    };

    enviarDados(dadosFormulario)
        .then(data => {
            alert(data.msg); //Mensagem correta!
        })
        .catch(error => alert(error));
};




//Etapa 04
//URL para buscar: http://demo2582395.mockable.io/produtos
//Método http para usar: GET
//Resposta do Reject: reject('Erro ao consultar os Produtos'))
const consultarDadosConcorrencia = () => {
    const url = 'http://demo2582395.mockable.io/produtos'
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                reject('Erro consultar concorrencia');
            }
            return res.json();
            
        })
        .then(data => {
            resolve(data)
        })
        .catch(()=>reject("Houve problema de conexão"))
    })
}

const alterarValoresTabela = (opcao) => {
    consultarDadosConcorrencia().then(data => {
        modificaValores(data[opcao])
    }).catch(error => alert(error));
}

//Não mexer neste método
const modificaValores = ([produto1, produto2, produto3, produto4, produto5, produto6]) => {

    const tabela = document.getElementById("tabelaProdutos").getElementsByTagName('tbody')[0];
    tabela.rows[0].cells[1].innerText = produto1.preco;
    tabela.rows[0].cells[2].innerText = produto1.estoque;
    tabela.rows[1].cells[1].innerText = produto2.preco;
    tabela.rows[1].cells[2].innerText = produto2.estoque;
    tabela.rows[2].cells[1].innerText = produto3.preco;
    tabela.rows[2].cells[2].innerText = produto3.estoque;
    tabela.rows[3].cells[1].innerText = produto4.preco;
    tabela.rows[3].cells[2].innerText = produto4.estoque;
    tabela.rows[4].cells[1].innerText = produto5.preco;
    tabela.rows[4].cells[2].innerText = produto5.estoque;
    tabela.rows[5].cells[1].innerText = produto6.preco;
    tabela.rows[5].cells[2].innerText = produto6.estoque;

}

window.onload = carregaCarrinho;

