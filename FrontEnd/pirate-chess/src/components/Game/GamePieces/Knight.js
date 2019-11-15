import {gameboard} from '../Constants';

class Knight {
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
        for (let i = 0; i < 8; i++) {
            break
        }
        /**
         * moves down
         */
        if (this.y < 6) {
            if (this.x < 7) {
                MoveSet.push(gameboard[this.y + 2][this.x + 1])
            }
            if (this.x > 0) {
                MoveSet.push(gameboard[this.y + 2][this.x - 1])
            }
        }
        /**
         * moves up
         */
        if (this.y > 1) {
            if (this.x < 7) {
                MoveSet.push(gameboard[this.y - 2][this.x + 1])
            }
            if (this.x > 0) {
                MoveSet.push(gameboard[this.y - 2][this.x - 1])
            }
        }
        /**
         * moves right
         */
        if(this.y < 7 && this.x < 6){
            MoveSet.push(gameboard[this.y + 1][this.x + 2])
        }
        if(this.y > 0 && this.x < 6){
            MoveSet.push(gameboard[this.y - 1][this.x + 2])
        }
        /**
         * moves left
         */
        if(this.y < 7 && this.x > 1){
            MoveSet.push(gameboard[this.y + 1][this.x - 2])
        }
        if(this.y > 0 && this.x > 1){
            MoveSet.push(gameboard[this.y - 1][this.x - 2])
        }

        return MoveSet
    };

    /**
     * reset moveSet arr
     */
    resetMoves() {
        this.moveSet = this.getAllPosibleMoves()
       // console.log(this.moveSet)
    }

    getName() {
        return (this.name);
    }


}

export default Knight;