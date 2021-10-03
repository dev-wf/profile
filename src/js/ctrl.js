/*$(document).ready(function() {
    $('a').click(function() {
        if ($(this).hasClass("same-box")) {
            $(".toggle:visible").slideToggle.not;
            $(".toggle:visible").slideUp();
            $($(this).attr("href")).slideDown();
            return false;
        }
        var myelement = $(this).attr("href");
        $(myelement).slideToggle("fast");
        $(".toggle:visible").not(myelement).slideUp();


    });
});*/
function loadBox() {
    document.getElementById('box1').style.display = 'none';
    document.getElementById('box2').style.display = 'none';
    document.getElementById('box3').style.display = 'none';
    document.getElementById('box4').style.display = 'none';
    document.getElementById('box5').style.display = 'none';
}

function box1() {
    document.getElementById('box2').style.display = 'none';
    document.getElementById('box3').style.display = 'none';
    document.getElementById('box4').style.display = 'none';
    document.getElementById('box5').style.display = 'none';
    var x = document.getElementById('box1');
    if (x.style.display === 'none') {
        x.style.display = 'inline';
    } else {
        x.style.display = 'none';
    }

}

function box2() {
    document.getElementById('box1').style.display = 'none';
    document.getElementById('box3').style.display = 'none';
    document.getElementById('box4').style.display = 'none';
    document.getElementById('box5').style.display = 'none';
    var x = document.getElementById('box2');
    if (x.style.display === 'none') {
        x.style.display = 'inline';
    } else {
        x.style.display = 'none';
    }

}

function box3() {
    document.getElementById('box1').style.display = 'none';
    document.getElementById('box2').style.display = 'none';
    document.getElementById('box4').style.display = 'none';
    document.getElementById('box5').style.display = 'none';
    var x = document.getElementById('box3');
    if (x.style.display === 'none') {
        x.style.display = 'inline';
    } else {
        x.style.display = 'none';
    }

}

function box4() {
    document.getElementById('box1').style.display = 'none';
    document.getElementById('box2').style.display = 'none';
    document.getElementById('box3').style.display = 'none';
    document.getElementById('box5').style.display = 'none';
    var x = document.getElementById('box4');
    if (x.style.display === 'none') {
        x.style.display = 'inline';
    } else {
        x.style.display = 'none';
    }

}

function box5() {
    document.getElementById('box1').style.display = 'none';
    document.getElementById('box2').style.display = 'none';
    document.getElementById('box3').style.display = 'none';
    document.getElementById('box4').style.display = 'none';
    var x = document.getElementById('box5');
    if (x.style.display === 'none') {
        x.style.display = 'inline';
    } else {
        x.style.display = 'none';
    }

}




