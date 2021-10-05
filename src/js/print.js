

function printStatus(divName) {
    // input valor
    var inputValor = document.getElementById('valor').value;
    document.getElementsByName('valor')[0].placeholder = inputValor;
    // input nome
    var inputNome = document.getElementById('nome').value;
    document.getElementsByName('nome')[0].placeholder = inputNome;
    // input cpf
    var inputNome = document.getElementById('cpf').value;
    document.getElementsByName('cpf')[0].placeholder = inputNome;
    //referente
    var inputNome = document.getElementById('ref').value;
    document.getElementsByName('ref')[0].placeholder = inputNome;

    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    // VOLTANDO PLACEHOLDER A O ORIGINAL
    document.getElementsByName('valor')[0].placeholder = "Valor";
    document.getElementsByName('nome')[0].placeholder = "Nome";
    document.getElementsByName('cpf')[0].placeholder = "CPF/CNPJ";
    document.getElementsByName('ref')[0].placeholder = "Descrição de pagamento";
}




function hide() {
    var display = document.getElementById('navmenu').style.display;

    if (display == "none") {
        document.getElementById('navmenu').style.display = 'block';


    } else {
        document.getElementById('navmenu').style.display = 'none';

    }


}

function real(i) {
    var v = i.value.replace(/\D/g, '');
    v = (v / 100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    i.value = v;
}

function teste() {
    var a = document.getElementById('valor');
    var b = document.getElementById('valorRes');
    b.value = a.value;
}

function printDiv() {
    alert('impressão em andamento...')
    document.getElementById('btnh').style.display = 'none';
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
    document.getElementById('navmenu').style.display = 'block';
    document.getElementById('btnh').style.display = 'inline';


}