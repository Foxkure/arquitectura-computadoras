/*slider*/
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');

let current = 0;
const total = slides.length;
let slideInterval = setInterval(nextSlide, 4000);

function showSlide(index) {
    slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    indicators[i].classList.toggle('active', i === index);
    });
    current = index;
}

function nextSlide() {
    let nextIndex = (current + 1) % total;
    showSlide(nextIndex);
}

function prevSlide() {
    let prevIndex = (current - 1 + total) % total;
    showSlide(prevIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.querySelector('.next')
    const prevBtn = document.querySelector('.prev')

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
        });
    }
});

indicators.forEach(indicator => {
    indicator.addEventListener('click', e => {
    const index = parseInt(e.target.dataset.slide);
    showSlide(index);
    resetInterval();
    });
});

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4000);
}

showSlide(current);

/*botón*/
window.addEventListener('scroll', () => {
    const btn = document.getElementById('btnSubir');
    if (window.scrollY > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

document.getElementById('btnSubir').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

