# Amigo Secreto 🎁

Este mini proyecto permite gestionar una lista de amigos y seleccionar aleatoriamente a uno de ellos para un juego de amigo secreto.

## 🚀 Funcionalidades

- Agregar amigos a una lista.
- Mostrar los amigos en una lista HTML.
- Sortear un amigo aleatorio.

## 📋 Requisitos

- Un navegador web moderno.
- Archivo `index.html` con los elementos necesarios.
- Archivo `app.js` con las funciones de lógica.
- Archivo `style.css` para mejorar la apariencia (opcional).

## 🛠️ Instalación y Uso

1. Clona o descarga este repositorio.
2. Abre `index.html` en un navegador.
3. Escribe el nombre de un amigo en el campo de texto y presiona "Añadir".
4. Repite el paso anterior para agregar más amigos.
5. Presiona "Sortear amigo" para seleccionar un amigo al azar.

## 📜 Código Principal (app.js)

El código JavaScript gestiona la lista de amigos y el sorteo aleatorio:

```javascript
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}
```

## 🎨 Personalización

Puedes modificar `style.css` para cambiar la apariencia de la lista y los botones.

## 📜 Licencia

Este proyecto es de uso libre. ¡Diviértete creando tu propio amigo secreto! 🎉

