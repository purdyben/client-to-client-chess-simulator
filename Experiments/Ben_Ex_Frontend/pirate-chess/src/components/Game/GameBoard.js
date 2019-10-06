import React, {Component} from 'react';

class GameBoard extends Component{
    state = {
        board : '',
        time: 10,
        players: [{
           player: 1,
           type: 'white'
         },{
           player: 2 ,
           type: 'black'
        }]


    };
    render(){
        return(
            <div>
                <h1>{this.state.time} is the time</h1>
                <img
                    className={"board"}
                    src = {'./images/chessboard.png'}/>
                <img
                    className={"testPawn"}
                    src = {'./images/testPawn.png'}/>

            </div>

        )

    }
}
export default GameBoard;