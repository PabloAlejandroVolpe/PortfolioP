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


//NAVEGACION

