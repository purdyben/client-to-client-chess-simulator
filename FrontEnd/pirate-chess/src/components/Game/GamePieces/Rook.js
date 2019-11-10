import {gameboard} from '../Constants';


class Rook {
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
            // if(gameboard[i][this.x].piece != null && gameboard[i][this.x].piece.name.substring(0,5) == ''){
            //     MoveSet.push(gameboard[i][this.x])
            //     break
            // }
            MoveSet.push(gameboard[i][this.x])
            MoveSet.push(gameboard[this.y][i])
        }
        // for (let i = 0; i < 8; i++) {
        //
        // }

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

export default Rook;