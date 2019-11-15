import React, {Component} from 'react'
import GameBoard from './GameBoard'

class GamePage extends Component {


    render() {
        return (
            <div>
                <div>
                    <img className="tile" src={`./logo.png`}  alt={''}/>
                    <GameBoard/>
                </div>
            </div>

        );
    }
}

export default GamePage;