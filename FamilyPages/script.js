const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(`.image`)


let slideNumber = 1;
const length = images.length;


// js for picture pagination-dots starts....
const bottom = document.querySelector(`.bottom`);
for(let i = 0; i < length; i++){
    const section = document.createElement(`section`);
    section.className = `button`;
    bottom.appendChild(section);
};
const buttons = document.querySelectorAll(`.button`);
buttons[0].style.backgroundColor = `white`;

const resetBg = () =>{
    buttons.forEach((button) =>{
        button.style.backgroundColor = 'transparent';
        button.addEventListener('mouseover', stopSlideShow);
        button.addEventListener('mouseout', startSlideShow);
    });
};


buttons.forEach((button, i) => {
    button.addEventListener(`click`,()=>{
        resetBg();
        slider.style.transform = `translateX(-${i*800}px)`;
        slideNumber = i + 1;
        button.style.backgroundColor = `blue`;
    });
});

const changeColor = () =>{
    resetBg();
    buttons[slideNumber-1].style.backgroundColor = `blue`;
};

// js for dots ends here-----

const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber*800}px)`;
    slideNumber++;
};
const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber-2)*800}px)`;
    slideNumber--;
};
const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};
const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*800}px)`;
    slideNumber = length;
};

right.addEventListener('click', ()=>{
    slideNumber < length ? nextSlide() :
    getFirstSlide();
    changeColor();
    });
left.addEventListener('click', ()=>{
        slideNumber > 1 ? prevSlide() :
        getLastSlide();
        changeColor();
        });

// JS for Autoplay of slider starts......
let slideInterval;

const startSlideShow = () => {
    slideInterval = setInterval(() => {
        slideNumber < length ? nextSlide() : getFirstSlide();
        changeColor();
    },3000);
};
const stopSlideShow = () => {
    clearInterval(slideInterval);
};
startSlideShow();

slider.addEventListener('mouseover', stopSlideShow);
slider.addEventListener('mouseout', startSlideShow);
right.addEventListener('mouseover', stopSlideShow);
right.addEventListener('mouseout', startSlideShow);
left.addEventListener('mouseover', stopSlideShow);
left.addEventListener('mouseout', startSlideShow);




// js for the navbar action for small screens

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}