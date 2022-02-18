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
    const data = await fs.promises.readFile(lista.txt, 'utf8')
    console.log(data);
  }}
} else if (process.argv[2] === dodaj) {
  let data = process.argv[3];
  writeFile("lista.txt", data)
    .then(() => {
      console.log("Task added");
    })
    .catch((error) => {
      console.log("Error saving task", error);
    });
} else {
  console.log("Something went wrong");
}
