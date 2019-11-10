import React, {Component} from 'react';
import tile from '../Tile';
import * as Constants from '../Constants'


class King extends Component{
    /**
     *
     * @param props
     * @constructor
     */
    constructor(props) {
        super()
        this.name = props.name
        this.x = props.x
        this.y = props.y
        this.moveSet = this.getAllPosibleMoves()
        this.resetMoves = this.resetMoves.bind(this)
    }

    getAllPosibleMoves() {
        var MoveSet = [];

        return MoveSet
    };

    resetMoves() {
        this.moveSet = this.getAllPosibleMoves()
        console.log(this.moveSet)
    }
    getName() {
        return (this.name);
    }

}
export default King;