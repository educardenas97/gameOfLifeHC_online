export default class View{
    constructor(){
        
    }

    //Create a function to draw the table from the bidiemental array
    drawTable(array){
        let table = document.getElementById("table");
        for (let i = 0; i < array.length; i++) {
            let row = View.drawRow(table, i);
            for (let j = 0; j < array[i].length; j++) {
                View.drawCell(array[i][j], j, row);
            }
        }
    }
    
    //Erase child nodes from the table
    eraseTable(){
        let table = document.getElementById("table");
        while (table.hasChildNodes()) {
            table.removeChild(table.lastChild);
        }
    }
    
    static drawRow(table, index){
        let row = table.insertRow(index);
        return row;
    }

    static drawCell(text, index, row){
        var cell = row.insertCell(index);
        if (text === false) {
            cell.innerHTML = " ";
        }else {
            cell.innerHTML = ".";
        }
    }

    //Create a function to add a delay to the execution
    addDelay(ms){
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
}