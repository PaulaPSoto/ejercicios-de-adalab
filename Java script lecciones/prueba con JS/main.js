//Código JavaScript

// 'use strict'Hace que vaya mas rápido;
// Ejercicio 1-2
// document.querySelector('h1').innerHTML = 'Vamos a por el segundo módulo¡¡¡';   
// const officeAddress = 'Calle Agra';
// const officeAddressFriend = 'Calle de la Compañera';


// 'use strict';primera parte ejercicio 2
// // Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
// const titleElement = document.querySelector('.title');

// Cambiamos su contenido con innerHTML
// titleElement.innerHTML = 'Bienvenida';


// 'use strict'; Segunda parte ejercicio 2
// // Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
// const titleElement = document.querySelector('.title');

// // Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
// titleElement.innerHTML = titleElement.innerHTML + ' adalaber';

// 'use strict';
// const textElement = document.querySelector('.text');

// textElement.innerHTML = textElement.innerHTML + 'Mundo';
// ejercicio 3

// 'use strict';
// const titleElement = document.querySelector('.title');
// titleElement.innerHTML = titleElement.innerHTML + 'Compañera';
//ejercicio 4

//ejercicio 5
// 'use strict';
// const passwordElement = document.querySelector('.password');
// passwordElement.innerHTML = '**';

//ademas de cambiar el contenido, innerHTML, y como con JS podemos meter html dentro de 
//html, innerHTMLtambién nos va a permitir hacer esto
//si tenemos una ul vacía con class"list"y queremos introducir dos li cada uno con un enlace
//podemos hacerlo así:
// 'use strict';
// const listElement = document.querySelector('.list');

// const content = '<li><a href="#">Home</a></li><li><a href="#">Contact</a></li>';

// listElement.innerHTML = content;

// 'use strict';
// const textImg = document.querySelector('.textimg');
// const content = '<h1>Lorem insum</h1>';
// const image = '<img src="http://via.placeholder.com/350x150" alt ="imagen via placeholder"/>';
// const text = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>'

// //opcion1
// textImg.innerHTML = content;
// textImg.innerHTML = textImg.innerHTML+image;
// textImg.innerHTML = textImg.innerHTML+text;
//opcion2
// textImg.innerHTML = content + image;
// a=2+3+4;

// a=2;
// a=a+3;
// a=a+4;


//ejercicio 8
'use strict';
const nameList = document.querySelector('.list');
const content = '<li>1</li><li>2</li><li>3</li>';
 nameList.innerHTML = content;

const numberA = 3;
const numberB = 2;
let suma = numberA + numberB;
console.log ('la suma total es:',suma);


const welcomeParagraph = document.querySelector('.welcomeText');

// Logueo el contenido de la constante welcomeParagraph en la consola y compruebo que tiene asignado el elemento de HTML que espero antes de cambiar su contenido
console.log('welcomeParagraph: ', welcomeParagraph);

welcomeParagraph.innerHTML = 'Bienvenida Adalaber';

//crea una constante con el nomre nameList
//y le dice voy a trabajar con aquel que tenga
//la clase .list
//luego crea otra const con todo lo que va a incluir
//llama a la const name List y le dice añadir = content que 
//en este caso es li.....








