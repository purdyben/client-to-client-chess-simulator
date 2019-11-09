import {Component} from 'react';
import * as Constants from './Constants';

class HandleMovment extends Component {
    constructor(props) {
        super(props);
        this.getIfSelected = this.getIfSelected.bind(this);
        this.getComparableTile = this.getComparableTile.bind(this);
        this.getSelectedTile = this.getSelectedTile.bind(this);
        this.handleMovment = this.handleMovment.bind(this);
    }

    state = {
        ifSelected: false,
        selectedTile: null,
        comparableTile: null,
        selected: 'Greentile'
    };

    returnMyself() {
        return (this);
    }

    handleMovment(tile) {
        if(this.state.selectedTile == tile){
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
                console.log(tile)

            } else {
                let bool = false
                console.log(this.state.selectedTile.state.piece.moveSet.length)
                for (let i = 0; i < this.state.selectedTile.state.piece.moveSet.length; i++) {
                    console.log(this.state.selectedTile.state.piece.moveSet[0].id, tile.state.id)

                    if (this.state.selectedTile.state.piece.moveSet[i].id == tile.state.id) {
                        bool = true;
                        console.log(bool)
                        break;
                    }
                }
                if (bool) {
                    //console.log(this.state.selectedTile.piece)
                    this.moveablePiece(this.state.selectedTile, tile)
                    tile.state.piece.resetMoves()
                    //console.log(tile, " has it been reset")
                    this.reset()

                }
            }
        }
        // console.log('this is the selected tile: ' + this.state.selectedTile)
        // console.log('this is the comparable tile: ' + this.state.comparableTile)
        return true;
    }
    legalMoves(tile, comparableTile) {
        for (let i = 0; i < this.state.moveSet.length; i++) {
            if (this.state.MoveSet[i] === comparableTile) {
                return true
            }
        }
        return false
    }



    reset() {
        this.state.ifSelected = false;
        this.state.selectedTile = null;
        this.state.comparableTile = null;
    }

    moveablePiece(startTile, finalTile) {
        finalTile.state.piece = startTile.state.piece
        startTile.state.piece = null
        startTile.state.selectedTile = false
        finalTile.state.piece.x = finalTile.state.x
        finalTile.state.piece.y = finalTile.state.y
        startTile.forceUpdate()

        Constants.gameboard[startTile.state.y][startTile.state.x] = {
            id: startTile.state.id,
            x: startTile.state.x,
            y: startTile.state.y,
            piece: null,
            selectedTile: false,
            color: startTile.state.color
        };
        Constants.gameboard[finalTile.state.y][finalTile.state.x] = {
            id: finalTile.state.id,
            x: finalTile.state.x,
            y: finalTile.state.y,
            piece: finalTile.state.piece,
            selectedTile: false,
            color: finalTile.state.color
        };



        //Constants.gameboard[finalTile.x][finalTile.y] = finalTile
    };

    getIfSelected() {
        return this.state.ifSelected;
    }

    getComparableTile() {
        return this.state.comparableTile;
    }

    getSelectedTile() {
        return this.state.selectedTile
    }
}

export default HandleMovment;
