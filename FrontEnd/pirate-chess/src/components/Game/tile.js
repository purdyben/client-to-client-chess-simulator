import React, {Component} from 'react';
import GameBoard from "./GameBoard";

class tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Id: props.Id,
            piece: props.piece,
            color: props.color
        };
        this.getColor = this.getColor.bind(this);
        this.getId = this.getId.bind(this);
        this.getPiece = this.getPiece.bind(this);
        this.setPiece = this.setPiece.bind((this));
    };

    getColor() {
        return (this.state.color);
    }

    getPiece() {
        return (this.state.piece);
    }

    getId() {
        return (this.state.Id)
    }

    setPiece = (pie) => {
        this.state.piece = pie;
    };
    movePiece(finalTile){
       finalTile.setPiece(this.state.piece);
       console.log(this,finalTile);
      this.state.piece = null;
        console.log(this,finalTile);
    }
}

export default tile;