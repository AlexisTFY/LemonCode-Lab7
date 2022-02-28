// * * * * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * *  Ejercicio 1º * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * * * * *
console.log('* * * * * * * *  Ejercicio 1º * * * * * * * * * *');
console.log('* * * * * * * * * * * * * * * * * * * * * * * * *');

const patter = /^([A-Z]{2})(\d{2}\s?)(\d{4}\s?){4}\d{4}$/;

var ibanList = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

for (iban of ibanList) {
  console.log('El código IBAN: ' + iban + ' es ' + patter.test(iban));
  console.log(iban.match(patter));
  console.log('El código de páis es: ' + iban.match(patter)[1]);
  console.log('El dígito de control es : ' + iban.match(patter)[2]);
  console.log(' * * * * * * * * * ');
}

// * * * * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * *  Ejercicio 2º * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * * * * *

console.log('* * * * * * * *  Ejercicio 2º * * * * * * * * * *');
console.log('* * * * * * * * * * * * * * * * * * * * * * * * *');

const patter2 = /^(\d{4})(\s|-)?([A-Z]{3})$/;
var carRegistrationList = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

for (carRegistration of carRegistrationList) {
  console.log('La matrícula: ' + carRegistration + ' es ' + patter2.test(carRegistration));
  console.log('Los números de la matricula son : ' + carRegistration.match(patter2)[1] + ' y las letras son : ' + carRegistration.match(patter2)[3]);
  console.log(' * * * * * * * * * ');
}

// * * * * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * *  Ejercicio 3º A * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * * * * *

console.log('* * * * * * * *  Ejercicio 3º A* * * * * * * * * *');
console.log('* * * * * * * * * * * * * * * * * * * * * * * * *');

const patter3 = /^<img src="(.{1,}\.[a-z]{3,4})"\/>$/;
var url = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';

console.log('El patrón para la cadena ' + url + ' es ' + patter3.test(url));
console.log(url.match(patter3)[1]);


// * * * * * * * * * * * * * * * * * * * * * * * * *
// * * * * * * * *  Ejercicio 3º B * * * * * * * * *
// * * * * * * * * * * * * * * * * * * * * * * * * *

console.log('* * * * * * * *  Ejercicio 3º B * * * * * * * * *');
console.log('* * * * * * * * * * * * * * * * * * * * * * * * *');

var images = document.getElementsByTagName('img');

for (img of images) {
  console.log(img.currentSrc);
}


