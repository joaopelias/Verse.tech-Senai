
    function abrirPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

    setTimeout(function () {
        abrirPopup();
}, 3000);
    setTimeout(function () {
        fecharPopup();
}, 10000);

    function fecharPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
