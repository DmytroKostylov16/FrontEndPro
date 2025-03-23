const tableContainer = document.querySelector('#tableContainer');
const tableBtn = document.querySelector('#addTableBtn');
tableBtn.textContent = 'Add Table';
tableBtn.style.marginTop = '10px';

function createPythagorasTable(size) {
    const createTable = document.createElement("table");
    tableContainer.style.width = `${size * 50}px`;

    for (let i = 0; i < size; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < size; j++) {
            let cell = document.createElement("td");
            cell.textContent = `${(i + 1) * (j + 1)}`;

            cell.style.border = "1px solid black";
            cell.style.textAlign = "center";
            cell.style.width = `25px`
            cell.style.height = `25px`;

            row.appendChild(cell);
        }
        createTable.appendChild(row);
    }
    tableContainer.appendChild(createTable);
}

tableBtn.addEventListener("click", () => {
    createPythagorasTable(10)
});