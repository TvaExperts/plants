const adresses = [
    {
        id: 1, 
        city: 'Canandaigua, NY',
        phone: '+1	585	393 0001',
        officeAdress: '151 Charlotte Street'
    },
    {
        id: 2, 
        city: 'New York City',
        phone: '+1	212	456 0002',
        officeAdress: '9 East 91st Street'
    },
    {
        id: 3, 
        city: 'Yonkers, NY',
        phone: '+1 914 678 0003',
        officeAdress: '511 Warburton Ave'
    },
    {
        id: 4, 
        city: 'Sherrill, NY',
        phone: '+1	315	908 0004',
        officeAdress: '14 WEST Noyes BLVD'
    }
]

window.onload = function () {

    // Burger menu 
    addBurgerClickHandler();
    addMenuLinkClickHandler();

    // Service buttons

    addServiceButtonsClickHandler();

    // Prices dropdowns

    addPricesDropdownsClickHandler();

    // Contacts select

    addContactsSelectClickHandler();

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

/* ------------- Prices dropdowns -------------------- */

const addPricesDropdownsClickHandler = () => {
    const pricesDropdowns = document.querySelectorAll('.dropdown');
    pricesDropdowns.forEach(pricesDropdown => {
        pricesDropdown.addEventListener('click', (e)=> {
            if (e.target.classList.contains('dropdown__arrow')){
                if (pricesDropdown.classList.contains('dropdown-opened')) {
                    pricesDropdown.classList.remove('dropdown-opened');
                } else {
                    closeAllPricesDropdowns();
                    pricesDropdown.classList.add('dropdown-opened');
                }
            }
        });
    });
}

const closeAllPricesDropdowns = () => {
    const pricesDropdowns = document.querySelectorAll('.dropdown');
    pricesDropdowns.forEach(pricesDropdown => {
        pricesDropdown.classList.remove('dropdown-opened');
    })
}

/* ------------- Contacts select -------------------- */

const addContactsSelectClickHandler = () => {
    
}