import Core from './core.js';
import View from './view.js';




let main = async () => {
    let game = new Core(50);
    let view = new View();
    console.log(view);
    /*Static element

    game.setField(1, 1, true);
    game.setField(1, 2, true);
    game.setField(1, 3, true);*/
    //Dinamic element
    
    game.setField(21,21,true);
    game.setField(22,22,true);
    game.setField(22,23,true);
    game.setField(21,23,true);
    game.setField(20,23,true);


    while(true) {
        view.drawTable(game.gameStatus);
        game.update();
        await view.addDelay(1000);
        view.eraseTable();
    }
        
}

main();