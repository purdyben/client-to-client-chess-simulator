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
        this.castle = true

    }

    /**
     * Creates the posible move for the piece storing all tiles in the MoveSet array, returns the array
     * @returns {[]}
     */
    getAllPosibleMoves() {
        var MoveSet = [];
        //  console.log(this,this.x, this.y,MoveSet)
        /**
         * down
         */
        if (this.y < 7) {
            MoveSet.push(gameboard[this.y + 1][this.x])
        }
        /**
         * up
         */
        if (this.y > 0) {
            MoveSet.push(gameboard[this.y - 1][this.x])
        }
        /**
         * right
         */
        if (this.x < 7) {
            MoveSet.push(gameboard[this.y][this.x + 1])
        }
        /**
         * left
         */
        if (this.x > 0) {
            MoveSet.push(gameboard[this.y][this.x - 1])
        }
        /**
         * top left
         */
        if (this.y > 0 && this.x > 0) {
            MoveSet.push(gameboard[this.y - 1][this.x - 1])
        }
        /**
         * top right
         */
        if (this.y > 0 && this.x < 7) {
            MoveSet.push(gameboard[this.y - 1][this.x + 1])
        }
        /**
         * bottom left
         */
        if (this.y < 7 && this.x > 0) {
            MoveSet.push(gameboard[this.y + 1][this.x - 1])
        }
        /**
         * bottom right
         */
        if (this.y < 7 && this.x < 7) {
            MoveSet.push(gameboard[this.y + 1][this.x + 1])
        }

        // console.log(this,this.x, this.y,MoveSet)
        return this.checkForChecks(MoveSet)
    };

    /**
     * reset moveSet arr
     */
    resetMoves() {
        this.moveSet = this.getAllPosibleMoves()
        // console.log(this.moveSet)
    }

    checkForChecks(arr) {
        var listOfTiles = [];
        let newSet = []
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (gameboard[i][j].piece != null && gameboard[i][j].piece.name.substring(0, 5) === 'Black') {
                     if(gameboard[i][j].piece.name.substring(5, 9) === 'Pawn'){
                         console.log("pawn",gameboard[i][j].piece.protectedTiles.length)
                         for(let k = 0 ; k < gameboard[i][j].piece.protectedTiles.length; k++){
                             console.log('id:',gameboard[i][j].piece.protectedTiles[k].id)
                             listOfTiles.push(gameboard[i][j].piece.protectedTiles[k].id)
                         }
                     }
                     else{
                         for(let k = 0 ; k < gameboard[i][j].piece.moveSet.length; k++){
                             listOfTiles.push(gameboard[i][j].piece.moveSet[k].id)
                         }
                     }
                      // console.log(gameboard[i][j].piece.moveSet)

                   // listOfTiles.push(gameboard[i][j].piece.moveSet)
                }
            }
        }
        console.log(listOfTiles)
        for (let i = 0; i < arr.length; i++) {
            if (this.checkSingleTile(arr[i], listOfTiles)) {
                newSet.push(arr[i])
            }
        }

        return newSet
    }

    checkSingleTile(tile, listOfTiles) {
        for (let j = 0; j < listOfTiles.length; j++) {
            if (tile.id === listOfTiles[j]) {
                console.log(tile.id, listOfTiles[j], false)
                return false
            }

        }
        return true
    }


    getName() {
        return (this.name);
    }

}

export default King;