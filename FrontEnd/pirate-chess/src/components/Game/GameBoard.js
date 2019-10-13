import React, {Component} from 'react';
import tile from '../Game/tile';
import Pawn from '../Game/GamePieces/Pawn'
import Rook from "./GamePieces/Rook";
import Knight from "./GamePieces/Knight";
import Bishop from "./GamePieces/Bishop";
import Queen from "./GamePieces/Queen";
import King from "./GamePieces/King";

class GameBoard extends Component{
    constructor(props){
        super(props);
        this.popTile = this.popTile.bind(this);
    }
    state = {
       board: this.popTile(),
        time: 10,
        players: [{
           player: 1,
           type: 'white'
         },{
           player: 2 ,
           type: 'black'
        }]
    };

    popTile(){
        var tileArr: any=  [[],[],[],[],
            [],[],[],[]];
        var i,j;
            for(i = 0; i < 8; i++) {
                for(j = 0; j < 8; j++) {
                    if(j%8 === 0){
                        tileArr[i].push(new tile({
                            Id: i*j + j,
                            piece: null,
                            color: this.getPrev(tileArr, i,j).getColor()
                        }));
                    }else if(this.getPrev(tileArr,i,j).getColor() !== "OrangeTile"){
                        tileArr[i].push(new tile({
                            Id: i*j + j,
                            piece: null,
                            color: "OrangeTile"
                        }));

                    }else if(this.getPrev(tileArr,i,j).getColor() !== "WhiteTile"){
                        tileArr[i].push(new tile({
                            Id: i*j + j,
                            piece: null,
                            color: "WhiteTile"
                        }));
                    }
                }
            }
        console.log(tileArr);
        this.setDefaultBoard(tileArr);
        return tileArr;
    }
    setDefaultBoard(tileArr) {
        var Default = this.startingPiecesArr();
        var White = tileArr[6];
        var Black = tileArr[1];
        var i;
       for(i = 0 ; i < 8 ; i++){
           White[i].setPiece(new Pawn({tile: tileArr[i],name: "WhitePawn"}));
           Black[i].setPiece(new Pawn({tile: tileArr[i], name: "BlackPawn"}));
       }
        White = tileArr[7];
        Black = tileArr[0];
        for(i = 0; i < 8 ; i++){
            Default[i].setTile(White[i]);
            Default[i].setName("White"+Default[i].getName());
             White[i].setPiece(Default[i]);
        }
        for(i = 0; i < 8 ; i++) {
            Default = this.startingPiecesArr();
            Default[i].setTile(Black[i]);
            Default[i].setName("Black" + Default[i].getName());
            Black[i].setPiece(Default[i]);
        }
        console.log(tileArr);
    };

    startingPiecesArr() {
        return([new Rook({name: "Rook"}),new Knight({name: "Knight"}),new Bishop({name: "Bishop"}),
            new Queen({name: "Queen"}),new King({name: "King"}),new Bishop({name: "Bishop"}),
            new Knight({name: "Knight"}),new Rook({name: "Rook"})]);
    }

    getPrev(tileArr, row, col){

        if(row === 0 && col === 0){
            return(new tile({
                Id: 0,
                piece: "null",
                color: "WhiteTile",}));
        }else if(col === 0) {
            return(tileArr[row-1][7])
        }else{
            return(tileArr[row][col-1])
            }
        }

    render(){
        return(
            <div className="gamePage">
                    <div className="grid">
                        {
                            this.state.board.map(row =>(
                               row.map(tile =>(
                                    <div className={"grid-cell"}>
                                        <img className={"tile"}
                                             src = {`./images/${tile.getColor()}.png`}/>
                                    </div>
                                    ))
                            ))

                        }
                    </div>
                <div><h1>this is a divider</h1></div>
                <div className="grid">
                    { this.state.board.map(row =>(
                        row.map(tile =>(
                            renderPiece(tile)
                        ))
                    ))}

                </div>
            </div>
        )

    }
}
export default GameBoard;
function renderPiece(tile){
      if(tile.getPiece() !== null){
          if(tile.getColor() === "OrangeTile"){
              return(<div className={"grid-cell"}>
                  <img style = {styles.OrangeTile} className={"tile"}
                       src = {`./images/${tile.getPiece().getName()}.png`}/>
              </div>)
          }else{
              return(<div className={"grid-cell"}>
                  <img style = {styles.WhiteTile} className={"tile"}
                       src = {`./images/${tile.getPiece().getName()}.png`}/>
              </div>)
          }
      }else{
          if(tile.getColor() !== "OrangeTile"){
              console.log(tile.getColor() + "!== Orange" + tile.getId()) ;
              return(<div className={"grid-cell"}>
                  <img style = {styles.BlackTile} className={"tile"}
                       src = {`./images/${tile.getColor()}.png`}/>
              </div>)
          }else if(tile.getColor() !== "WhiteTile"){
              console.log(tile.getColor() + "=== Orange");
              return(<div className={"grid-cell"}>
                  <img style = {styles.BlackTile} className={"tile"}
                       src = {`./images/${tile.getColor()}.png`}/>
              </div>)
          }
      }

}
const styles = {
    WhiteTile: {
        backgroundImage: `url('./images/WhiteTile.png')`
    },
    BlackTile:{
        backgroundImage: `url('./images/BlackTile.png')`
    },
    OrangeTile:{
        backgroundImage: `url('./images/OrangeTile.png')`
    }
}



