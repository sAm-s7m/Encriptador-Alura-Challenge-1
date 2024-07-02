function encripta() {
    var campoTexto = document.getElementById("texto-principal");
    var btnEncriptar = document.querySelector("#encriptar");

    btnEncriptar.addEventListener("click", function (event) {
        event.preventDefault();
        if (campoTexto.value.trim() === "") {
            showErrorMessage("Por favor, ingresa una palabra antes de encriptar.");
            return; // Evitar que la función de encriptación se ejecute
        }

        const textoEncriptado = encriptaTexto(campoTexto.value);

        var campoVacio = document.querySelector(".sin-resultado");
        campoVacio.classList.add("d-none");

        var campoLleno = document.querySelector(".texto-encriptado");
        campoLleno.classList.remove("d-none");

        var parrafo = document.querySelector(".texto-encriptado p");

        var minusculas = textoEncriptado.toLowerCase();

        // Verifica si tiene carácter especial
        function conCaracterEspecial(str) {
            const caracteresEspeciales = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return caracteresEspeciales.test(str);
        }

        // Lógica para verificar si el texto tiene acento
        var conAcento = textoEncriptado;
        var sinAcento = conAcento.normalize("NFD");

        if (textoEncriptado === minusculas && textoEncriptado === sinAcento && conCaracterEspecial(textoEncriptado) == false) {
            parrafo.textContent = textoEncriptado;
        } else {
            parrafo.textContent = "Solo letras minúsculas y sin acentos.";
        }
        campoTexto.value = "";

    });

}

encripta();

function desencripta() {
    var campoTexto = document.getElementById("texto-principal");
    var btnDesencriptar = document.querySelector("#desencriptar");

    btnDesencriptar.addEventListener("click", function (event) {
        event.preventDefault();

        if (campoTexto.value.trim() === "") {
            showErrorMessage("Por favor, ingresa una palabra antes de desencriptar.");
            return; // Evitar que la función de desencriptación se ejecute
        }

        const textoDesencriptado = desencriptaTexto(campoTexto.value);

        var campoVacio = document.querySelector(".sin-resultado");
        campoVacio.classList.add("d-none");

        var campoLleno = document.querySelector(".texto-encriptado");
        campoLleno.classList.remove("d-none");

        var parrafo = document.querySelector(".texto-encriptado p");

        // Verifica si tiene letra minúscula
        var minusculas = textoDesencriptado.toLowerCase();

        // Verifica si tiene carácter especial
        function conCaracterEspecial(str) {
            const caracteresEspeciales = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return caracteresEspeciales.test(str);
        }

        // Lógica para verificar si el texto tiene acento
        var conAcento = textoDesencriptado;
        var sinAcento = conAcento.normalize("NFD");

        if (textoDesencriptado === minusculas && textoDesencriptado === sinAcento && conCaracterEspecial(textoDesencriptado) == false ) {
            parrafo.textContent = textoDesencriptado;
        } else {
            parrafo.textContent = "Solo letras minúsculas y sin acentos.";
        }
        campoTexto.value = "";
    })
}
desencripta()