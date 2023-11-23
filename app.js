
/* 
const fs = require('fs');

fs.readFile('datos.json', (err, data) => {

if (err) throw err;

const objetoJSON = JSON.parse(data);

console.log(objetoJSON);

});
 */

function readTitles() {
    fetch('./archive.json')
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data.title);
/*         data.results.forEach(element => {
            console.log(element.title); */
        });
    }     
    /* catch (error) => console.error('Ha ocurrido un error', (error))      */


readTitles();


/* data.results.map(item) {
    const content = document.createElement('div');
    content.innerHTML = 


}
 */
    