/* Hacer un arreglo multidimensional
a uno plano */
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

let array1 = [1, 2, 3, 4, 5];
console.log(array1.flatMap((value) => [value, value * 2]));

/* Quitar espacios vacios de un
string al princio o al final */
let hello = "         hello world";
console.log(hello);
console.log(hello.trimStart());

let hello2 = "hello world         ";
console.log(hello2);
console.log(hello2.trimEnd());

/* Ya no es necesario pasar
como parametro al error en el catch */
try {
} catch {}

/* Construir un objeto
a partir de un arreglo de clave valor */
let entries = [
  ["name", "oscar"],
  ["age", 32],
];

console.log(Object.fromEntries(entries));

/* Agregar la descripcion a un objeto */
let mySymbol = "My symbol";
let symbol = Symbol(mySymbol);

console.log(symbol.description);
