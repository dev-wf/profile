

function printStatus() {
    alert('impressão em andamento...')
    document.getElementById('btnh').style.display = 'none';    
    window.print();
    window.close()
    document.getElementById('navmenu').style.display = 'block';
    document.getElementById('btnh').style.display = 'inline';
    

}

function hide() {
    var display = document.getElementById('navmenu').style.display;   

    if (display == "none") {
        document.getElementById('navmenu').style.display = 'block';


    } else {
        document.getElementById('navmenu').style.display = 'none';

    }


}