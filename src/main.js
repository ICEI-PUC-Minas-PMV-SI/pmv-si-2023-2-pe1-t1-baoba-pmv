document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const btnPrev = document.querySelector('.carousel-control.prev');
    const btnNext = document.querySelector('.carousel-control.next');

    let currentIndex = 0;

    btnNext.addEventListener('click', () => {
        if (currentIndex < (carousel.children.length - 1)) {
            currentIndex++;
            carousel.style.transform = `translateX(-${100 * currentIndex}%)`;
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            carousel.style.transform = `translateX(-${100 * currentIndex}%)`;
        }
    });
});