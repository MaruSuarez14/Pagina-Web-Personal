let menuVisible = false;
function showMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "icono";
        menuVisible = true;
    }
}
function select() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//# sourceMappingURL=index.672d4772.js.map
