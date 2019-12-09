import React, {Component} from 'react';
import GameBoard from "./GameBoard";
import {Button} from "reactstrap";


class PickURL extends Component {
    firstButton(Name) {
        if(String === 'Ben'){
            window.wSocket =  new WebSocket('ws://coms-309-bs-4.misc.iastate.edu:8080/game/ben')
            console.log(window.wSocket)
        }else{
            window.wSocket =  new WebSocket('ws://coms-309-bs-4.misc.iastate.edu:8080/game/colby')
            console.log(window.wSocket)
        }
    }
    render() {
        return (
            <div className={'row'}>
                <div className={'buttonSize'}>
                    <Button color="primary" size="lg" onClick={() => this.firstButton('Colby')}>Colby</Button>
                </div>
                <div className={'buttonSize'}>
                    <Button color="primary" size="lg" onClick={() => this.firstButton('Ben')}>Ben</Button>
                </div>


             </div>
        );
    }
}

export default PickURL





