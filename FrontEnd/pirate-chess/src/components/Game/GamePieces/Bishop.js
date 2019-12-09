import {gameboard} from '../Constants';

class Bishop {
    /**
     *
     * MoveSet is created after props are passed
     * @constructor
     * @param props
     */
    constructor(props) {
        this.name = props.name
        this.x = props.x
        this.y = props.y
        this.moveSet = this.getAllPossibleMoves()
        this.resetMoves = this.resetMoves.bind(this)
    }
    /**
     * Creates the posible move for the piece storing all tiles in the MoveSet array, returns the array
     * @returns {[]}
     */
    getAllPossibleMoves() {
        var MoveSet = [];
        /**
         * up right
         */
        for (let i = 1; i < 8; i++) {
            if (this.x + i < 8 && this.y + i < 8) {
                MoveSet.push(gameboard[this.y + i][this.x + i])
                if (gameboard[this.y + i][this.x + i].piece != null) {
                    break;
                }
            }
        }
        /**
         * bottom left
         */
        for (let i = 1; i < 8; i++) {
            if (this.x - i > -1 && this.y - i > -1) {
                MoveSet.push(gameboard[this.y - i][this.x - i])
                if (gameboard[this.y - i][this.x - i].piece != null) {
                    break;
                }
            }
        }
        /**
         * bottom right
         */
        for (let i = 1; i < 8; i++) {
            if (this.x - i < 8 && this.y + i < 8 && this.x - i > -1) {
                MoveSet.push(gameboard[this.y + i][this.x - i])
                if (gameboard[this.y + i][this.x - i].piece != null) {
                    break;
                }
            }
        }


        /**
         * up left
         */
        for (let i = 1; i < 8; i++) {
            if (this.x + i > -1 && this.x + i < 8 && this.y - i > -1) {
                MoveSet.push(gameboard[this.y - i][this.x + i])
                if (gameboard[this.y - i][this.x + i].piece != null) {
                    break;
                }
            }

        }
        this.moveSet = MoveSet
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

export default Bishop;