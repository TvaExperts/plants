



document.addEventListener('DOMContentLoaded', function () {

    const menuLinks=document.querySelectorAll('.navigation__link');
    

/* -------------  Burger menu -------------------- */

    document.getElementById('burger').addEventListener('click', function() {
        document.querySelector('.header__navigation').classList.toggle('_open');
    });

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

    /* -------------  Service buttons -------------------- */

    const serviceButtons = document.querySelectorAll('.button_service');
    const serviceCards = document.querySelectorAll('.service__card');

    const handlerClickButtonServise = (event) => {
        if (event.target.classList.contains('button-inactive')) return;
        removeBlurServices();
        event.target.classList.toggle('button-on');
        const numberOfSelectedButtons = getNumberOfSelectedButtons();
        numberOfSelectedButtons === 2 
            ? deactivateLastButtonServices()
            : activateButtonServices();
        if (numberOfSelectedButtons) blurUnselectedServices();
    }

    serviceButtons.forEach(serviceButton => {
        serviceButton.addEventListener('click', handlerClickButtonServise);
    });

    const removeBlurServices = () => {
        serviceCards.forEach (card => {
            card.classList.remove('card-blur');
        })
    }

    const getNumberOfSelectedButtons = () => {
        let numberOfSelectedButtons = 0;
        serviceButtons.forEach (button => {
            if (button.classList.contains('button-on')) numberOfSelectedButtons++;
        })
        return numberOfSelectedButtons;
    }

    const deactivateLastButtonServices = () => {
        serviceButtons.forEach(button => {
            if (!button.classList.contains('button-on')) {
                button.classList.add('button-inactive');
            }
        })
    }

    const activateButtonServices = () => {
        serviceButtons.forEach(button => {
            if (button.classList.contains('button-inactive')) {
                button.classList.remove('button-inactive');
            }
        })
    }

    const blurUnselectedServices = () => {
        serviceButtons.forEach(button => {
            if (!button.classList.contains('button-on')) {
                blurCardServicesByButtonText(button.innerHTML);
            }
        })
    }

    const blurCardServicesByButtonText = (buttonText) => {
        let captionStart = '';
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
})