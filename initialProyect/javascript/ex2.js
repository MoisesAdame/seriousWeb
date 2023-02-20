// Author: Moisés Adame-Aguilar
// Date: December 17, 2022
// Descrption: Automated table creation
function generateTable(data){
    var table = document.createElement("TABLE");
    table.setAttribute("id", "table_data");
    document.body.appendChild(table);
    
    for (const key of Object.keys(data)){
        var y = document.createElement("TR");
        y.setAttribute("id", "myTr" + key);
        document.getElementById("table_data").appendChild(y);
    
        var z = document.createElement("TD");
        var t = document.createTextNode(key + ": ");
        z.appendChild(t);
        document.getElementById("myTr" + key).appendChild(z);

        var z = document.createElement("TD");
        var t = document.createTextNode(data[key]);
        z.appendChild(t);
        document.getElementById("myTr" + key).appendChild(z);
    };
    document.getElementById("tableData").appendChild(table)
}

webData = {pageName: document.location.href, pageHistory: history.length}

function myFunction(){
    generateTable(webData)
}