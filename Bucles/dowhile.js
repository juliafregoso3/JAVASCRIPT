//* FreecodeCamp Basic Javascript
//?Cambia el bucle while en el código por un bucle do...while. El bucle solo enviará el número 10 a myArray, e i será igual a 11 cuando tu código haya terminado de ejecutarse.

// Configuración
const myArray = [];
let i = 10;

// Cambia solo el código debajo de esta línea
do {
  myArray.push(i);
  i++;
} while (i < 5);

//*Prepcourse Henry
function doWhile(num) {
  // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
  // Retornar el valor final.
  // Utilizar el bucle Do-While.
  // Tu código:
  let a = num;
  let i = 0;

  do {
    i++;
    a = a + 5;
  } while (i < 8);
  return a;
}
