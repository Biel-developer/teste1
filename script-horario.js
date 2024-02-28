const imgRemove = document.querySelector(".img-remove");
const fundoEdition = document.querySelector(".fundo-edition");
const voltarButton = document.getElementById("voltarButton");

document.addEventListener("DOMContentLoaded", function() {
    var voltarButton = document.getElementById("voltarButton");
    if (voltarButton) {
        voltarButton.addEventListener("click", function() {
            window.history.back();
        });
    }
});