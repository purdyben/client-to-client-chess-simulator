import React, {Component} from 'react'
import tile from '../Tile'
import {gameboard} from '../Constants';

/**
 * ksakhasgr
 */
class Pawn extends Component {
    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super()
        this.name = props.name
        this.x = props.x
        this.y = props.y
        this.firstMove = null
        this.moveSet = this.getAllPosibleMoves()
        this.resetMoves = this.resetMoves.bind(this)
    }

    /**
     *
     * @returns {string}
     */
    getName() {
        return (this.name)
    }

    /**
     *
     * @param newName
     */
    setName(newName) {
        this.setState({name: newName});
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
    legalMoves(tile, comparableTile) {
        for (let i = 0; i < this.state.moveSet.length; i++) {
            if (this.state.MoveSet[i] === comparableTile) {
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
        var MoveSet = [];
        if (this.firstMove == null) {
            this.firstMove = true
        } else {
            this.firstMove = false
        }

        if (this.name == 'BlackPawn' && gameboard[this.y + 1][this.x].piece == null) {
            MoveSet.push(gameboard[this.y + 1][this.x])
        } else if (gameboard[this.y - 1][this.x].piece == null) {
            MoveSet.push(gameboard[this.y - 1][this.x])
        }
        if (this.firstMove == true) {
            //console.log((gameboard))
            if (this.name == 'BlackPawn' && gameboard[this.y + 1][this.x].piece == null
                && gameboard[this.y + 2][this.x].piece == null) {
                MoveSet.push(gameboard[this.y + 2][this.x])
            } else if (gameboard[this.y - 2][this.x].piece == null && gameboard[this.y - 1][this.x].piece == null) {
                MoveSet.push(gameboard[this.y - 2][this.x])
            }
        }
        if(this.x < 7){
            if(this.name == 'BlackPawn' && gameboard[this.y+1][this.x+1].piece != null){
                if((gameboard[this.y+1][this.x+1].piece.name).substring(0,5) == 'White' ){
                    MoveSet.push(gameboard[this.x+1][this.y-1])
                }
            }else{

            }
        }
        console.log(this)
        // if (this.name == 'BlackPawn') {
        let tempObject1 = gameboard[this.y-1][this.x -1]
        if (gameboard[this.y-1][this.x].piece == null) {
            // if((gameboard[this.y+1][this.x-1].piece.name).substring(0,5) == 'White' ){
            //     MoveSet.push(gameboard[this.x+1][this.y-1])
            // }
            // if((gameboard[this.x+1][this.y-1].piece.name).substring(0,5) == 'White' ){
            //     MoveSet.push(gameboard[this.x-1][this.y-1])
            // }
        }

        // if( gameboard[this.x+1][this.y-1].piece != null){
        //     console.log("runing")
        //     if(  (gameboard[this.x+1][this.y-1].piece.name).substring(0,5) == 'Black' ){
        //         MoveSet.push(gameboard[this.x+1][this.y-1])
        //     }
        // }
        // if( gameboard[this.x-1][this.y-1].piece != null){
        //     console.log("22runing")
        //     if( (gameboard[this.x+1][this.y-1].piece.name).substring(0,5) == 'Black'){
        //         MoveSet.push(gameboard[this.x-1][this.y-1] )
        //     }
        // }


        return MoveSet
    }

    resetMoves() {
        console.log("reset", this.moveSet)
        this.moveSet = this.getAllPosibleMoves()
        console.log(this.moveSet)
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
