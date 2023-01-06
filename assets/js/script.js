
function expandirMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const btnToggle = document.getElementById('menuHamburguer');
    btnToggle.classList.toggle('disabled');

    const btnClose = document.getElementById('close');
    btnClose.classList.toggle('active');
}

function recolherMenu() {
    const nav = document.getElementById('nav');
    nav.classList.remove('active');

    const btnToggle = document.getElementById('menuHamburguer');
    btnToggle.classList.toggle('disabled');

    const btnClose = document.getElementById('close');
    btnClose.classList.toggle('active');
}

/*menuIcon.addEventListener('click', expandirMenu());*/




/*if (nav.classList.toggle == 'active') {
    const itemMenu = document.getElementsByClassName('itemMenu');
    function recolherMenu() {
        const menu = document.getElementsById('menu');
        menu.style.display = 'none'
    }

    
itemMenu.addEventListener('click', recolherMenu);
}*/