
const produtoList = document.getElementById('produto-list');

const produtoCarrinhoList = document.getElementById('produto-carrinho-list');

function removeProduct(id){

    let cart = [];
    localStorage.getItem("cart") != null ? cart = JSON.parse(localStorage.getItem("cart")) : [];
    let count = 0;
    cart.forEach(element => {
        if(element.id == id){
            let qnt = 0;
            qnt = parseInt(element.qnt)

            qnt >= 1 ? element.qnt = ( qnt -= 1).toString() : cart = cart.filter(element => element.id != id);
        
            if(qnt == 0){
                cart = cart.filter(element => element.id != id);
            }
        }

        count++;
    });
    
    localStorage.setItem("cart", JSON.stringify(cart));
    findAll();
}

function editProduct(id, qnt){

    let cart = [];
    localStorage.getItem("cart") != null ? cart = JSON.parse(localStorage.getItem("cart")) : [];

    cart.forEach(element => {
        if(element.id == id && qnt > 0){
            element.quantity = qnt;
        }

        count++;
    });
    
    localStorage.setItem("cart", JSON.stringify(cart));
    findAll();
}

function getProductsToCarrinho(){
    let produtos = localStorage.getItem("cart") != null ? JSON.parse(localStorage.getItem("cart")) : [];
    let lista_produtos = '';
    for (let i = 0; i < produtos.length; i++) {
        vlt_total = produtos[i].qnt * produtos[i].vlr;
        lista_produtos += `
        <tr>
            <th>${produtos[i].id}</th>
            <td>${produtos[i].nome}</td>
            <td>R$${(parseFloat(produtos[i].vlr)).toFixed(2)}</td>
            <td>${produtos[i].qnt}</td>
            <td>R$${parseFloat(vlt_total).toFixed(2)}</td>
        </tr>
        `;

        produtoCarrinhoList.innerHTML = lista_produtos
    }
}



function findAll(){
    let produtos = localStorage.getItem("cart") != null ? JSON.parse(localStorage.getItem("cart")) : [];
    let lista_produtos = '';
    for (let i = 0; i < produtos.length; i++) {
        vlt_total = produtos[i].qnt * produtos[i].vlr;
        lista_produtos += `
        <tr>
            <th>${produtos[i].id}</th>
            <td>${produtos[i].nome}</td>
            <td>R$${(parseFloat(produtos[i].vlr)).toFixed(2)}</td>
            <td>${produtos[i].qnt}</td>
            <td>R$${parseFloat(vlt_total).toFixed(2)}</td>
            <td>
                <a onclick="removeProduct(${produtos[i].id});"class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-delete">
                    <i  class="fa fa-trash"></i> Remover
                </a>
            </td>
        </tr>
        `;
        produtoList.innerHTML = lista_produtos;
    }

    getProductsToCarrinho();
}


function getPedido(){
    let strPedido = '';
    let cart = [];
    localStorage.getItem("cart") != null ? cart = JSON.parse(localStorage.getItem("cart")) : [];

    cart.forEach(element => {
        strPedido += `%0a      id: ${element.id} - Nome: ${element.nome} - Quantidade: ${element.qnt} %0a`
    });
    
    return strPedido;

}



//API CEP

const cep = document.querySelector("#cep")

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}




cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{ response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu Erro: '+ e,message))
})
