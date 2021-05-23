///////////////////////// menu

function menu() {
    let nav = document.querySelector(".nav");
    let burgerMenu = document.querySelector(".burger-menu");

    burgerMenu.addEventListener("click", () => {
        nav.classList.toggle("nav_active");
        burgerMenu.classList.toggle("burger-menu-cross");
    });
}
menu();

///////////////////////// end of menu

////////////////////// smoth scroll

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

//////////////////// end of smoth scroll
