'use strict';
const superWave = document.querySelector('.super-wave');
console.log (superWave);
superWave.classList.add ("new-class");
console.log (superWave);
// Ejercicio 2 con classList.add añado una clase, al poner en console.log el nombre de
//mi constante consigo verlo en la consola y así ver si esta aplicando la clase al span en este caso

//Ejercicio 3
const fruta = ( 2 * 5) + (3 * 2) + (0.5 * 4);
console.log (fruta);

// const quantityKiwis = 2;
// const priceKiwis = 5;
// console.log (quantityKiwis +priceKiwis );


//Ejercicio 4
const total = 128;
const friends = 9;
const extraAna = 2;
const resultado = (total - extraAna) / friends;
console.log ((total - extraAna) / friends);
// console.log ('Cada uno paga 14');
// console.log ('Ana paga 16');
console.log (`Cada uno paga ${resultado}`);

// //Ejercicio 5
const day = 24;
const year =365;
const agehtml = document.querySelector('.egehtml');
// agehtml = parseInt(agehtml.innerHTML); 
const resultado5 = (day * year) * parseInt(agehtml.innerHTML);
console.log (`Horas vividas ${resultado5}`);
//se aplica el parseInt en la multiplicacion porque es const y no variable

// //const day = 24;
// const year =365;
// let agehtml = document.querySelector('.egehtml'); al ser variable 
// agehtml = parseInt(agehtml.innerHTML); aplico aqui el parseInt y innerHTML
// const resultado5 = (day * year) * agehtml;
// console.log (`Horas vividas ${resultado5}`);





// console.log ((day * year) * age);
// console.log (`Horas vividas ${resultado5}`);
// console.log ('Horas vividas');



