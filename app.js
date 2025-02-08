// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
    let input = document.getElementById("amigo"); // Capturamos el campo de entrada
    let nombre = input.value.trim(); // Obtenemos el valor sin espacios en blanco
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Validamos que la entrada este vacia
        return;
    }
    
    amigos.push(nombre); // Agregar el nombre al array
    input.value = ""; // Limpiar el campo de entrada
    actualizarLista(); // Actualizar la lista mostrada en la pagina
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Crear un elemento de lista
        item.textContent = amigos[i]; // Asignar el nombre
        lista.appendChild(item); // Agregar a la lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear."); // Validar que haya amigos disponibles
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre sorteado
    
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado; // Mostrar el resultado
}