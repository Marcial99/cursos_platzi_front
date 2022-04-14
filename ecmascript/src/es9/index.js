/* Operador de propagación
nos permite concatenar objetos */
const obj = {
  name: "oscar",
  age: 32,
  country: "MX",
};

let { country, ...all } = obj;
console.log(all);

const obj1 = {
  name: "Oscar",
  age: 32,
};

const obj2 = {
  ...obj1,
  country: "Mx",
};

console.log(obj2);

/* Promesas finally
nos permite ejecutar un bloque de codigo al
finalizar la promesa se con o sin error */
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("helloWorld"), 3000)
      : reject(new Error("Test Errror"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Jaja simon puta"));

/* Regex
muy util para trabajar con fechas */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);

/* 🌟 Otra de las nuevas características de 
ES9 en la captura de grupos es nombrar nuestros 
grupos para encontrarlos de una forma más fácil.
 El código que hace el profe Oscar al final podría 
 resumirse en lo siguiente:
 */
const regexData2 = /(?<year2>[0-9]{4})-(?<month2>[0-9]{2})-(?<day2>[0-9]{2})/;
const match2 = regexData2.exec("2018-04-20");
const { year2, month2, day2 } = match2.groups;

console.log(year2, month2, day2);
