let areaTexto = document.querySelector("#texto-principal");
areaTexto.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}
