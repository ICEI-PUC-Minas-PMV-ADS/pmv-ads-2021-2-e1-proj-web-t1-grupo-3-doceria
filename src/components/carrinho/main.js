// URL DA API DE DADOS
URL = 'http://localhost:3000/produtos'
//=================================================================================================
// GET - Recupera todos os produtos e adiciona na tabela

const produtoList = document.getElementById('produto-list');

function removeProduct(){
    let id = $('#id-prod').text();

    console.log(id);

    let cart = [];

    localStorage.getItem("cart") != null ? cart = JSON.parse(localStorage.getItem("cart")) : [];

    let count = 0;

    cart.forEach(element => {
        console.log(cart);
        console.log(parseInt(element.qnt) > 0);

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

    $('#modal-delete').modal('hide');
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
                <a onclick="getProduto(${produtos[i].id});" 
                class="btn btn-warning btn-sm" 
                data-toggle="modal" data-target="#produto-modal">
                <i class="fa fa-edit"></i>  Editar
                </a>
                <a onclick="$('#id-prod').text(${produtos[i].id});" class="btn btn-danger btn-sm" 
                data-toggle="modal" data-target="#modal-delete">
                <i class="fa fa-trash"></i> Remover
                </a>
            </td>
        </tr>
        `;
        produtoList.innerHTML = lista_produtos;
    }
}


fetch(URL)
    .then(res => res.json())
    .then(produtos => {
        let lista_produtos = '';
        for (let i = 0; i < produtos.length; i++) {
            vlt_total = produtos[i].qtd * produtos[i].vlr;
            lista_produtos += `
            <tr>
                <th>${produtos[i].id}</th>
                <td>${produtos[i].nome}</td>
                <td>R$${(parseFloat(produtos[i].vlr)).toFixed(2)}</td>
                <td>${produtos[i].qtd}</td>
                <td>R$${parseFloat(vlt_total).toFixed(2)}</td>
                <td>
                    <a onclick="getProduto(${produtos[i].id});" 
                    class="btn btn-warning btn-sm" 
                    data-toggle="modal" data-target="#produto-modal">
                    <i class="fa fa-edit"></i>  Editar
                    </a>
                    <a onclick="$('#id-prod').text(${produtos[i].id});" class="btn btn-danger btn-sm" 
                    data-toggle="modal" data-target="#modal-delete">
                    <i class="fa fa-trash"></i> Remover
                    </a>
                </td>
            </tr>
            `;
            produtoList.innerHTML = lista_produtos;
        }
    });
//=================================================================================================

// DELETE - PROCEDIMENTO PARA EXCLUIR UM PRODUTO
const produtoDelete = document.getElementById('btn-delete');

produtoDelete.addEventListener('click', (e) => {

})
//=================================================================================================

// PROCEDIMENTO PARA RECUPERAR OS DADOS DE UM PRODUTO NA API
function getProduto(id){

    if(id == 0){
        $('#edit-prod-id').text("");
        $( "#produto-id" ).prop( "disabled", false );
        $('#produto-id').val("");
        $('#produto-nome').val("");
        $('#produto-vlr').val("");
        $('#produto-qtd').val("");
    }else{
        $('#edit-prod-id').text(id);
        fetch(`${URL}/${id}`).then(res => res.json())    
        .then(data => {
            $( "#produto-id" ).prop( "disabled", true );
            $('#produto-id').val(data.id);
            $('#produto-nome').val(data.nome);
            $('#produto-vlr').val(data.vlr);
            $('#produto-qtd').val(data.qtd);
        });
    }    
}

//=================================================================================================

// CREATE or UPDATE - PROCEDIMENTO PARA CRIAR OU EDITAR UM PRODUTO

const produtoForm = document.getElementById('produto-form');

produtoForm.addEventListener('submit', (e) => {

    // RECUPERA O ID DO PRODUTO
    let id = parseInt($('#edit-prod-id').text());    

    // RECUPERA OS DADOS DO PRODUTO
    const produto = JSON.stringify({
        id: document.getElementById('produto-id').value,
        nome: document.getElementById('produto-nome').value,
        vlr: document.getElementById('produto-vlr').value,
        qtd: document.getElementById('produto-qtd').value
    })

    if (id >= 0) {
        fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: produto
        })
        .then(res => res.json())
        .then(() => location.reload());  
    }
    else{ 
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: produto
        })
        .then(res => res.json())
        .then(() => location.reload());  
    }      
})
//=================================================================================================
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
