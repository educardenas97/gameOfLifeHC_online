export default class Render{
    constructor(){
        
    }

    //Create a function to draw the table from the bidiemental array
    drawTable(game){
        let array = game.gameStatus;
        let table = document.getElementById("table");
        for (let i = 0; i < array.length; i++) {
            let row = Render.drawRow(table, i);
            for (let j = 0; j < array[i].length; j++) {
                let cell = Render.drawCell(array[i][j], j, row);
                Render.addFunction(cell, game, i, j);
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

    //Implement a function to add click events to the cells
    static addFunction(cell, game, i, j){
        cell.addEventListener("click", function(event){
            game.setField(i, j, cell.getAttribute("value") === "alive" ? false : true);
            cell.setAttribute("value", cell.getAttribute("value") === "alive" ? "dead" : "alive");
        });
    }

    
    static drawRow(table, index){
        let row = table.insertRow(index);
        return row;
    }

    static drawCell(text, index, row){
        let cell = row.insertCell(index);
        cell.className = "cell";
        if (text === false) {
            cell.innerHTML = " ";
            cell.setAttribute("value", "dead");
            return cell;
        }else {
            cell.innerHTML = " ";
            cell.setAttribute("value", "alive");
            return cell;
        }
    }

    //Create a function to add a delay to the execution
    addDelay(ms){
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
}