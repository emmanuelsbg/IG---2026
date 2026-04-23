const titulo = document.querySelector("h1");

let encendido = true;

setInterval(() => {
    if (encendido) {
        titulo.style.opacity = "0.4";
        titulo.style.textShadow = "none";
    } else {
        titulo.style.opacity = "1";
        titulo.style.textShadow = "0 0 20px #ff00c8, 0 0 40px #00fff7";
    }

    encendido = !encendido;
}, 300);

// EFECTO HOVER SONIDO (OPCIONAL)
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.1)";
    });

    link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
    });
});

// EFECTO CLICK FLASH
document.addEventListener("click", (e) => {
    const flash = document.createElement("div");

    flash.style.position = "fixed";
    flash.style.left = e.clientX + "px";
    flash.style.top = e.clientY + "px";
    flash.style.width = "10px";
    flash.style.height = "10px";
    flash.style.background = "#00fff7";
    flash.style.borderRadius = "50%";
    flash.style.boxShadow = "0 0 20px #00fff7";
    flash.style.pointerEvents = "none";

    document.body.appendChild(flash);

    setTimeout(() => {
        flash.remove();
    }, 300);
});