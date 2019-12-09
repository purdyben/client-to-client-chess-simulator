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
        this.moveSet = this.getAllPossibleMoves()
        this.resetMoves = this.resetMoves.bind(this)
        this.castle = true
    }

    /**
     * Creates the posible move for the piece storing all tiles in the MoveSet array, returns the array
     * @returns {[]}
     */
    getAllPossibleMoves() {
        var MoveSet = [];
        if (this.name === 'BlackRook' && (this.y !== 0 && this.x !== 0 || this.y !== 0 && this.x !== 7 ) ) {
            this.castle = false
        } else if (this.name === 'WhiteRook' && (this.y !== 7 && this.x !== 0 || this.y !== 7 && this.x !== 7) ) {
            this.castle = false
        }
        /**
         * right
         */
        for (let i = this.x; i < 8; i++) {
            if (i + 1 < 8 && gameboard[this.y][i + 1].piece == null) {
                MoveSet.push(gameboard[this.y][i + 1])
            }
            if (i + 1 < 8 && gameboard[this.y][i + 1].piece != null) {
                MoveSet.push(gameboard[this.y][i + 1])
                break
            }
        }
        /**
         * left
         */
        for (let i = this.x; i >= 0; i--) {
            if (i - 1 >= 0 && gameboard[this.y][i - 1].piece == null) {
                MoveSet.push(gameboard[this.y][i - 1])
            }
            if (i - 1 >= 0 && gameboard[this.y][i - 1].piece != null) {
                MoveSet.push(gameboard[this.y][i - 1])
                break
            }
        }
        /**
         * up
         */
        for (let i = this.y; i < 8; i++) {
            if (i + 1 < 8 && gameboard[i + 1][this.x].piece == null) {
                MoveSet.push(gameboard[i + 1][this.x])
            }
            if (i + 1 < 8 && gameboard[i + 1][this.x].piece != null) {
                MoveSet.push(gameboard[i + 1][this.x])
                break
            }
        }
        /**
         * down
         */
        for (let i = this.y; i >= 0; i--) {
            if (i - 1 >= 0 && gameboard[i - 1][this.x].piece == null) {
                MoveSet.push(gameboard[i - 1][this.x])
            }
            if (i - 1 >= 0 && gameboard[i - 1][this.x].piece != null) {
                MoveSet.push(gameboard[i - 1][this.x])
                break
            }
        }

        return MoveSet
    };

    /**
     * reset the moveSet arr
     */
    resetMoves() {
        this.moveSet = this.getAllPossibleMoves()
        // console.log(this.moveSet)
    }

    getName() {
        return (this.name);
    }

}

export default Rook;