document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        let activeIndex = 0;
        const cases = rotator.querySelectorAll('.rotator__case');

        function changeCase() {
            cases[activeIndex].classList.remove('rotator__case_active');
            activeIndex = (activeIndex + 1) % cases.length;
            const nextCase = cases[activeIndex];
            nextCase.classList.add('rotator__case_active');
            nextCase.style.color = nextCase.getAttribute('data-color');
            
            const speed = nextCase.getAttribute('data-speed') || 1000;
            setTimeout(changeCase, speed);
        }

        setTimeout(changeCase, cases[0].getAttribute('data-speed') || 1000);
    });
});
