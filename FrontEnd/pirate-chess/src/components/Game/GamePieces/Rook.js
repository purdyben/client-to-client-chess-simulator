import React, {Component} from 'react';


class Rook extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            tile: props.tile,
            name: props.name
        };
        this.getName = this.getName.bind(this);
        this.setTile = this.setTile.bind(this);
        this.setName = this.setName.bind(this);
    }

    state = {
        tile: null,
        name: null,
    };

    getName() {
        return (this.state.name);
    }

    setName(newName) {
        this.state.name = newName;
    }

    setTile(newTile) {
        this.state.tile = newTile;
    }


    posibleMoves(tile) {

    };

}

export default Rook;