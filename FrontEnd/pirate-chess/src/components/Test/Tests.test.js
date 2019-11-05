import tile from '../Game/tile';
import GameBoard from './GameBoard';

test.getId(){
    let tile = new tile({
        Id: 'a1',
        piece: null,
        color: "OrangeTile"
    });
  if(tile.getId() === a1)
      return true
  else
      return false
}

test.setPiece(){
    let tile = new tile({
        Id: 'a1',
        piece: null,
        color: "OrangeTile"
    });
    tile.setPiece(new Pawn({tile: tileArr[i], name: "WhitePawn"}))
    if(tile.getPiece().name === 'WhitePawn'){
        return true
    }else{
        return false
    }
}
test.GameBoard(){
    let board = new GameBoard()
    if (board.getPrev(Board.state.board,0,1) === board.state.board[0][0] )
        return true
    else
        return false

}

