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
    getValor = document.getElementById('valor').value;
    //document.getElementById('setValor').innerText = getValor;
    setValor = document.getElementById('formatar').innerHTML
    console.log(setValor);
    document.getElementById()



}

