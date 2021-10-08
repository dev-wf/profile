//console.log('database.js Funcionando...');
function submit() {
    var ref = document.getElementById('referente').value;
    if (typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage. set (nome da variavel,conteudo)        
        localStorage.setItem('lbldata', ref);
        var PostRef = localStorage.getItem('lbldata');
        console.log(PostRef);
        document.getElementById('referente').value = PostRef;
    } else {
        alert('Sem Conexao com Banco de dados...')
    }
}

function swit() {
    //document.getElementById('setValor').innerText = getValor;

    //valor:
    valor = document.getElementById('valor').value;
    console.log(valor);
    document.getElementById('getValor').innerHTML = valor;

    //pagador:
    pagador = document.getElementById('pagador').value;
    console.log(pagador);
    document.getElementById('getPagador').innerHTML = pagador;

    //cpfcnpj:
    cpfcnpj = document.getElementById('cpfcnpj').value;
    console.log(cpfcnpj);
    document.getElementById('getDocPagador').innerHTML = cpfcnpj;

    //referente:
    referente = document.getElementById('referente').value;
    console.log(referente);
    document.getElementById('getRef').innerHTML = referente;

    //emissor:
    emissor = document.getElementById('emissor').value;
    console.log(valor);
    document.getElementById('getEmissor').innerHTML = emissor;

    //cpfcnpj1:
    cpfcnpj1 = document.getElementById('cpfcnpj1').value;
    console.log(cpfcnpj1);
    document.getElementById('getValorDocEmissor').innerHTML = cpfcnpj1;

    //data:
    data = document.getElementById('data').value;
    console.log(data);
    document.getElementById('getData').innerHTML = data;



}

