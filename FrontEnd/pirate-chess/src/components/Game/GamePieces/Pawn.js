import React, {Component} from 'react';
import tile from '../tile';
import * as Constants from '../Constants'

class Pawn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tile: props.tile,
            name: props.name,
            firstMove: true
        };
        this.getName = this.getName.bind(this);
        this.setTile = this.setTile.bind(this);
        this.setName = this.setName.bind(this);
    }
    getName(){
        return(this.state.name);
    }
    setName(newName){
        this.state.name = newName;
    }
    setTile(newTile){
        this.state.tile = newTile;
    }
    posibleMoves(tile){
        if(this.state.firstMove === true){

        }else{

        }

    };


    render(){
        return(
            <div>
                <h1>hello</h1>
                <img className={"tile"}
                     src = {`./images/${this.state.name+"Pawn"}.png`}/>
            </div>
        );
    }

}
export default Pawn;
