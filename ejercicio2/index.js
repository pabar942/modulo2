const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

// Crear lista con los nombres de usuario

const lista = document.createElement("ul");
users.forEach(({ name }) => {
  const elementoLista = document.createElement("li");
  elementoLista.textContent = name;
  lista.appendChild(elementoLista);
});

document.body.appendChild(lista);

// Cambiar a gold el color de fondo de los usuarios premium

const elementos = document.querySelectorAll("li");

elementos.forEach((elemento, indice) => {
  if (users[indice].isPremium)
    elemento.style.cssText = "background-color: gold;";
});

// Añadir el atributo title con el valor "usuario premium" a los que son premium

elementos.forEach((elemento, indice) => {
  if (users[indice].isPremium)
    elemento.setAttribute("title", "Usuario premium");
});
