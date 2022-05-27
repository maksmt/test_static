let unlock = true;
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
    let menuBody = document.querySelector(".main__menu");
    iconMenu.addEventListener("click", function (e) {
        if (unlock) {
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
        }
    });
};
function menu_close() {
    let iconMenu = document.querySelector(".icon-menu");
    let menuBody = document.querySelector(".main__menu");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
}