
const produtoList = document.getElementById('produto-list');

const produtoCarrinhoList = document.getElementById('produto-carrinho-list');
const totalPedidoValue = document.getElementById('total-pedido-value');

let editProductId = 0
let totalPedido = 0;

function removeProduct(id) {

    let cart = [];
    localStorage.getItem("cart") != null ? cart = JSON.parse(localStorage.getItem("cart")) : [];
    let count = 0;
    cart.forEach(element => {
        if (element.id == id) {
            let qnt = 0;
            qnt = parseInt(element.qnt)

            qnt >= 1 ? element.qnt = (qnt -= 1).toString() : cart = cart.filter(element => element.id != id);

            if (qnt == 0) {
                cart = cart.filter(element => element.id != id);
            }
        }

        count++;
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function editProduct(id, qnt) {

    let cart = [];
    localStorage.getItem("cart") != null ? cart = JSON.parse(localStorage.getItem("cart")) : [];

    cart.forEach(element => {
        if (element.id == id && qnt > 0) {
            element.quantity = qnt;
        }

        count++;
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function getProductsToCarrinho() {
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
            <td>${produtos[i].type}</td>
        </tr>
        `;

        produtoCarrinhoList.innerHTML = lista_produtos
    }

    showValorFinalPedido(0);
}

function incrementTaxValue(){
    let taxValue = 0;
    var localidade = document.getElementById("taxaentrega").value;

    switch(localidade){
        case "R$ 5,00 - Bairro: Dumaville" :
            taxValue = 5
            break;
        case "R$ 3,00 - Bairro: Fernão Dias":
            taxValue = 3
            break;
        case "R$ 1,50 - Bairros: Castelo Branco, Fernão Dias":
            taxValue = 1.5
            break;
    }


    showValorFinalPedido(taxValue)

}



function showValorFinalPedido(taxValue){
    let produtos = localStorage.getItem("cart") != null ? JSON.parse(localStorage.getItem("cart")) : [];

    let valorTotalPedido = totalValue(produtos) + taxValue

    let valorProdutos = `
        <p> R$${valorTotalPedido.toFixed(2)}</p>
    `
    totalPedidoValue.innerHTML = valorProdutos;
}

function minProduct(id) {
    let cart = [];
    localStorage.getItem("cart") != null ? cart = JSON.parse(localStorage.getItem("cart")) : [];
    cart.forEach(element => {
        if (element.id == id) {
            let qnt = 0;
            qnt = parseInt(element.qnt)

            qnt >= 1 ? element.qnt = (qnt -= 1).toString() : cart = cart.filter(element => element.id != id);

            if (qnt == 0) {
                cart = cart.filter(element => element.id != id);
            }
        }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function maxProduct(id) {
    let cart = [];
    localStorage.getItem("cart") != null ? cart = JSON.parse(localStorage.getItem("cart")) : [];
    cart.forEach(element => {
        if (element.id == id) {
            let qnt = 0;
            qnt = parseInt(element.qnt)
            element.qnt = (qnt += 1).toString()
        }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function findAll() {
    let produtos = localStorage.getItem("cart") != null ? JSON.parse(localStorage.getItem("cart")) : [];
    let lista_produtos = '';
    for (let i = 0; i < produtos.length; i++) {
        vlt_total = produtos[i].qnt * produtos[i].vlr;
        lista_produtos += `
        <tr>
            <th>${produtos[i].id}</th>
            <td style="white-space: nowrap !important;">${produtos[i].nome}</td>
            <td>R$${(parseFloat(produtos[i].vlr)).toFixed(2)}</td>
            <td> 
                <i onclick="minProduct(${produtos[i].id})"; class="fa fa-minus" ></i>
                    ${produtos[i].qnt} 
                 <i onclick="maxProduct(${produtos[i].id})" class="fa fa-plus"></i>
                </td>
            <td style="padding-left: 20px;"> R$${parseFloat(vlt_total).toFixed(2)}</td>
            <td>
                <a onclick="removeProduct(${produtos[i].id});"class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-delete">
                    <i  class="fa fa-trash"></i> Remover
                </a>
            </td>
            <td style="white-space: nowrap !important; padding-right: 20px;" >${produtos[i].type}</td>

        </tr>
        `;
        produtoList.innerHTML = lista_produtos;
    }

    getProductsToCarrinho();
}

function editProduct(id) {
    console.log(id)
    editProductId = id
}

function totalValue(cart){
    let totalPrice = 0;

    cart.forEach(element => {
        totalPrice += (element.qnt * element.vlr)
    });

    return totalPrice;
}


function getPedido() {
    let strPedido = '%0a';
    let cart = [];
    localStorage.getItem("cart") != null ? cart = JSON.parse(localStorage.getItem("cart")) : [];

    cart.forEach(element => {
        strPedido += `      id: ${element.id} - Nome: ${element.nome} - Quantidade: ${element.qnt} - Sabor do Produto: ${element.type} - Preço: R$ ${Number(element.vlr).toFixed(2)} %0a`
    });

    strPedido += `VALOR TOTAL DO PEDIDO: R$ ${Number(totalValue(cart)).toFixed(2)}`
    return strPedido;

}

function resetCart(){
    localStorage.setItem("cart", JSON.stringify([]));
    toastr.success(`Carrinho limpo com sucesso!`);
    location.reload();
}


function btn_save() {
    var resposta = confirm("Deseja salvar o registro?");
  
    if (resposta === true) {
  
  
    }
  
  }


//API CEP

const cep = document.querySelector("#cep")

const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo]
        }
    }
}




cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            response.json()
                .then(data => showData(data))
        })
        .catch(e => console.log('Deu Erro: ' + e, message))
})
