let chemicalsData = [
    {
        "id": 1,
        "chemical name": "Ammonium Persulfate",
        "Vender": "LG Chem",
        "Density": 3525.92,
        "Viscosity": 60.63,
        "Packaging": "Bag",
        "Pack size": 100.00,
        "Unit": "kg",
        "Quantity": 6495.18

    },
    {
        "id": 2,
        "chemical name": "Caustic Potash",
        "Vender": "Formosa",
        "Density": 3172.15,
        "Viscosity": 48.22,
        "Packaging": "Bag",
        "Pack size": 100.00,
        "Unit": "kg",
        "Quantity": 8751.90

    },
    {
        "id": 3,
        "chemical name": "Dimethylaminopropylamino",
        "Vender": "LG Chem",
        "Density": 8435.37,
        "Viscosity": 12.62,
        "Packaging": "Barrel",
        "Pack size": 75.00,
        "Unit": "L",
        "Quantity": 5964.61

    },
    {
        "id": 4,
        "chemical name": "Mono Ammonium Phosphate",
        "Vender": "Sinopec",
        "Density": 1597.65,
        "Viscosity": 76.51,
        "Packaging": "Bag",
        "Pack size": 105.00,
        "Unit": "kg",
        "Quantity": 8183.73

    },
    {
        "id": 5,
        "chemical name": "Ferric Nitrate",
        "Vender": "DowDupont",
        "Density": 364.04,
        "Viscosity": 14.90,
        "Packaging": "Bag",
        "Pack size": 105.00,
        "Unit": "kg",
        "Quantity": 4154.33

    },
    {
        "id": 6,
        "chemical name": "n-Pentane",
        "Vender": "Sinopec",
        "Density": 4535.26,
        "Viscosity": 66.76,
        "Packaging": "N/A",
        "Pack size": "N/A",
        "Unit": "t",
        "Quantity": 6272.34

    },
    {
        "id": 7,
        "chemical name": "Glycol Ether PM",
        "Vender": "LG Chem",
        "Density": 6495.18,
        "Viscosity": 72.12,
        "Packaging": "Bag",
        "Pack size": 250.00,
        "Unit": "kg",
        "Quantity": 8749.54

    },
    {
        "id": 8,
        "chemical name": "Sodium Chloride",
        "Vender": "Formosa",
        "Density": 392.12,
        "Viscosity": 13.00,
        "Packaging": "Bag",
        "Pack size": 150.00,
        "Unit": "kg",
        "Quantity": 6231.12

    },
    {
        "id": 9,
        "chemical name": "Potassium Hydroxide",
        "Vender": "LG Chem",
        "Density": 200.14,
        "Viscosity": 16.2,
        "Packaging": "Bag",
        "Pack size": 100.00,
        "Unit": "kg",
        "Quantity": 2302.06

    },
    {
        "id": 10,
        "chemical name": "Sulfuric Acid",
        "Vender": "Sinopec",
        "Density": 401.55,
        "Viscosity": 12.42,
        "Packaging": "Bag",
        "Pack size": 105.00,
        "Unit": "kg",
        "Quantity": 3022.23

    },
    {
        "id": 11,
        "chemical name": "Calcium Carbonate",
        "Vender": "LG Chem",
        "Density": 522.20,
        "Viscosity": 15.32,
        "Packaging": "Barrel",
        "Pack size": 75.00,
        "Unit": "L",
        "Quantity": 8232.23

    },
    {
        "id": 12,
        "chemical name": "Ammonium Nitrate",
        "Vender": "Sinopec",
        "Density": 231.87,
        "Viscosity": 10.22,
        "Packaging": "Bag",
        "Pack size": 250.00,
        "Unit": "kg",
        "Quantity": 6666.67

    },
    {
        "id": 13,
        "chemical name": "n-butane",
        "Vender": "LG Chem",
        "Density": 532.92,
        "Viscosity": 14.14,
        "Packaging": "Barrel",
        "Pack size": 75.00,
        "Unit": "L",
        "Quantity": 8763.20

    },
    {
        "id": 14,
        "chemical name": "Ethanol",
        "Vender": "Formosa",
        "Density": 345.58,
        "Viscosity": 18.35,
        "Packaging": "Bag",
        "Pack size": 150.00,
        "Unit": "kg",
        "Quantity": 7425.25

    },
    {
        "id": 15,
        "chemical name": "Hydrogen Peroxide",
        "Vender": "Sinopec",
        "Density": 670.28,
        "Viscosity": 11.44,
        "Packaging": "N/A",
        "Pack size": "N/A",
        "Unit": "t",
        "Quantity": 6789.12

    },


]


const table = document.getElementById("chemicalData");

const headers = Object.keys(chemicalsData[0]);

//creating table header row
const headerRow = document.createElement("tr");

const th = document.createElement("th");
const i = document.createElement("i");
i.classList.add("fa-solid", "fa-check", "check");
th.appendChild(i);
headerRow.appendChild(th);

