export default class Core{
    constructor(dimention) {
        this.dimention = dimention;
        this.gameStatus = Array(dimention);
        Core.create2dArray(this.gameStatus);
        this.copy = Core.copyArray(this.gameStatus);
    }
    
    setField(x, y, value) {
        this.gameStatus[x][y] = value;
    }
    
    update(){
        this.copy = Core.copyArray(this.gameStatus);
        for (let x = 0; x < this.gameStatus.length; x++) {
            for (let y = 0; y < this.gameStatus.length; y++) {
                let sum = Core.sumElements(this.gameStatus, x, y);
                this.copy[x][y] = sum === 3 && this.gameStatus[x][y] === false ? true : this.copy[x][y];
                this.copy[x][y] = (sum < 2 || sum > 3) && this.gameStatus[x][y] === true ? false : this.copy[x][y];
            }
        }
        this.gameStatus = Core.copyArray(this.copy);
    }
    
    static copyArray(array){
        let copy = Array(array.length);
        for (let x = 0; x < array.length; x++) {
            copy[x] = Array(array.length);
            for (let y = 0; y < array.length; y++) {
                copy[x][y] = array[x][y];
            }
        }
        return copy;
    }
    
    static create2dArray(array){
        for (let x = 0; x < array.length; x++) {
            array[x] = Array(array.length);
            for (let y = 0; y < array.length; y++) {
                array[x][y] = false;
            }
        }
    }
    
    
    static getIndex(element, dimention) {
        if (element < 0) {
            return dimention - 1;
        } else if (element >= dimention) {
            return 0;
        } else {
            return element;
        }
    }
    
    static sumElements(array, x, y){
        let sum = 0;
        for (let i = x-1; i <= x+1; i++) {
            for (let j = y-1; j <= y+1; j++) {
                if (i !== x || j !== y) {
                    sum += array[Core.getIndex(i, array.length)][Core.getIndex(j, array.length)];
                }
            }
        }
        return sum;
    }
    
}