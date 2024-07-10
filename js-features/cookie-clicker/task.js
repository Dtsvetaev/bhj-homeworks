// Получаем элементы из HTML
let counterElement = document.getElementById('clicker__counter');
let cookieElement = document.getElementById('cookie');

// Переменная для хранения количества кликов
let clickCount = 0;

// Обработчик кликов по печеньке
cookieElement.onclick = function() {
    // Увеличиваем счетчик кликов
    clickCount++;
    counterElement.textContent = clickCount;

    // Увеличиваем/уменьшаем размер печеньки
    if (cookieElement.width === 200) {
        cookieElement.width = 220;
        cookieElement.height = 220;
    } else {
        cookieElement.width = 200;
        cookieElement.height = 200;
    }
}
