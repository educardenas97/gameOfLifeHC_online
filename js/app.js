import Core from './core.js';
import Render from './render.js';
import Input from './input.js';

let delayInput = new Input("speed-input", "speed-value");
let dimensionsInput = new Input("dimension-input", "dimension-value");
let dimension = parseInt(dimensionsInput.getValue());

let startCore = (dimension) => {
    let game = new Core(dimension);
    /*Static element
    
    game.setField(1, 1, true);
    game.setField(1, 2, true);
    game.setField(1, 3, true);*/
    //Dinamic element
    /*
    game.setField(1,1,true);
    game.setField(2,2,true);
    game.setField(2,3,true);
    game.setField(1,3,true);
    game.setField(0,3,true);
    */

    /*game.setField(0,1,true);
    game.setField(1,0,true);
    game.setField(2,0,true);
    game.setField(2,1,true);
    game.setField(2,2,true);
    game.setField(5,1,true);
    game.setField(5,2,true);
    game.setField(6,0,true);
    game.setField(6,2,true);
    game.setField(7,2,true);
    */
    return game;
    
}

let gameControl = async () => {
    let render = new Render();
    let game = startCore(dimension);    
    
    while(true) {
        render.drawTable(game);
        game.update();
        await render.addDelay(delayInput.getValue()*1000);
        render.eraseTable();
        if (dimension !== parseInt(dimensionsInput.getValue())) {
            dimension = parseInt(dimensionsInput.getValue());
            game = startCore(dimension);
        }
    }
}

gameControl();