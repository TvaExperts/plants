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

console.log('Самооценка своей работы:\n\n  Вёрстка соотвествует макету 768px +24 \n  Вёрстка соотвествует макету 380px +24 \n  Нет полосы прокрутки при ширинах не менее 320px +15 \n  Реализация адаптивного меню +22 \n\n ============================ \n Итого: 85. Баллов 75 по заданию.');





