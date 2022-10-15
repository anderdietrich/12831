window.onload = function () {
    montarLista();
    document.getElementById('frmCadastro').addEventListener('submit',adicionarOuAlterar);
}

function adicionarOuAlterar(e) {
    var txtCod = document.getElementById('txtCod');
    var txtNome = document.getElementById('txtNome');
    var txtDescricao = document.getElementById('txtDescricao');
    var produto = {
        codigo: txtCod.value,
        nome: txtNome.value,
        descricao: txtDescricao.value
    };
    var produtos = [];
    var produtosLocalStorage = localStorage.getItem('produtos');
    if (produtosLocalStorage != null){
        produtos = JSON.parse(produtosLocalStorage)
    };
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    montarLista();
    document.getElementById('frmCadastro').requestFullscreen();
    e.preventDefault(); 
}

function montarLista() {
    var produtosLocalStorage = localStorage.getItem('produtos');
    if (produtosLocalStorage == null) {
        return;
    };
    var produtos = [];
    produtos = JSON.parse(produtosLocalStorage);
    var tbody = document.getElementById('tbodyResultados');
    tbody.innerHTML = '';
    produtos.map((produto, index) => {
        tbody.innerHTML +=
            '<tr id="rowTable' + index + '">' +
                '<td>' + produto.codigo + '</td>' +
                '<td>' + produto.nome + '</td>' +
                '<td>' + produto.descricao + '</td>' +
            '</tr>'

    })
}
