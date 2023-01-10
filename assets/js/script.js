const nav = document.getElementById('nav');
const btnToggle = document.getElementById('menuHamburguer');
const btnClose = document.getElementById('close');

function expandirMenu() {

    if (window.innerWidth < 768) {

        nav.classList.toggle('active');

        btnToggle.classList.toggle('disabled');

        btnClose.classList.toggle('active');
    } else {
        nav.classList.toggle('');
    }
}

function recolherMenu() {

    if (window.innerWidth < 768) {

        nav.classList.remove('active');

        btnToggle.classList.toggle('disabled');

        btnClose.classList.toggle('active');

    } else {
        
        nav.classList.toggle('');
    }
}