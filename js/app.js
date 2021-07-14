import Core from './core.js';
import View from './view.js';

const dimentions = 30;
const delay = 1000;


let main = async () => {
    let game = new Core(dimentions);
    let view = new View();
    console.log(view);
    /*Static element

    game.setField(1, 1, true);
    game.setField(1, 2, true);
    game.setField(1, 3, true);*/
    //Dinamic element
    
    game.setField(1,1,true);
    game.setField(2,2,true);
    game.setField(2,3,true);
    game.setField(1,3,true);
    game.setField(0,3,true);


    while(true) {
        view.drawTable(game.gameStatus);
        game.update();
        await view.addDelay(delay);
        view.eraseTable();
    }
        
}

main();