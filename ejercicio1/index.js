// Muestra en la consola el texto de cada uno de los párrafos.
const contenidoParrafos = document.querySelectorAll("p");
contenidoParrafos.forEach((parrafo) => console.log(parrafo.textContent));

// Muestra en la consola el texto de cada uno de los párrafos que tengan la clase parrafo.
const claseParrafo = document.querySelectorAll("p.parrafo");
claseParrafo.forEach((parrafo) => console.log(parrafo.textContent));

// Modifica el texto de cada uno de los párrafos que tengan la clase parrafo por "Hola Mundo".
claseParrafo.forEach((parrafo) => (parrafo.textContent = "Hola mundo"));
// Cambia el color de fondo de cada uno de los párrafos que tengan la clase parrafo por red.
claseParrafo.forEach(
  (parrafo) => (parrafo.style.cssText = "background-color: red;")
);
// Añade un span con el texto "Infiltrado" al final de cada uno de los párrafos que tengan la clase parrafo
const spanInfiltrado = document.createElement("span");
spanInfiltrado.textContent = " Infiltrado";
claseParrafo.forEach((parrafo) => parrafo.appendChild(spanInfiltrado));
