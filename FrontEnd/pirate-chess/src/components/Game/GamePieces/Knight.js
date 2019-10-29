import React, {Component} from 'react';
import tile from '../tile';
import * as Constants from '../Constants'

class Knight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tile: props.tile,
            name: props.name
        };
        this.getName = this.getName.bind(this);
        this.setTile = this.setTile.bind(this);
        this.setName = this.setName.bind(this);
    }

    getName() {
        return (this.state.name);
    }

    setName(newName) {
        this.state.name = newName;
    }

    setTile(newTile) {
        this.state.tile = newTile;
    }

    posibleMoves(tile){

    };

}

export default Knight;