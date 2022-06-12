//Clase 15 - Viernes 10 de junio de 2022 - EJERCICIOS DE REPASO
/*
EJERCICIO 1 - Consigna: 
Escribe una función iterativa que
dado un número entero n, retorne un array
con todos los números enteros
en orden decreciente desde n a 1. 
*/

let miNumero: number = Number(prompt("Ingrese el número..."));

function invertirArreglo(numero: number): number[] {
  let indice: number;
  let miArreglo: number[] = new Array(numero);

  for (indice = 0; indice < miArreglo.length; indice++) {
    miArreglo[indice] = numero;
    numero--;
    console.log(miArreglo[indice]);
  }
  return miArreglo;
}
console.log(invertirArreglo(miNumero));
