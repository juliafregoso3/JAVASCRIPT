//
//* LINKED LISTS

//?  1. Homework M1 - Estructura de Datos II - Ejercicio 1

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);

  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 

  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  let nodo = new Node(value);
  let current = this.head;

  if (!current) {
    this.head = nodo;
    return value;
  } else {
    while (current.next) current = current.next;
    current.next = nodo;
    return value;
  }
};

LinkedList.prototype.remove = function () {
  let current = this.head;
  //Si no hay nodos (lista vacía)
  if (!current) return null;
  //Un sólo nodo
  if (!current.next) {
    let aux = current.value;
    this.head = null;
    return aux;
  }
  //Más de un nodo
  while (current.next.next) {
    current = current.next;
  }
  let aux = current.next.value;
  current.next = null;
  return aux;
};

LinkedList.prototype.search = function (arg) {
  //el argumento recibido puede ser un valor o un callback
  let current = this.head;
  if (!current) return false;
  //tengo una funcion
  if (typeof arg === "function") {
    while (current) {
      if (arg(current.value)) return current.value;
      else current = current.next;
    }
    return null;
  } else {
    while (current) {
      if (current.value === arg) return arg;
      else current = current.next;
    }
    return null;
  }
};

//? 2. CheckPoint Películas Problema 07

// Recibiste una lista con todas las películas que están disponibles en este momento. El objetivo es poder ordenarlas
// de una forma más intuitiva. Para esto tendrás que crear agregar un nuevo método llamado "encontrarPeliculas" al
// prototipo de LinkedList. Este método debe retornar una nueva lista en la que se incluyan todas aquellas películas
// que tengan el mismo número de estantería que recibirás por parámetro.

// ⛔️ IMPORTANTE ⛔️
// 1) Tienes que retornar una nueva LinkedList con los elementos que coincidan con el número recibido por parámetro.
// 2) Si no se encuentran elementos con el mismo número, debes retornar false.

// 📝 EJEMPLO 📝
// LISTA ---> Head ➡ (2) ➡ (4) ➡ (6) ➡ (7) ➡ (3) ➡ (3) ➡ (4) ➡ (1)
// INPUT ---> 3
// OUTPUT --> Head ➡ (3) ➡ (3)

LinkedList.prototype.encontrarPeliculas = function (numEstanteria) {
  let lista1 = new LinkedList();
  let current = this.head;

  while (current) {
    if (current.value === numEstanteria) {
      lista1.add(current.value);
    }
    current = current.next;
  }
  if (lista1.head)
    return lista1; //si hay nodos en la lista (que estuvieron repetidos), regresar la lista
  else return false;
};

//? 3. CheckPoint Películas Problema 08

// Como las listas nos están siendo útiles para organizar nuestras películas, vamos a pedirte que crees un nuevo método
// en el prototipo de "LinkedList" para que podamos generarlas más rápido. El método "generarLista" recibirá por parámetro
// el número de la cantidad de nodos (longitud) que tiene que tener la lista.

// ⛔️ IMPORTANTE ⛔️
// 1) Cada número en la lista debe incrementarse +1 respecto al anterior comenzando desde el 1.
// 2) Debes retornar una LinkedList con la misma longitud que recibes por parámetro.

// 📝 EJEMPLO 📝
// INPUT ---> 4
// OUTPUT --> Head ➡ (1) ➡ (2) ➡ (3) ➡ (4)

LinkedList.prototype.generarLista = function (longitud) {
  //   let listaGenerada = new LinkedList();

  for (let i = 1; i <= longitud; i++) {
    this.add(i);
  }
  return this;
};
