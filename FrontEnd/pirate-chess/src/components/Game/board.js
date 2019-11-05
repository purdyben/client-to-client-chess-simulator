import React from 'react';
import tile from './tile';
import Pawn from './GamePieces/Pawn'
import Rook from "./GamePieces/Rook";
import Knight from "./GamePieces/Knight";
import Bishop from "./GamePieces/Bishop";
import Queen from "./GamePieces/Queen";
import King from "./GamePieces/King";

export default class board {
    static popTile(getPrev) {
        // <Tile Id={} x={} y={} piece={} color={}/>
        let tileArr: any = [[], [], [], [],
            [], [], [], []]
        const IdNumber = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        let i, j;
        for (i = 0; i < 8; i++) {
            for (j = 0; j < 8; j++) {
                if (j % 8 === 0) {
                    console.log("popTile call")
                    tileArr[i].push(<tile Id={IdNumber[j] + (8 - i)} x={j} y={i} piece={null} color={"BlackTile"}/>
                    );
                } else if (getPrev(tileArr, i, j) !== "OrangeTile") {
                    tileArr[i].push(<tile Id={IdNumber[j] + (8 - i)} x={j} y={i} piece={null} color={"OrangeTile"}/>
                    );

                } else if (getPrev(tileArr, i, j) !== "WhiteTile") {
                    tileArr[i].push(<tile Id={IdNumber[j] + (8 - i)} x={j} y={i} piece={null} color={"WhiteTile"}/>
                    );
                }
            }
        }
        console.log(tileArr);
        // this.setDefaultBoard(tileArr);
        return tileArr;
    }

    setDefaultBoard(tileArr) {
        let Default = this.startingPiecesArr();
        let White = tileArr[6];
        let Black = tileArr[1];
        let i;
        for (i = 0; i < 8; i++) {
            White[i].setPiece(new Pawn({tile: White[i], name: "WhitePawn"}));
            console.log(White[i].state.piece, "this is my method")
            Black[i].setPiece(new Pawn({tile: White[i], name: "BlackPawn"}));
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

    static getPrev(tileArr, row, col) {
        if (row === 0 && col === 0) {
            return (//<tile Id={0} x={0} y={0} piece={null} color={"WhiteTile"}/>
                new tile({
                    Id: 0,
                    x: 0,
                    y: 0,
                    piece: "null",
                    color: "WhiteTile",
                })
            );
        } else if (col === 0) {
            return (tileArr[row - 1][7])
        } else {
            return (tileArr[row][col - 1])
        }
    }
}

