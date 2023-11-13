//CURSOR
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate(
        [
            { left: `${posX}px`, top: `${posY}px` },
            { left: `${posX}px`, top: `${posY}px` }
        ],
        { duration: 500, fill: "forwards" }
    );
});


//PRELOADER
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const preloader = document.querySelector(".preloader");
        const content = document.querySelector(".content"); 
        preloader.style.opacity = "0"; 
        setTimeout(function () {
            preloader.style.display = "none"; 
            content.style.opacity = "1"; 
        }, 1300); 
    }, 1300); 
});

 //CAROUSEL
let swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  function setup(){
    createCanvas(windowWidth, windowHeight);
  }
  function draw(){
    background(150);
    noStroke();
    for(let i = 0; i<14000; i++){
      rect(random(width), random(height), 2, 2);
    }
  }


  document.getElementById('openSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '250px';
    document.getElementById('sidebar').style.left = '0';
});

document.getElementById('closeSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '0';
    document.getElementById('sidebar').style.left = '-250px';
});
