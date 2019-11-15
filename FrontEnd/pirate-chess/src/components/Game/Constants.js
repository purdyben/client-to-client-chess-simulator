import HandleMovment from './HandleMovment';
import board from './board';
import OpenSocket from './GameCommunication/OpenSocket'

export const style = {

    WhiteTile: {
        backgroundImage: `url('./images/WhiteTile.png')`
    },
    BlackTile: {
        backgroundImage: `url('./images/BlackTile.png')`
    },
    OrangeTile: {
        backgroundImage: `url('./images/OrangeTile.png')`
    },
    GreenTile: {
        backgroundImage: `url('./images/GreenTile.png')`
    }
};

export const moveHandler = new HandleMovment();
export let moveCount = 0;
export var gameboard = board.popTile(board.getPrev, board.setDefaultBoard);

export function setBoard() {
    board.setDefaultBoard(this.gameboard);
    this.updateAllMoveSets()
    return this.gameboard
}
export let GameSocket = new OpenSocket();
export function updateAllMoveSets(){
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (this.gameboard[i][j].piece != null) {
                // console.log(Constants.gameboard[i][j].piece.name)
                this.gameboard[i][j].piece.resetMoves()
            }
        }
    }
}

