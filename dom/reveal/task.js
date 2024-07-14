// Функция для проверки, находится ли элемент в видимой области окна
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для обработки прокрутки окна
function onScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        if (isElementInViewport(reveal)) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
}

// Добавляем обработчик события прокрутки окна
window.addEventListener('scroll', onScroll);

// Вызываем функцию при загрузке страницы, чтобы сразу отобразить элементы, которые уже видны
document.addEventListener('DOMContentLoaded', onScroll);