headers.forEach((headerText, index) => {
    const header = document.createElement("th");
    if (headerText == "id") {
        header.textContent = " ";
    }
    else if (headerText == "Density" || headerText == "Viscosity") {
        const units = document.createElement("span");
        if (headerText == "Density") {
            units.innerHTML = 'g/m<sup>3</sup>'
        }
        else {
            units.innerHTML = 'm<sup>2</sup>/s';
        }
        units.classList.add("units");
        header.textContent = headerText;
        header.appendChild(units);
    }
    else if (headerText == "Pack size") {
        header.classList.add("packSize");
        header.innerHTML = `Pack<span>size</span>`
    }
    else {
        header.textContent = headerText;
    }

    header.onclick = function () {
        sortTable(index + 1);
        console.log(index + 1)

    }

    headerRow.appendChild(header);
})

table.appendChild(headerRow);


//Creating table rows for each chemical
chemicalsData.forEach(chemical => {
    const row = document.createElement('tr');
    const checkMark = document.createElement("td");
    const i = document.createElement("i");
    i.classList.add("fa-solid", "fa-check");
    checkMark.appendChild(i);
    row.appendChild(checkMark);

    Object.entries(chemical).forEach(([key, value]) => {
        const cell = document.createElement("td");


        if (key === "Density" || key === "Viscosity" || key === "Quantity") {
            const div = document.createElement("div");
            div.classList.add("box");
            div.textContent = value;

            cell.appendChild(div);
        }
        else {
            cell.textContent = value;
        }

        row.appendChild(cell);
    });

    table.appendChild(row);
})



// Sorting Functionality
function sortTable(n) {
    let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

    switching = true;
    dir = "asc"; // Set the sorting direction to ascending

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            const headerText = headers[n - 1];
            console.log(headerText)
            let xValue, yValue;

            // Check if the column is Density, Viscosity, or Quantity for numeric comparison
            if (headerText === "Density" || headerText === "Viscosity" || headerText === "Quantity" || headerText == "id") {
                xValue = parseFloat(x.textContent);

                yValue = parseFloat(y.textContent);

            } else {
                // string sorting
                xValue = x.textContent.toLowerCase();


                yValue = y.textContent.toLowerCase();

            }

            // Perform comparison based on direction
            if (dir === "asc") {
                if (xValue > yValue) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === "desc") {
                if (xValue < yValue) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            // If no switching has been done AND the direction is "asc",
            // set the direction to "desc" and run the while loop again.
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}




//Top Menu Functionalities

// adding class "selected" to row that is clicked
table.addEventListener('click', (e) => {
    const clickedRow = e.target.closest('tr');
    if (clickedRow && clickedRow.rowIndex !== 0) {
        document.querySelectorAll('tr').forEach(row => {
            row.classList.remove('selected');


            const existingEditIconDiv = document.querySelector(".topMenu").querySelector(".edit");
            if (existingEditIconDiv) {
                existingEditIconDiv.remove();
            }
        });

        //adding edit icon in top Menu
        clickedRow.classList.add('selected');
        const editIconDiv = document.createElement("div");
        const editIcon = document.createElement("i");
        editIcon.classList.add("fa-solid", "fa-pen-to-square", "edit")
        editIconDiv.appendChild(editIcon);
        document.querySelector(".topMenu").appendChild(editIcon);

        editIcon.addEventListener("click", () => {
            alert("row edit");
        })

    }


});






//Adding new row
const addIcon = document.querySelector(".add");
addIcon.addEventListener("click", () => {
    let row = table.insertRow(-1);

    // Creating checkmark cell
    let checkMarkCell = document.createElement("td");
    let checkMarkIcon = document.createElement("i");
    checkMarkIcon.classList.add("fa-solid", "fa-check");
    checkMarkCell.appendChild(checkMarkIcon);
    row.appendChild(checkMarkCell);

    // Creating empty cells
    headers.forEach((header) => {
        let cell = row.insertCell();
        cell.textContent = " ";
    });
})

//move row down
const rowDown = document.querySelector(".moveDown");
rowDown.addEventListener("click", () => {
    const selectedRow = document.querySelector('tr.selected');
    if (selectedRow && selectedRow.rowIndex !== 0 && selectedRow.nextElementSibling) {
        table.insertBefore(selectedRow.nextElementSibling, selectedRow);
    } else {
        alert("Cannot move this row down");
    }
})

//move row up
const rowUp = document.querySelector(".moveUp");
rowUp.addEventListener("click", () => {
    const selectedRow = document.querySelector('tr.selected');
    if (selectedRow && selectedRow.rowIndex > 1) {
        table.insertBefore(selectedRow, selectedRow.previousElementSibling);
    } else {
        alert("Cannot move this row up");
    }
})

//delete row
const deleteRow = document.querySelector(".delete");
deleteRow.addEventListener("click", () => {
    const selectedRow = document.querySelector('tr.selected');
    if (selectedRow && selectedRow.rowIndex !== 0) {
        table.deleteRow(selectedRow.rowIndex);
    } else {
        alert("Please select a row to delete");
    }
})

//refresh data
const refresh = document.querySelector(".refresh");
refresh.addEventListener("click", () => {
    alert("data refreshed");
})

//save data 
const save = document.querySelector(".save");
save.addEventListener("click", () => {
    alert("data saved");
})


