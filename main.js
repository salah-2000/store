const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('slide');
    });
};

if(close) {
    close.addEventListener('click', ()=> {
        nav.classList.remove('slide');
    });
};

// up botton

$(document).ready(function() {


const scroll = 301;

$(window).scroll(function() {
    $(this).scrollTop();

    if($(window).scrollTop() >= scroll) {
        $('#up').show();
        $('#up').click(function() {
            $(window).scrollTop(0);
        })
    }else {
        $('#up').fadeOut();
    }
});
});