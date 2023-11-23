
/* 
const fs = require('fs');

fs.readFile('datos.json', (err, data) => {

if (err) throw err;

const objetoJSON = JSON.parse(data);

console.log(objetoJSON);

});
 */

function readJson() {

    fetch("archive.json")
    .then((Response) => Response.json())
    .then((data) => {
        data.results.forEach(element => {
            console.log(element.results);
        });
    });         
}

readJson();


/* data.results.map(item) {
    const content = document.createElement('div');
    content.innerHTML = 


}
 */
    