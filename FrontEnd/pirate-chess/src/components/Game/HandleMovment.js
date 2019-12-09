import React, {Component} from 'react';
import * as Constants from './Constants';

// import {wSocket} from './Constants';

class HandleMovment extends Component {
    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            ifSelected: false,
            selectedTile: null,
            comparableTile: null,
            selected: 'Greentile'
        }
        this.handleMovment = this.handleMovment.bind(this);
    }

    /**
     *
     * @returns {HandleMovment}
     */
    returnMyself() {
        return (this);
    }

    /**
     *
     * @param tile
     * @returns {boolean}
     */
    handleMovment(tile) {
        if (this.state.selectedTile === tile) {
            tile.state.selectedTile = false
            this.reset()
            return true
        }
        if (tile.state.piece == null && this.state.selectedTile == null) {
            console.log(this.selectedTile, 'select tile')
            return false;
        } else {
            if (this.state.selectedTile == null) {
                this.setState({selectedTile: tile})
                this.state.selectedTile = tile
                tile.state.selectedTile = true
                console.log(tile, tile.state.piece.moveSet)
                this.updateMoveSets()


            } else {
                let bool = false
                for (let i = 0; i < this.state.selectedTile.state.piece.moveSet.length; i++) {
                    if (this.state.selectedTile.state.piece.moveSet[i].id === tile.state.id) {
                        if (tile.state.piece != null) {
                            if (this.checkForPieces(this.state.selectedTile, tile)) {
                                bool = true
                                break
                            } else {
                                bool = false
                                break
                            }
                        }
                        bool = true
                        break
                    }
                }

                if (bool) {
                    //console.log(this.state.selectedTile.piece)
                    this.MovePiece(this.state.selectedTile, tile)
                    tile.state.piece.resetMoves();
                    //console.log(tile, " has it been reset")
                    this.reset()

                }
            }
        }
        // console.log('this is the selected tile: ' + this.state.selectedTile)
        // console.log('this is the comparable tile: ' + this.state.comparableTile)
        return true;
    }

    /**
     *
     * @param tile
     * @param comparableTile
     * @returns {boolean}
     */
    checkForPieces(tile, comparableTile) {
        // let Rook;
        // let King;
        // if (tile.state.piece !== null && comparableTile.state.piece !== null) {
        //     if (tile.state.piece.name.substring(5, tile.state.piece.name.length-1) === 'King' &&
        //         comparableTile.state.piece.name.substring(5, comparableTile.state.piece.name.length-1) === 'Rook') {
        //         Rook = comparableTile.state.piece;
        //         King = tile.state.piece;
        //
        //
        //     } else if (tile.name.substring(5, tile.state.piece.name.length-1) === 'Rook' &&
        //         comparableTile.state.piece.name.substring(5, comparableTile.state.piece.name.length-1) === 'King') {
        //         King = comparableTile.state.piece;
        //         Rook = tile.state.piece;
        //     }
        // }

        if (tile.state.piece.name.substring(0, 5) === 'Black' && comparableTile.state.piece.name.substring(0, 5) === 'White')
            return true
        else if (comparableTile.state.piece.name.substring(0, 5) === 'Black' && tile.state.piece.name.substring(0, 5) === 'White')
            return true
        else
            return false
    }

    /**
     *
     */
    reset() {
        this.state.ifSelected = false;
        this.state.selectedTile = null;
        this.state.comparableTile = null;
    }

    /**
     *
     * @param startTile
     * @param finalTile
     * @constructor
     */
    MovePiece(startTile, finalTile) {
        /**
         *
         * @type {string}
         */
        let text = '{ "Move" : [' + `{"id": "${startTile.state.id}", "x": "${startTile.state.x}", "y": "${startTile.state.y}", "color": "${startTile.state.color}"},` +
            ` { "id": "${finalTile.state.id}", "x": "${finalTile.state.x}", "y": "${finalTile.state.y}","color": "${finalTile.state.color}"}]}`

        window.wSocket.send(text)

        /**
         *
         */
        if (this.Castle(startTile, finalTile)) {


        } else {
            finalTile.state.piece = startTile.state.piece
            startTile.state.piece = null
            startTile.state.selectedTile = false
            finalTile.state.piece.x = finalTile.state.x
            finalTile.state.piece.y = finalTile.state.y
            startTile.forceUpdate()
        }
        /**
         *
         * @type {{color: *, piece: null, selectedTile: boolean, x: *, y: *, id: *}}
         */
        Constants.gameboard[startTile.state.y][startTile.state.x] = {
            id: startTile.state.id,
            x: startTile.state.x,
            y: startTile.state.y,
            piece: null,
            selectedTile: false,
            color: startTile.state.color
        };
        /**
         *
         * @type {{color: *, piece: *, selectedTile: boolean, x: *, y: *, id: *}}
         */
        Constants.gameboard[finalTile.state.y][finalTile.state.x] = {
            id: finalTile.state.id,
            x: finalTile.state.x,
            y: finalTile.state.y,
            piece: finalTile.state.piece,
            selectedTile: false,
            color: finalTile.state.color
        };
        Constants.updateAllMoveSets()
    };

    /**
     *
     * @param startTile
     * @param finalTile
     */
    receiveMove(startTile, finalTile) {
        finalTile.piece = startTile.piece;
        startTile.piece = null
        finalTile.piece.x = finalTile.x;
        finalTile.piece.y = finalTile.y;
        console.log(startTile, finalTile)
        // gameBoard.render()
        //gameBoard.setState({board: gameBoard.renderBoard()})
        // sTile = document.findElementById(startTile.id)
        // console.log(sTile)
        {/*var myComponentInstance = ReactDOM.render(<Tile/>, finalTile.id)*/
        }
        //console.log(node)
        {/*console.log( <Tile ref={startTile.id}/>)*/
        }


        Constants.updateAllMoveSets()
    }

    /**
     *
     * @param tile
     * @param finalTile
     * @returns {boolean}
     * @constructor
     */
    Castle(tile, finalTile) {
        // let Rook;
        // let King;
        //
        // if (tile.state.piece.name.substring(5, tile.state.piece.name.length) === 'King' &&
        //     finalTile.state.piece.name.substring(5, finalTile.state.piece.name.length) === 'Rook') {
        //     Rook = finalTile.state.piece
        //     King = tile.state.piece
        //
        //
        // } else if (tile.state.piece.name.substring(5, tile.state.piece.name.length) === 'Rook' &&
        //     finalTile.state.piece.name.substring(5, finalTile.state.piece.name.length) === 'King') {
        //     King = finalTile.state.piece
        //     Rook = tile.state.piece
        // }


        return false
    }

    /**
     *
     */
    updateMoveSets() {
        console.log(this.state.selectedTile.state.piece)
        this.state.selectedTile.state.piece.resetMoves()
    }


}

export default HandleMovment;
