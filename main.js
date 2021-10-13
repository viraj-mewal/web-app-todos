add = document.getElementById("add");

function getandupdate(){
    console.log("Updating List...");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
        
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
        document.getElementById('title').value = "";
        document.getElementById('description').value = "";
    }
    update();
}
function update() {
    // Populate the table
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    let tableBody = document.getElementById("tablebody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
         <tr>
         <th scope="row">${index + 1}</th>
         <td>${element[0]}</td>
         <td>${element[1]}</td> 
         <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
         </tr>`;
    });
    tableBody.innerHTML = str;
}
add.addEventListener("click", getandupdate);
update();

function deleted(itemIndex) {
    console.log("Deleted", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Deleting item
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}

function clearStorage(){
    console.log("Clearing storage");
    localStorage.clear();
    update();
}


