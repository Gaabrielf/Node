const axios = require('axios');
// const { writeFile } = require('fs').promises;

const util = require("util");
const fs = require("fs");

const writeFile = util.promisify(fs.writeFile);

const lista = "lista";
const dodaj = "dodaj";

if (process.argv.length === 2) {
  console.log(
    "Wpisz słowo 'lista' jako parametr wywołania, aby wyświetlić listę TODO. Wpisz słowo 'dodaj' oraz 'Treść zadania do wykonania' jako parametry wywołania, aby dodać zadanie do wykonania."
  )
} else if (process.argv[2] === lista) {
const readFile = async filePath => {
  try {
    const data = await fs.promises.readFile(tasks, 'utf8')
    console.log(data);
  }
}} else if (process.argv[2] === dodaj) {
  let data = process.argv[3];
 getTask(process.argv[3])
    .then(tasks => {
        console.log("Tasks:");
        tasks.forEach(task => console.log(tasks.title));
        return saveFile(`${filename}.json`, tasks);
    })
    .catch(error => {
        console.log(Error);
    });
} else {
  console.log("Something went wrong");
}

const saveFile = (filename, data) => {
    return writeFile(filename, JSON.stringify(data))
        .then(() => 'File saved');
}

let filename;

// getTask(process.argv[3])
//     .then(tasks => {
//         console.log("Tasks:");
//         tasks.forEach(task => console.log(tasks.title));
//         return saveFile(`${filename}.json`, tasks);
//     })
//     .catch(error => {
//         console.log(Error);
//     });