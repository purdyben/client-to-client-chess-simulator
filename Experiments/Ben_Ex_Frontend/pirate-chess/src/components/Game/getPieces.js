import React, {Component} from 'react';
import PiecesEnum from './PiecesEnum'

class getPieces extends Component{
    state = {
        whitePieces: [],
        blackPieces: [],
        whiteTakenPieces: [],
        blackTakenPieces: []

    };
    defaultBoard(){
        this.state.whitePieces = PiecesEnum.StartingSet();
        console.log(this.state.whitePieces[0]);
    };




    render(){
        this.defaultBoard();
        return(null)

    }
}
export default getPieces;