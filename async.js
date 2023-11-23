
// *** EJERCICIO 1: usando ".then" ***

function readTitles() {
    fetch('./archive.json')
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data.title);
       data.results.forEach(element => {
            console.log(element.title);
        });
    })
    .catch (error => {
        console.error('Ha ocurrido un error', (error));
    });
}
readTitles();

// *** EJERCICIO 1: usando función asíncrona ***

const printTitles = async () => {
    const response = await fetch('./archive.json');
    const data = await response.json();

    // Imprimir títulos en la consola
    const titles = data.results.map(result => result.title);
    console.log(titles);
}
printTitles();

//  *** EJERCICIO 2 ***

const createHtmlTable = async() => {
    const response = await fetch('./archive.json');
    const data = await response.json();    
    const tableBody = document.getElementById('tableBody');    
    // Obtener datos primer elemento
    const tableHeaders = Object.keys(data.results[0]);
    // Crear encabezados
    const headerRow = document.createElement('tr');
    tableHeaders.forEach(header => {
        const th =document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);       
    });
    tableBody.appendChild(headerRow);

    data.results.forEach(result => {
        // Crear filas
        const row = document.createElement('tr');

        tableHeaders.forEach(header => {
            //crear celdas
            const cell = document.createElement('td');
            cell.textContent = result[header];
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });    
}
createHtmlTable();
