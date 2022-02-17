var colors = require('colors');

const text = process.argv[2];

if (process.argv.length < 3) {
    console.log('Zbyt mało parametrów!');
} else if (process.argv.length > 3) {
    console.log('Zbyt dużo parametrów!');
}
else {
    console.log(text.rainbow);
    }


// Wywołanie: "node 2.js Gabriela" -> wyświetla Gabriela
// Wywołanie: "node 2.js" -> wyświetla 'Zbyt mało parametrów!'
// Wywołanie: "node 2.js Gabriela Siemiaszko" -> wyświetla 'Zbyt dużo parametrów!'