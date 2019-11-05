import React, {Component} from 'react';
import tile from '../tile';
import * as Constants from '../Constants'

/**
 * this is my test class
 */
class Test extends Component{
    /**
     * ehjsdbfaksdfhglkshksadghfksaghk
     * @param props
     * @constructor
     */
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

    /**
     *
     * @returns {string}
     */
    getName(){
        return(this.state.name);
    }

    /**
     * @param newName
     */
    setName(newName){
        this.state.name = newName;
    }

    /**
     *
     * @param newTile
     */
    setTile(newTile){
        this.state.tile = newTile;
    }


    posibleMoves(tile){

    };

}

/**
 *
 */
export default Test;