let slideIndex = 1;
let counterElem = document.querySelector('.box__counter_current');

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let slides = document.querySelectorAll(".slider__item");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";    
}

document.querySelector('.box__right').addEventListener('click', () => {
    nextSlide();  
    counterElem.textContent = slideIndex.toString();
});

document.querySelector('.box__left').addEventListener('click', () => {
    previousSlide();
    counterElem.textContent = slideIndex.toString();
});

setInterval(() => {
    nextSlide();  
    counterElem.textContent = slideIndex.toString();
}, 7000)