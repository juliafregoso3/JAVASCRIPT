//* FreecodeCamp Basic Javascript

//? Reemplaza bucles usando recursión

//! Escribe una función recursiva, sum(arr, n), que devuelve la suma de los primeros elementos n de un arreglo arr.

function sum(arr, n) {
  // Cambia solo el código debajo de esta línea
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }

  // Cambia solo el código encima de esta línea
}
