import React, {Component} from 'react';
import tile from "./tile";

class HandleMovment extends Component {
    constructor(props) {
        super(props);
        this.getIfSelected = this.getIfSelected.bind(this);
        this.getComparableTile = this.getComparableTile.bind(this);
        this.getSelectedTile = this.getSelectedTile.bind(this);
    }
    state ={
        ifSelected: false,
        selectedTile: null,
        comparableTile: null,

    };
    reset(){
        this.state.ifSelected = false;
        this.state.selectedTile = null;
        this.state.comparableTile = null;


    }

    moveablePiece(startTile, finalTile){
        startTile.movePiece(finalTile);
    };
    getIfSelected(){
        return this.state.ifSelected;
    }
    getComparableTile(){
        return this.state.comparableTile;
    }
    getSelectedTile(){
        return this.state.selectedTile
    }
}
export default HandleMovment;
