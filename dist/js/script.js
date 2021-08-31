let screenWidth = window.screen.width;
let counterElem = document.querySelector('.box__counter_current');
let counter = 1;
let offline = 0;
const sliderLine = document.querySelector('.slider__line');

window.addEventListener("resize", () => {
        offline = 0;
        counter = 1;
        screenWidth = window.screen.width;
        sliderLine.style.left = -offline + 'px';
        counterElem.textContent = counter.toString();
    });

function nextImage(){
    offline = offline + screenWidth;
    counter += 1;
    if (offline >= screenWidth*4){
        offline = 0;
        counter = 1;
    }
    sliderLine.style.left = -offline + 'px';
    counterElem.textContent = counter.toString();
}
function prevImage(){
    offline = offline - screenWidth;
    counter -= 1;
    if (offline < 0){
        offline = screenWidth*3;
        counter = 4;
    }
    sliderLine.style.left = -offline + 'px';
    counterElem.textContent = counter.toString();
}

if (screenWidth>1920){
    screenWidth = 1920;
}

setInterval(() => { 
    nextImage();
}, 5000);

document.querySelector('.box__right').addEventListener('click', () => {
    nextImage();   
});

document.querySelector('.box__left').addEventListener('click', () => {
    prevImage();
});

