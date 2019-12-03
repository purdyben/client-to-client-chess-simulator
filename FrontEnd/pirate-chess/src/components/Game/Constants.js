import HandleMovment from './HandleMovment';
import board from './board';

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


window.wSocket = Iran();
//new WebSocket('ws://coms-309-bs-4.misc.iastate.edu:8080/game/userName')
//'ws://coms-309-bs-4.misc.iastate.edu:8080/game/userName'
//'ws://demos.kaazing.com/echo'

function Iran() {
    let m = Math.round(Math.random())
    if (m === 1) {
        console.log('ben')
        return new WebSocket('ws://coms-309-bs-4.misc.iastate.edu:8080/game/ben')
    } else {
        console.log('Colby')
        return new WebSocket('ws://coms-309-bs-4.misc.iastate.edu:8080/game/colby')
    }
}

/**
 *
 * @returns {*}
 */
export function setBoard() {
    board.setDefaultBoard(this.gameboard);
    this.updateAllMoveSets()
    return this.gameboard
}

/**
 *
 */
export function updateAllMoveSets() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (this.gameboard[i][j].piece != null) {
                // console.log(Constants.gameboard[i][j].piece.name)
                this.gameboard[i][j].piece.resetMoves()
            }
        }
    }
}

