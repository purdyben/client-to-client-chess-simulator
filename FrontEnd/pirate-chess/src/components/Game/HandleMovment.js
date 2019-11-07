import {Component} from 'react';

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
        if (tile.state.piece == null && this.state.selectedTile == null) {
            console.log(this.selectedTile, 'select tile')
            return false;
        } else {
            if (this.state.selectedTile == null) {
                this.state.selectedTile = tile
                tile.state.selectedTile = true

            } else {
                if (true) {
                    this.moveablePiece(this.state.selectedTile, tile)
                    this.reset()
                }
            }
        }
        // console.log('this is the selected tile: ' + this.state.selectedTile)
        // console.log('this is the comparable tile: ' + this.state.comparableTile)
        return true;
    }

    pieceMovement(selectedTile, comparableTile) {
        const bool = this.state.selectedTile.getPiece().posibleMoves(comparableTile)
        return bool
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
        startTile.forceUpdate();
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
