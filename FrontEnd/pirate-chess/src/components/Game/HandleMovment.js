import React, {Component} from 'react';
import tile from "./tile";

class HandleMovment extends Component {
    constructor(props) {
        super(props);
        this.getIfSelected = this.getIfSelected.bind(this);
        this.getComparableTile = this.getComparableTile.bind(this);
        this.getSelectedTile = this.getSelectedTile.bind(this);
        this.handleMovment = this.handleMovment.bind(this);
    }
    state ={
        ifSelected: false,
        selectedTile: null,
        comparableTile: null,
        selected: 'Greentile'


    };
    returnMyself(){
        return(this);
    }

    handleMovment(tile){
        console.log('this is the selected tile' + this.state.selectedTile)
        console.log('this is the comparable tile ' + this.state.comparableTile)
        // console.log('this is the id' + this.state.selected.state.Id)
       if(tile.state.piece == null && this.state.selectedTile == null){
           console.log(this.state.selectedTile)
           return false;
       }
       else{
           if(this.state.ifSelected === false){
               tile.setSelectedTile(true);
               this.state.selectedTile = tile;
               this.state.ifSelected = true;
               console.log(this.state.selectedTile)
           }else{
               this.moveablePiece(this.getSelectedTile(),tile);
               this.getSelectedTile().setSelectedTile(false);
               this.reset();
               console.log(this.state.selectedTile)
           }
       }
       return true;



    }
    pieceMovement(selectedTile,comparableTile){
        const bool = this.state.selectedTile.getPiece().posibleMoves(comparableTile);
        return bool;

    }
    TileSelect(){

    }
    reset(){
        this.state.ifSelected = false;
        this.state.selectedTile = null;
        this.state.comparableTile = null;


    }
    moveablePiece(startTile, finalTile){
        finalTile.setPiece(startTile.getPiece());
        startTile.setPiece(null)
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
