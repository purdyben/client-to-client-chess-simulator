import React from 'react';
import Rook from "./GamePieces/Rook";
import Knight from "./GamePieces/Knight";
import Bishop from "./GamePieces/Bishop";
import Queen from "./GamePieces/Queen";
import King from "./GamePieces/King";
import Pawn from './GamePieces/Pawn'

export default class board {
    static popTile(getPrev, setDefaultBoard) {
        // <Tile Id={} x={} y={} piece={} color={}/>
        let tileArr: any = [[], [], [], [],
            [], [], [], []]
        const IdNumber = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        let i, j;
        for (i = 0; i < 8; i++) {
            for (j = 0; j < 8; j++) {
                if (j % 8 === 0) {
                    tileArr[i].push({
                        id: IdNumber[j] + (8 - i),
                        x: j,
                        y: i,
                        piece: null,
                        selectedTile: false,
                        color: getPrev(tileArr, i, j)
                    });
                } else if (getPrev(tileArr, i, j) !== "OrangeTile") {
                    tileArr[i].push({
                        id: IdNumber[j] + (8 - i),
                        x: j,
                        y: i,
                        piece: null,
                        selectedTile: false,
                        color: "OrangeTile"
                    });

                } else if (getPrev(tileArr, i, j) !== "WhiteTile") {
                    tileArr[i].push({
                        id: IdNumber[j] + (8 - i),
                        x: j,
                        y: i,
                        piece: null,
                        selectedTile: false,
                        color: "WhiteTile"
                    });
                }
            }
        }
        console.log(tileArr);
        setDefaultBoard(tileArr);
        return tileArr;
    }

    static setDefaultBoard(tileArr) {
        let PieceSet: any = ([new Rook({name: "Rook"}), new Knight({name: "Knight"}), new Bishop({name: "Bishop"}),
            new Queen({name: "Queen"}), new King({name: "King"}), new Bishop({name: "Bishop"}),
            new Knight({name: "Knight"}), new Rook({name: "Rook"}), new Rook({name: "Rook"}), new Knight({name: "Knight"}), new Bishop({name: "Bishop"}),
            new Queen({name: "Queen"}), new King({name: "King"}), new Bishop({name: "Bishop"}),
            new Knight({name: "Knight"}), new Rook({name: "Rook"})]);

        let White = tileArr[6];
        let Black = tileArr[1];
        let i;
        for (i = 0; i < 8; i++) {
            White[i].piece = (new Pawn({Tile: White[i], name: "WhitePawn"}));
            Black[i].piece = (new Pawn({Tile: White[i], name: "BlackPawn"}));
        }
        White = tileArr[7];
        Black = tileArr[0];
        for (i = 0; i < 8; i++) {
            PieceSet[i].state.name = ('White' + PieceSet[i].state.name)
            White[i].piece = PieceSet[i];
            PieceSet[i + 8].state.name = ('Black' + PieceSet[i + 8].state.name)
            Black[i].piece = PieceSet[i + 8];
        }
    };

    static getPrev(tileArr, row, col) {
        if (row === 0 && col === 0) {
            return ("WhiteTile")
        } else if (col === 0) {
            return (tileArr[row - 1][7].color)
        } else {
            return (tileArr[row][col - 1].color)
        }
    }
}

