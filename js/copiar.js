function copiarTexto() {
    let textoCopiado = document.querySelector(".texto-encriptado p");
    var btnCopiar = document.querySelector("#copiar");
    btnCopiar.addEventListener("click", function () {
        navigator.clipboard.writeText(textoCopiado.innerText);
        var range = document.createRange();
        range.selectNodeContents(textoCopiado);
        window.getSelection().addRange(range);
        // location.reload(); // No es necesario recargar la página
    });
}