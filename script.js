
// Crear el arreglo con productos
let listaSuper = ["Sal", "Leche", "Arroz"];

// Funcion para mostrar los productos
function logItems(arreglo) {
    arreglo.forEach(function(producto, indice) {
        console.log(indice + ": " + producto);
    });
}

// Programa interactivo
let comando = "";

while (comando != "salir") {

    comando = prompt("¿Que queres hacer? Escribi: nuevo, listar, borrar o salir");

    if (comando == "nuevo") {

        let producto = prompt("¿Que producto queres agregar?");
        listaSuper.push(producto);

        console.log("Producto agregado: " + producto);

    } else if (comando == "listar") {

        console.log("LISTA DEL SUPER:");
        logItems(listaSuper);

    } else if (comando == "borrar") {

        let indice = Number(prompt("¿Que numero de producto queres borrar?"));

        if (indice >= 0 && indice < listaSuper.length) {

            let productoBorrado = listaSuper.splice(indice, 1);

            console.log("Producto eliminado: " + productoBorrado);

        } else {

            console.log("Indice incorrecto.");

        }

    } else if (comando == "salir") {

        console.log("Saliendo del programa...");

    } else {

        console.log("Comando incorrecto. Intenta nuevamente.");

    }
}

