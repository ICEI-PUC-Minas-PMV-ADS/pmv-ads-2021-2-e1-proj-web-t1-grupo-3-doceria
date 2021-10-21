var prods = '';
for (i = 0; i < db.dados.length; i++) {
    prods += `<p class="produto-item"> ${db.dados[i].titulo} <br> <img src="${db.dados[i].imagem}"> <br> ${db.dados[i].descricao} <br> R$: ${db.dados[i].preco} <br> </p>`;
}
document.getElementById('lista-produtos').innerHTML = prods;


function getLink(link){
    window.location.href = link;
}

let o = 'ok';
console.log(o)
let b = 'bk';
console.log(b)
