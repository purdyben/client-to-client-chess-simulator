import React, {Component} from 'react';
import Pawn from "./GamePieces/Pawn";

class tile extends Component{
    constructor(props){
        super(props);
        this.state = {
            Id: props.Id,
            piece: props.piece,
            color: props.color};
        this.getColor = this.getColor.bind(this);
        this.getId = this.getId.bind(this);
        this.getPiece = this.getPiece.bind(this);
        this.setPiece = this.setPiece.bind((this));
    };
    state = {
        Id:"",
        piece: Pawn,
        color: null,

    };
    getColor(){
        return(this.state.color);
    }
    getPiece(){
        return(this.state.piece);
    }
    getId(){
        return(this.state.Id)
    }
    setPiece = (pie) => {
        this.state.piece = pie;
    }
}
export default tile;