import React, {Component} from 'react'
import tile from '../tile'
import * as Constants from '../Constants'

/**
 * ksakhasgr
 */
class Pawn extends Component {
    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props)

        this.state = {
            tile: props.tile,
            name: props.name,
            MoveSet: this.getAllPosibleMoves(),
            firstMove: true
        }
        this.getName = this.getName.bind(this)
        this.setTile = this.setTile.bind(this)
        this.setName = this.setName.bind(this)
    }

    /**
     *
     * @returns {string}
     */
    getName() {
        return (this.state.name)
    }

    /**
     *
     * @param newName
     */
    setName(newName) {
        this.state.name = newName
    }

    /**
     *
     * @param newTile
     */
    setTile(newTile) {
        this.state.tile = newTile
    }

    /**
     *
     * @param tile
     * @param comparableTile
     * @returns {boolean}
     */
    posibleMove(tile, comparableTile) {
        for (let i = 0; i < this.state.moveSet.length; i++) {
            if (this.state.MoveSet[i] == comparableTile) {
                return true
            }
        }
        return false


    }

    /**
     *
     * @returns {tile[]}
     */
    getAllPosibleMoves() {
        let MoveSet: tile[]
        if (true) {

            // MoveSet[0] = (Constants.gameboard[this.state.tile.state.x][this.state.tile.state.y + 1])
            // MoveSet[1] = (Constants.gameboard[this.state.tile.state.x][this.state.tile.state.y + 2])
        } else {

        }
        return MoveSet
    }

    /**
     *
     * @returns {*}
     */
    render() {
        return (
            <div>
                <h1>hello</h1>
                <img className={"tile"}
                     src={`./images/${this.state.name + "Pawn"}.png`}/>
            </div>
        )
    }

}

export default Pawn
