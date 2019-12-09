import React, {Component} from 'react'
import GameBoard from './GameBoard'
import CHeader from "../CustomHeader";
import PickURL from "./PickURL";
class GamePage extends Component {


    render() {
        return (
            <div>
                <div>
                    <CHeader/>
                    <GameBoard/>
                </div>
            </div>

        );
    }
}

export default GamePage;