const fs = require("fs"); 

let file = process.argv[2]; 
  
if (process.argv.length < 3) {
    console.log('Zbyt mało parametrów!');
} else if (process.argv.length > 3) {
    console.log('Zbyt dużo parametrów!');
}
else {
    fs.stat(file, (err, stats) => {
    if (err) throw err;
    console.log("Czas utworzenia: ", stats.birthtime); 
    console.log("Czas modyfikacji: ", stats.mtime);
    console.log("Rozmiar w bajtach: ", stats.size);
});
    }; 

//Wywołanie "node 3.js a.txt"