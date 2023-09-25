/**
 * DWEC: Ejemplo 1. Encontrar los errores del script
 * @author Maria R. F.
 * 
 * Realiza un script que se encargue de leer 10 nombres por pantalla y los inserte en un array. 
 * Posteriormente, los nombres se mostrarán una unica ventana emergente
 */

/* Encontrar los errores que tiene el siguiente script, usando las herramientas de depuración de Google Chrome */

var nombres=[];

var NUMERO_NOMBRES=10;

function anadirnombres(nombres, NUMERO_NOMBRES) {

    for(let i = 0; i < NUMERO_NOMBRES; i++) {

        let nombre = prompt("Escriba aqui el nombre")
        nombres[i] = nombre;
    }
    return nombres;
}

let resultado = anadirnombres(nombres, NUMERO_NOMBRES);
console.log(resultado);


/* AVISOS (WARNING) */
console.warn("Mensaje warn");
/* ERRORES */
console.error("Mensaje err");
/* INFORMACIÓN (LOG) */
console.log("Mensaje log");
/* DEPURACIÓN (DEBUG) */
console.debug("Mensaje deb");
 

