document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('burger').addEventListener('click', function() {
        document.querySelector('.header__navigation').classList.toggle('_open');
        
    })

    const menuLinks=document.querySelectorAll('.navigation__link');

    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', function() {
            document.querySelector('.header__navigation').classList.remove('_open');
        });
    })
    
    document.addEventListener('click', e => {
        if (! document.querySelector('.header__navigation').contains(e.target)) {
            document.querySelector('.header__navigation').classList.remove('_open');
        }
    })

})




