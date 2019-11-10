import {gameboard} from '../Constants';

class Queen {
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

        for (let i = 1; i < 8; i++) {

            if (this.x + i < 8 && this.y + i < 8) {

                MoveSet.push(gameboard[this.y + i][this.x + i])
            }
            if (this.x - i > -1 && this.y - i > -1) {
                MoveSet.push(gameboard[this.y - i][this.x - i])
            }
            if (this.x - i < 8 && this.y + i < 8 && this.x - i > -1) {
                MoveSet.push(gameboard[this.y + i][this.x - i])
            }
            if (this.x + i > -1 && this.x + i < 8 && this.y - i > -1) {
                MoveSet.push(gameboard[this.y - i][this.x + i])
            }

        }
        for (let i = 0; i < 8; i++) {

            MoveSet.push(gameboard[i][this.x])
            MoveSet.push(gameboard[this.y][i])
        }

        this.moveSet = MoveSet
        return MoveSet
    };

    /**
     * reset the moveSet arr
     */
    resetMoves() {
        this.moveSet = this.getAllPosibleMoves()
        console.log(this.moveSet)
    }

    getName() {
        return (this.name);
    }


}

export default Queen;