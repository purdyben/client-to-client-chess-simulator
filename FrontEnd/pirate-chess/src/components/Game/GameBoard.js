import React, {Component} from 'react';
import tile from './tile';
import Pawn from './GamePieces/Pawn'
import Rook from "./GamePieces/Rook";
import Knight from "./GamePieces/Knight";
import Bishop from "./GamePieces/Bishop";
import Queen from "./GamePieces/Queen";
import King from "./GamePieces/King";
import * as Constants from './Constants';


class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.popTile = this.popTile.bind(this);
        this._imageClick = this._imageClick.bind(this);
    }

    state = {
        board: this.popTile(),
        time: 10,
        players: [{
            player: 1,
            type: 'white'
        }, {
            player: 2,
            type: 'black'
        }],
        selectTile: false,
    };

    popTile(){
        let tileArr: any = [[], [], [], [],
            [], [], [], []];
        const IdNumber = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        let i, j;
        for (i = 0; i < 8; i++) {
            for (j = 0; j < 8; j++) {
                if (j % 8 === 0) {
                    tileArr[i].push(new tile({
                        Id: IdNumber[j] + (8 - i),
                        piece: null,
                        color: this.getPrev(tileArr, i, j).getColor(),
                    }));
                } else if (this.getPrev(tileArr, i, j).getColor() !== "OrangeTile") {
                    tileArr[i].push(new tile({
                        Id: IdNumber[j] + (8 - i),
                        piece: null,
                        color: "OrangeTile",
                    }));

                } else if (this.getPrev(tileArr, i, j).getColor() !== "WhiteTile") {
                    tileArr[i].push(new tile({
                        Id: IdNumber[j] + (8 - i),
                        piece: null,
                        color: "WhiteTile",
                    }));
                }
            }
        }
        console.log(tileArr);
        this.setDefaultBoard(tileArr);
        Constants.setGameBoard(tileArr);
        return tileArr;
    }

    setDefaultBoard(tileArr) {
        let Default = this.startingPiecesArr();
        let White = tileArr[6];
        let Black = tileArr[1];
        let i;
        for (i = 0; i < 8; i++) {
            White[i].setPiece(new Pawn({tile: tileArr[i], name: "WhitePawn"}));
            Black[i].setPiece(new Pawn({tile: tileArr[i], name: "BlackPawn"}));
        }
        White = tileArr[7];
        Black = tileArr[0];
        for (i = 0; i < 8; i++) {
            Default[i].setTile(White[i]);
            Default[i].setName("White" + Default[i].getName());
            White[i].setPiece(Default[i]);
        }
        for (i = 0; i < 8; i++) {
            Default = this.startingPiecesArr();
            Default[i].setTile(Black[i]);
            Default[i].setName("Black" + Default[i].getName());
            Black[i].setPiece(Default[i]);
        }
    };

    startingPiecesArr() {
        return ([new Rook({name: "Rook"}), new Knight({name: "Knight"}), new Bishop({name: "Bishop"}),
            new Queen({name: "Queen"}), new King({name: "King"}), new Bishop({name: "Bishop"}),
            new Knight({name: "Knight"}), new Rook({name: "Rook"})]);
    }

    getPrev(tileArr, row, col) {
        if (row === 0 && col === 0) {
            return (new tile({
                Id: 0,
                piece: "null",
                color: "WhiteTile",
            }));
        } else if (col === 0) {
            return (tileArr[row - 1][7])
        } else {
            return (tileArr[row][col - 1])
        }
    }

    _imageClick(tile) {
       if (Constants.moveHandler.handleMovment(tile))
           this.forceUpdate();

    }

    colorSelect(tile){
        if(this.state.moveHandler.getSelectedTile() === tile){
            return(this.style.GreenTile)
        }else{
            return(this.style.GreenTile)
        }

    }
    _getTile() {

    }

    render() {
        return (
            <div className='gamePage'>
                <div className='flex-row'>
                    {[this.state.board[0][0], this.state.board[1][0], this.state.board[2][0], this.state.board[3][0],
                        this.state.board[4][0], this.state.board[5][0], this.state.board[6][0], this.state.board[7][0]].map(tile => (
                        this.displayNum(tile, true)
                    ))}
                </div>
                <div className='gameBoard'>
                    <div className="grid">
                        {this.state.board.map(row => (
                            row.map(tile => (
                                this.renderPiece(tile)
                            ))
                        ))}
                        {this.state.board[7].map(tile => (
                            this.displayNum(tile, false)
                        ))}
                    </div>
                    <div className="grid">
                        {/*{this.state.board.map(row => (*/}
                        {/*    row.map(tile => (*/}
                        {/*        tile.render()*/}

                        {/*    ))*/}
                        {/*))}*/}
                    </div>
                </div>

            </div>
        )
    }

    displayNum(tile, left) {
        if (tile.getId().substring(0, 1) === "a" && left === true) {
            return (<div className={"grid-cell"} key={`${tile.getId()}`}>
                <p className={"leftRow"} >{tile.getId().substring(1,2)}</p>
            </div>)
        }
        else if (tile.getId().substring(1, 2) === "1") {
            return (<div className={"grid-cell"} key={`${tile.getId()}`}>
                <p className={"tile"}>{tile.getId()}</p>
            </div>)
        }
    }
    renderPiece(tile) {
        if(tile.getSelectedTile() === true){
            if(tile.getPiece() !== null){
                return (<div className={"grid-cell"} key={`${tile.getId()}`}>
                    <img style={Constants.style.GreenTile} className={"tile"}
                         src={`./images/${tile.getPiece().getName()}.png`} onClick={() => this._imageClick(tile)}
                         alt={`${tile.getId()}`}/>
                </div>)
            }
            return (<div className={"grid-cell"} key={`${tile.getId()}`}>
                <img className={"tile"}
                     src={`./images/BlackTile.png`} onClick={() => this._imageClick(tile)}
                     alt={`${tile.getId()}`}/>
            </div>)
        }
        // -------------------------------------------------- obove needs to be re done
        if (tile.getPiece() !== null) {
            if (tile.getColor() === "OrangeTile") {
                return (<div className={"grid-cell"} key={`${tile.getId()}`}>
                        <img style={Constants.style.OrangeTile} className={"tile"}
                             src={`./images/${tile.getPiece().getName()}.png`} onClick={() => this._imageClick(tile)}
                             alt={`${tile.getId()}`}/>
                    </div>
                )
            } else {
                return (
                    <div className={"grid-cell"} key={`${tile.getId()}`}>
                        <img style={Constants.style.WhiteTile} className={"tile"}
                             src={`./images/${tile.getPiece().getName()}.png`} onClick={() => this._imageClick(tile)}
                             alt={`${tile.getId()}`}/>
                    </div>
                )
            }
        } else {
            if (tile.getColor() === "OrangeTile") {
                return (<div className={"grid-cell"} key={`${tile.getId()}`}>
                    <img src='./images/OrangeTile.png'className={"tile"} onClick={() => this._imageClick(tile)}/>
                </div>)
            } else if (tile.getColor() === "WhiteTile") {
                return (<div className={"grid-cell"} key={`${tile.getId()}`}>
                    <img src='./images/WhiteTile.png' className={"tile"} onClick={() => this._imageClick(tile)}/>
                </div>)
            }
        }
        console.log(tile)
    }
}
export default GameBoard;





