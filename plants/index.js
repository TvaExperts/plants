
window.onload = function () {

    // Burger menu 
    addBurgerClickHandler();
    addMenuLinkClickHandler();

    // Service buttons

    addServiceButtonsClickHandler();

}

 /* -------------  Burger menu -------------------- */


const addBurgerClickHandler = () => {

    document.querySelector('.header__burger').addEventListener('click', function() {
        document.querySelector('.header__navigation').classList.toggle('_open');
    });
}

const addMenuLinkClickHandler = () => {

    const menuLinks=document.querySelectorAll('.navigation__link');

    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', function() {
            document.querySelector('.header__navigation').classList.remove('_open');
        });
    });
    
    document.addEventListener('click', e => {
        if (! document.querySelector('.header__navigation').contains(e.target)) {
            document.querySelector('.header__navigation').classList.remove('_open');
        }
    });

}

/* ------------- Service buttons -------------------- */

const addServiceButtonsClickHandler = () => {
    const serviceButtons = document.querySelectorAll('.button_service');

    serviceButtons.forEach(serviceButton => {
        serviceButton.addEventListener('click', (e)=> {
            if (e.target.classList.contains('button-inactive')) return;
            removeBlurAllServices();
            e.target.classList.toggle('button-on');
            const numberOfSelectedButtonsServices = getNumberOfSelectedButtonsServices();
            numberOfSelectedButtonsServices === 2 
                ? deactivateLastButtonServices()
                : activateAllButtonsServices();
            if (numberOfSelectedButtonsServices) blurUnselectedServices();
        });
    });
}


const removeBlurAllServices = () => {
    const serviceCards = document.querySelectorAll('.service__card');
    serviceCards.forEach (card => {
        card.classList.remove('card-blur');
    })
}

const getNumberOfSelectedButtonsServices = () => {
    let numberOfSelectedButtonsServices = 0;
    const serviceButtons = document.querySelectorAll('.button_service');
    serviceButtons.forEach(button => {
        if (button.classList.contains('button-on')) numberOfSelectedButtonsServices++;
    })
    return numberOfSelectedButtonsServices;
}

const deactivateLastButtonServices = () => {
    const serviceButtons = document.querySelectorAll('.button_service');
    serviceButtons.forEach(button => {
        if (!button.classList.contains('button-on')) {
            button.classList.add('button-inactive');
        }
    })
}

const activateAllButtonsServices = () => {
    const serviceButtons = document.querySelectorAll('.button_service');
    serviceButtons.forEach(button => {
        if (button.classList.contains('button-inactive')) {
            button.classList.remove('button-inactive');
        }
    })
}

const blurUnselectedServices = () => {
    const serviceButtons = document.querySelectorAll('.button_service');
    serviceButtons.forEach(button => {
        if (!button.classList.contains('button-on')) {
            blurCardServicesByButtonText(button.innerHTML);
        }
    })
}

const blurCardServicesByButtonText = (buttonText) => {
    let captionStart = '';
    const serviceCards = document.querySelectorAll('.service__card');
    switch (buttonText) {
        case 'Gardens': captionStart = 'Garden';
            break;
        case 'Lawn': captionStart = 'Lawn';
            break;
        case 'Planting': captionStart = 'Planting';
            break;
    }
    serviceCards.forEach (card => {
        if (card.querySelector('.card__caption').innerHTML.includes(captionStart))
           card.classList.add('card-blur');
    })
}




