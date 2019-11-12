import React, {Component} from 'react';
import GameBoard from './GameBoard';
import OpenSocket from'./GameCommunication/OpenSocket'
import ChildComponent from './GameCommunication/ChildComponent'
class GamePage extends Component {


    render() {


        return (
            <div>


                <div>
                    <img src="./logo.png" className="App-logo-small"/>
                    <OpenSocket/>
                </div>
            </div>

        );

    }


}
export default GamePage;