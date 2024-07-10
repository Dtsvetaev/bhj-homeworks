let timerElement = document.getElementById('timer');

let timeLeft = parseInt(timerElement.textContent);

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;  
        timerElement.textContent = timeLeft;  
    } else {
        alert('Вы победили в конкурсе!');  
        clearInterval(timerInterval);  
    }
}

let timerInterval = setInterval(updateTimer, 1000);
