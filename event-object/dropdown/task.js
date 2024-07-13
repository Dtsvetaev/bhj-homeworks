const dropdowns = document.querySelectorAll('.dropdown');

function closeAllDropdowns() {
    dropdowns.forEach(dropdown => {
        dropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
    });
}

dropdowns.forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');
    const items = listElement.querySelectorAll('.dropdown__item');

    valueElement.addEventListener('click', () => {
        const isActive = listElement.classList.contains('dropdown__list_active');
        closeAllDropdowns();
        if (!isActive) {
            listElement.classList.add('dropdown__list_active');
        }
    });

    items.forEach(item => {
        const link = item.querySelector('.dropdown__link');
        link.addEventListener('click', (event) => {
            event.preventDefault();
            valueElement.textContent = link.textContent;
            listElement.classList.remove('dropdown__list_active');
        });
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
        closeAllDropdowns();
    }
});
