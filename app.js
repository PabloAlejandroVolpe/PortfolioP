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
    // Gradualmente mostrar el contenido y ocultar el preloader con el GIF
    setTimeout(function () {
        const preloader = document.querySelector(".preloader");
        const content = document.querySelector(".content"); // Agrega esta línea para seleccionar el contenido
        preloader.style.opacity = "0"; // Cambia la opacidad del preloader a 0
        setTimeout(function () {
            preloader.style.display = "none"; // Oculta el preloader
            content.style.opacity = "1"; // Cambia la opacidad del contenido a 1 (completamente visible)
        }, 1500); // Puedes ajustar el tiempo de visualización del preloader (en milisegundos)
    }, 1500); // Puedes ajustar el tiempo de visualización del preloader (en milisegundos)
});


