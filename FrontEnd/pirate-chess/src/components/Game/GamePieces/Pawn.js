import {gameboard} from '../Constants';

/**
 * ksakhasgr
 */
class Pawn {
    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        this.name = props.name
        this.x = props.x
        this.y = props.y
        this.firstMove = true
        this.moveSet = this.getAllPosibleMoves()
        this.protectedTiles = this.setProtectedTiles();
        //this.resetMoves = this.resetMoves.bind(this)
    }

    /**
     *
     * @returns {string}
     */
    getName() {
        return (this.name)
    }


    /**
     *
     * @param tile
     * @param comparableTile
     * @returns {boolean}
     */
    legalMoves(tile, comparableTile) {
        for (let i = 0; i < this.state.moveSet.length; i++) {
            if (this.state.MoveSet[i] === comparableTile) {
                return true
            }
        }
        return false
    }

    /**
     * Creates the posible move for the piece storing all tiles in the MoveSet array, returns the array
     * @returns {[]}
     */
    getAllPosibleMoves() {
        var MoveSet = [];

        /*
         sets first move
         */
        if (this.name == 'BlackPawn' && this.y != 1) {
            this.firstMove = false
        } else if (this.name == 'WhitePawn' && this.y != 6) {
            this.firstMove = false
        }
        /*
         adds the tile two tiles head if no piece is blocking it
         */
        if (this.firstMove == true) {
            if (this.name == 'BlackPawn' && gameboard[this.y + 1][this.x].piece == null) {
                if (gameboard[this.y + 2][this.x].piece == null) {
                    MoveSet.push(gameboard[this.y + 2][this.x])
                }

            } else if (this.name == 'WhitePawn' && gameboard[this.y - 1][this.x].piece == null) {
                if (gameboard[this.y - 2][this.x].piece == null) {
                    MoveSet.push(gameboard[this.y - 2][this.x])
                }
            }
        }
        /*
        add the tiles on right side of the pawn if
        there is an opposite colored piece
        */
        if (this.name == 'BlackPawn') {
            if (this.x < 7 && this.y != 7) {
                if (gameboard[this.y + 1][this.x + 1].piece != null &&
                    gameboard[this.y + 1][this.x + 1].piece.name.substring(0, 5) == 'White')
                    MoveSet.push(gameboard[this.y + 1][this.x + 1])
            }
        } else {
            if (this.x < 7 && this.y != 0) {
                if (gameboard[this.y - 1][this.x + 1].piece != null &&
                    gameboard[this.y - 1][this.x + 1].piece.name.substring(0, 5) == 'Black')
                    MoveSet.push(gameboard[this.y - 1][this.x + 1])
            }
        }
        /*
       add the tiles on left side of the pawn if
       there is an opposite colored piece
       */

        if (this.name == 'BlackPawn') {
            if (this.x > 0 && this.y != 7) {
                if (gameboard[this.y + 1][this.x - 1].piece != null &&
                    gameboard[this.y + 1][this.x - 1].piece.name.substring(0, 5) == 'White')
                    MoveSet.push(gameboard[this.y + 1][this.x - 1])
            }
        } else {
            if (this.x > 0 && this.y != 0) {
                if (gameboard[this.y - 1][this.x - 1].piece != null &&
                    gameboard[this.y - 1][this.x - 1].piece.name.substring(0, 5) == 'Black')
                    MoveSet.push(gameboard[this.y - 1][this.x - 1])
            }
        }

        /*
        adds the the tile infront of the piece if
        there is no piece in front of the pawn
         */
        if (this.name == 'BlackPawn') {
            if (this.y != 7) {
                if (gameboard[this.y + 1][this.x].piece == null) {
                    // console.log(gameboard[this.y + 1][this.x].piece)
                    MoveSet.push(gameboard[this.y + 1][this.x])
                }

            }
        } else {
            if (this.y != 0) {

                if (gameboard[this.y - 1][this.x].piece == null) {
                    //console.log(gameboard[this.y - 1][this.x].piece, 'white pushed')
                    MoveSet.push(gameboard[this.y - 1][this.x])
                }
            }
        }
        this.protectedTiles = this.setProtectedTiles();
        // console.log(this)
        // console.log(this,MoveSet)
        return MoveSet
    }

    setProtectedTiles() {
        var tempTiles = []
        if (this.name == 'BlackPawn') {
            console.log('protected tiles', this.x, this.y)
            if (this.y < 7) {
                if (this.x < 7 && this.x > 0) {
                    tempTiles = [gameboard[this.y + 1][this.x + 1], gameboard[this.y + 1][this.x - 1]]
                } else if (this.x === 0) {
                    console.log('black left edge')
                    tempTiles = [gameboard[this.y + 1][this.x + 1]]
                } else if (this.x === 7) {
                    tempTiles = [gameboard[this.y + 1][this.x - 1]]
                }

            }
        } else {
            if (this.y > 0) {
                if (this.x < 7 && this.x > 0) {
                    tempTiles = [gameboard[this.y - 1][this.x + 1], gameboard[this.y - 1][this.x - 1]]
                } else if (this.x === 0) {
                    tempTiles = [gameboard[this.y - 1][this.x + 1]]
                } else if (this.x === 7) {
                    tempTiles = [gameboard[this.y - 1][this.x - 1]]
                }

            }

        }
        return tempTiles
    }

    /**
     * reset the moveSet arr
     */
    resetMoves() {
        this.moveSet = this.getAllPosibleMoves()
        //console.log(this.moveSet)
    }


}

export default Pawn
