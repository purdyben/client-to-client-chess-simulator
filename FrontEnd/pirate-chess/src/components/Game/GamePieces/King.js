import {gameboard} from '../Constants';


class King {
    /**
     *
     * @param props
     * @constructor
     */
    constructor(props) {
        this.name = props.name
        this.x = props.x
        this.y = props.y
        this.moveSet = this.getAllPosibleMoves()
        this.resetMoves = this.resetMoves.bind(this)
    }
    /**
     * Creates the posible move for the piece storing all tiles in the MoveSet array, returns the array
     * @returns {[]}
     */
    getAllPosibleMoves() {
        var MoveSet = [];
        console.log(this,this.x, this.y,MoveSet)
        /**
         * down
         */
        if(this.y < 7 ){
            MoveSet.push(gameboard[this.y + 1][this.x])
        }
        /**
         * up
         */
        if(this.y > 0 ){
            MoveSet.push(gameboard[this.y - 1][this.x])
        }
        /**
         * right
         */
        if(this.x < 7){
            MoveSet.push(gameboard[this.y][this.x + 1])
        }
        /**
         * left
         */
        if(this.x > 0){
            MoveSet.push(gameboard[this.y][this.x - 1])
        }
        /**
         * top left
         */
        if(this.y > 0 && this.x > 0){
            MoveSet.push(gameboard[this.y - 1][this.x - 1])
        }
        /**
         * top right
         */
        if(this.y > 0 && this.x < 7){
            MoveSet.push(gameboard[this.y - 1][this.x + 1])
        }
        /**
         * bottom left
         */
        if(this.y < 7 && this.x > 0){
            MoveSet.push(gameboard[this.y + 1][this.x - 1])
        }
        /**
         * bottom right
         */
        if(this.y < 7 && this.x < 7){
            MoveSet.push(gameboard[this.y + 1][this.x + 1])
        }


        console.log(this,this.x, this.y,MoveSet)
        return MoveSet
    };
    /**
     * reset moveSet arr
     */
    resetMoves() {
        this.moveSet = this.getAllPosibleMoves()
        console.log(this.moveSet)
    }

    getName() {
        return (this.name);
    }

}

export default King;