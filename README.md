# # Alura Challenge #1 | Oracle One | Encriptador de Texto

![Estado del Proyecto](https://img.shields.io/badge/estado-completado-brightgreen)
![Licencia MIT](https://img.shields.io/badge/licencia-MIT-blue)
![Versión](https://img.shields.io/badge/version-1.0.0-green)
![Dependencias](https://img.shields.io/badge/dependencias-actualizadas-brightgreen)
![Pruebas](https://img.shields.io/badge/pruebas-pasadas-success)

## 📜 Descripción

Este proyecto es un encriptador de texto que permite a los usuarios encriptar y desencriptar texto utilizando un algoritmo de sustitución de letras. El encriptador es capaz de manejar texto en minúsculas y sin acentos.

### 🔑 Llaves de encriptación

Las "llaves" de encriptación que utilizaremos son las siguientes:

- La letra "e" es convertida para "enter"
- La letra "i" es convertida para "imes"
- La letra "a" es convertida para "ai"
- La letra "o" es convertida para "ober"
- La letra "u" es convertida para "ufat"

## 🚀 Funcionalidades

### 🔒 Encriptación

- El usuario puede ingresar texto en un campo de texto y presionar el botón "Encriptar" para encriptar el texto.
- El texto encriptado se muestra en un área de texto debajo del botón "Encriptar".
- El encriptador utiliza un algoritmo de sustitución de letras que reemplaza cada letra del texto original con una letra o palabra específica.

### 🔓 Desencriptación

- El usuario puede ingresar texto encriptado en un campo de texto y presionar el botón "Desencriptar" para desencriptar el texto.
- El texto desencriptado se muestra en un área de texto debajo del botón "Desencriptar".
- El desencriptador utiliza un algoritmo de sustitución de letras que reemplaza cada letra o palabra encriptada con la letra original.

### 📝 Copiar texto

- El usuario puede presionar el botón "Copiar" para copiar el texto encriptado o desencriptado al portapapeles.

### ⚠️ Errores

- Si el usuario intenta encriptar o desencriptar un texto vacío, se muestra un mensaje de error.
- Si el texto contiene caracteres especiales o mayúsculas, se muestra un mensaje de error.

## 📋 Requisitos

- Debe funcionar solo con letras minúsculas.
- No deben ser utilizadas letras con acentos ni caracteres especiales.
- Debe ser posible convertir una palabra para la versión encriptada y también devolver una palabra encriptada para su versión original. Por ejemplo:
    - "gato" => "gaitober"
    - "gaitober" => "gato"
- La página debe tener campos para la inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las dos opciones.
- El resultado debe ser mostrado en la pantalla.

## 🌟 Extras

- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea, que tenga la misma funcionalidad del `ctrl+C` o de la opción "copiar" del menú de las aplicaciones.

## 🛠️ Tecnologías utilizadas

- HTML
- CSS
- JavaScript

## 💻 Instalación

1. Clona el repositorio en tu máquina local.
2. Abre el archivo **`index.html`** en un navegador web.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 👩‍💻 Autora

Desarrollado por S△M | 2024
