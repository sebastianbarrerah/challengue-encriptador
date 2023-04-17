const texto = document.querySelector("[data-texto]");

export function desencriptando() {
  let nuevoValor = texto.value;
  nuevoValor = nuevoValor.toLowerCase();
  nuevoValor = nuevoValor.replace(/enter/gim, "e");
  nuevoValor = nuevoValor.replace(/imes/gim, "i");
  nuevoValor = nuevoValor.replace(/ai/gim, "a");
  nuevoValor = nuevoValor.replace(/ober/gim, "o");
  nuevoValor = nuevoValor.replace(/ufat/gim, "u");
  console.log(nuevoValor);
  const palabra = document.querySelector("[data-div-parrafo]");
  let resultado = nuevoValor;
  palabra.innerHTML = resultado;
  let imagen = document.querySelector("[data-div-imagen]");
  let borrar = "";
  imagen.innerHTML = borrar;
  
  let avisos = document.querySelector("[data-div-mensajes]");
  let remover = "";
  avisos.innerHTML = remover;
  let restriccion = document.querySelector("[data-div-restriccion]");
  let eliminando = "";
  restriccion.innerHTML = eliminando;
  
}
