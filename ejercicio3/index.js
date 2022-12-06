const cuadrado = document.createElement("div");
const colores = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];

//estilos iniciales e inserción del cuadrado
cuadrado.style.cssText =
  "height: 100px; width: 100px; background-color: black; color: white; display: flex; align-items: center; justify-content: center; text-align: center";
cuadrado.textContent = "Soy un cuadrado";
document.body.appendChild(cuadrado);

//aplica color aleatorio dentro de los valores del array "colores"
const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
cuadrado.style.backgroundColor = colorAleatorio;

//cambia el tamaño dependiendo del color asignado
switch (colorAleatorio) {
  case "yellow":
  case "pink":
  case "purple":
    cuadrado.style.width = "200px";
    cuadrado.style.height = "200px";
    break;
  case "orange":
    cuadrado.style.width = "300px";
    cuadrado.style.height = "300px";
    break;
}
