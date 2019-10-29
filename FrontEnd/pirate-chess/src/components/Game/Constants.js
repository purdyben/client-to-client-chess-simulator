import HandleMovment from './HandleMovment';
import tile from './tile';
import GameBoard from './GameBoard';

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
export var gameboard = null;

export function setGameBoard(board) {
    gameboard = board;
}





