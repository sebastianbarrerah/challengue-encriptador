const texto = document.querySelector("[data-texto]");

export function copiando() {
  let valorMensaje = document.querySelector("[data-div-parrafo]");
  valorMensaje = valorMensaje.textContent;
  navigator.clipboard.writeText(valorMensaje);
  texto.value = "";
}
