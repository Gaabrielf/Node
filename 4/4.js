const fs = require('fs');
const request = require('request');

fs.readFile('data.json', 'utf-8', (error, data) =>{
    if (error) {
        console.log('Problem z odczytaniem pliku');
    } else {
        const dataFromFile = JSON.parse(data);
        console.log(dataFromFile.number);
        console.log(dataFromFile.filename);

        const url = `http://numbersapi.com/${dataFromFile.number}`;
        
        request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
        const text = JSON.stringify(body);

        console.log(text);

        fs.writeFile(`${dataFromFile.filename}`, text, (error) => {
            if (error) {
            console.log('Błąd zapisu do pliku');
            } else {
            console.log('Plik został zapisany');
            }
        });
        } else {
        console.log('Nie można otworzyć strony');
        }
        });
    }
});

