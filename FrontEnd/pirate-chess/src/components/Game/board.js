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
        //setDefaultBoard(tileArr);

        return tileArr;
    }

    static setDefaultBoard(tileArr) {
        let PieceSet: any = ([new Rook({x: 0, y: 7, name: "WhiteRook"}), new Knight({x: 1, y: 7, name: "WhiteKnight"}), new Bishop({x: 2, y: 7, name: "WhiteBishop"}),
            new Queen({x: 3, y: 7, name: "WhiteQueen"}), new King({x: 4, y: 7,name: "WhiteKing"}), new Bishop({x: 5, y: 7, name: "WhiteBishop"}),
            new Knight({x: 6, y: 7, name: "WhiteKnight"}), new Rook({x: 7, y: 7, name: "WhiteRook"}), new Rook({x: 0, y: 0, name: "BlackRook"}),
            new Knight({x: 1, y: 0,name: "BlackKnight"}), new Bishop({x: 2, y: 0, name: "BlackBishop"}), new Queen({x: 3, y: 0,name: "BlackQueen"}),
            new King({x: 4, y: 0, name: "BlackKing"}), new Bishop({x: 5, y: 0, name: "BlackBishop"}), new Knight({x: 6, y: 0,name: "BlackKnight"}), new Rook({x: 7, y: 0, name: "BlackRook"})]);

        let White = tileArr[6];
        let Black = tileArr[1];
        let i;
        for (i = 0; i < 8; i++) {
            White[i].piece = (new Pawn({x: White[i].x, y: White[i].y, name: "WhitePawn"}));
            Black[i].piece = (new Pawn({x: Black[i].x, y: Black[i].y, name: "BlackPawn"}));
        }
        White = tileArr[7];
        Black = tileArr[0];
        for (i = 0; i < 8; i++) {
            White[i].piece = PieceSet[i];
            White[i].piece.x = White[i].x
            White[i].piece.y = White[i].y

            Black[i].piece = PieceSet[i + 8];
            Black[i].piece.x = Black[i].x
            Black[i].piece.y = Black[i].y
            White[i].piece.getAllPosibleMoves()
            Black[i].piece.getAllPosibleMoves()
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

