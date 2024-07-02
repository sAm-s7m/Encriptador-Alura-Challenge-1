var listaEncriptada = ["enter", "imes", "ai", "ober", "ufat"];
var listaNormal = ["e", "i", "a", "o", "u"];

const cifrasParaEncriptar = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const cifrasParaDesencriptar = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

function encriptaTexto(texto) {
    let textoConvertido = texto;
    listaNormal.forEach(function (letra) {
        textoConvertido = textoConvertido.replaceAll(letra, cifrasParaEncriptar[letra]);
    });
    return textoConvertido;
}

function desencriptaTexto(texto) {
    let textoParaConvertir = texto;
    listaEncriptada.forEach(function (letra) {
        textoParaConvertir = textoParaConvertir.replaceAll(letra, cifrasParaDesencriptar[letra]);
    });
    return textoParaConvertir;
}

function showErrorMessage(message) {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = message;
    errorMessageElement.classList.add('show');
    setTimeout(() => {
        errorMessageElement.classList.remove('show');
    }, 3000); // Ocultar el mensaje después de 3 segundosESTE
}