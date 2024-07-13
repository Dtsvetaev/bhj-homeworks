document.addEventListener('DOMContentLoaded', () => {
    const tabs = Array.from(document.querySelectorAll('.tab'));
    const contents = Array.from(document.querySelectorAll('.tab__content'));

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Удаление активного класса у всех вкладок и содержимого
            tabs.forEach(tab => tab.classList.remove('tab_active'));
            contents.forEach(content => content.classList.remove('tab__content_active'));

            // Добавление активного класса текущей вкладке и соответствующему содержимому
            tab.classList.add('tab_active');
            contents[index].classList.add('tab__content_active');
        });
    });
});
