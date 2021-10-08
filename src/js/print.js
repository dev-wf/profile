
function GetSet() {

    /* 
    var getValor = document.getElementById('valor').value;
    document.getElementById('valor').placeholder = getValor;

    var getPagador = document.getElementById('pagador').value;
    document.getElementById('pagador').placeholder = getPagador;

    var getCpfCli = document.getElementById('cpfcnpj').value;
    document.getElementById('cpfcnpj').placeholder = getCpfCli;

    var getRef = document.getElementById('referente').value;
    document.getElementById('referente').placeholder = getRef;

    var getEmissor = document.getElementById('emissor').value;
    document.getElementById('emissor').placeholder = getEmissor;

    var getCpfEmissor = document.getElementById('cpfcnpj1').value;
    document.getElementById('cpfcnpj1').placeholder = getCpfEmissor;

    var getData = document.getElementById('data').value;
    document.getElementById('data').placeholder = getData;
    */



}



function printDoc(divName) {
    /*********************** MOSTRANDO  AS DIV DO INPUT  printDoc('PrintArea') **************************/




    /****************************************************************************/
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;

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

function mascaraMutuario(o, f) {
    v_obj = o
    v_fun = f
    setTimeout('execmascara()', 1)
}

function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}

function cpfCnpj(v) {

    //Remove tudo o que não é dígito
    v = v.replace(/\D/g, "")

    if (v.length <= 14) { //CPF

        //Coloca um ponto entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d)/, "$1.$2")

        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v = v.replace(/(\d{3})(\d)/, "$1.$2")

        //Coloca um hífen entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

    } else { //CNPJ

        //Coloca ponto entre o segundo e o terceiro dígitos
        v = v.replace(/^(\d{2})(\d)/, "$1.$2")

        //Coloca ponto entre o quinto e o sexto dígitos
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")

        //Coloca uma barra entre o oitavo e o nono dígitos
        v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")

        //Coloca um hífen depois do bloco de quatro dígitos
        v = v.replace(/(\d{4})(\d)/, "$1-$2")

    }

    return v

}
