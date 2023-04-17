const texto = document.querySelector("[data-texto]");

 export function encriptado() {
  let valor = texto.value;
  valor = valor.toLowerCase();
  console.log(valor);
  valor = valor.replace(/e/gim, "enter");
  valor = valor.replace(/i/gim, "imes");
  valor = valor.replace(/a/gim, "ai");
  valor = valor.replace(/o/gim, "ober");
  valor = valor.replace(/u/gim, "ufat");
  const cuadrado = document.querySelector("[data-div-parrafo]");
  let agregar = valor;
  cuadrado.innerHTML = agregar;
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




