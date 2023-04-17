import { encriptado } from "./modulos/encriptar.js";
import { desencriptando } from "./modulos/desencriptar.js";
import { copiando } from "./modulos/copiar.js";
import { reinicio } from "./modulos/reiniciar.js";

const encriptar = document.querySelector("[data-encriptar]");
const desencriptar = document.querySelector("[data-desencriptar]");
const copiar = document.querySelector("[data-copiar]");
const reiniciar = document.getElementById("reiniciar");

// evento encriptar
encriptar.addEventListener("click", encriptado);

// evento de desencriptar

desencriptar.addEventListener("click", desencriptando);

// evento de copiar

copiar.addEventListener("click", copiando);

// evento mejoras

reiniciar.addEventListener("click", reinicio);


