import React, {Component} from 'react';
import tile from '../tile';
import Draggable from 'react-draggable';


class King extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tile: props.tile,
            name: props.name
        };
        this.getName = this.getName.bind(this)
    }
    getName(){
        return(this.state.name);
    }



    // PosibleMoves(){
    //
    // };
}
export default King;