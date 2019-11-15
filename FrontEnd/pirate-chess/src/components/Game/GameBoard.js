import React, {Component} from 'react';
import Tile from './Tile';
import * as Constants from './Constants';
import OpenSocket from './GameCommunication/OpenSocket'


class GameBoard extends Component {

    constructor(props) {
        super(props);
        this._imageClick = this._imageClick.bind(this);
    }

    state = {
        board: Constants.setBoard(),
        time: 10,
        players: [{
            player: 1,
            type: 'white'
        }, {
            player: 2,
            type: 'black'
        }],
        selectTile: false,


    }

    _imageClick(Tile) {
        if (Constants.moveHandler.handleMovment(Tile))
            this.forceUpdate();

    }

    componentDidMount() {

    }

    render() {
        console.log("render method has been called")
        console.log(Constants.gameboard)
        return (
            <div className='gamePage'>
                <div>
                    <OpenSocket/>
                </div>
                <div className='flex-row'>
                    {[Constants.gameboard[0][0], Constants.gameboard[1][0], Constants.gameboard[2][0],
                        Constants.gameboard[3][0], Constants.gameboard[4][0], Constants.gameboard[5][0],
                        Constants.gameboard[6][0], Constants.gameboard[7][0]].map(tile => {
                        return (<div className='tile'>
                            <h style={Constants.style.GreenTile} className={"tile"}>{`${tile.id}`}</h>
                        </div>)
                    })}

                </div>

                <div className='gameBoard'>
                    <div className="grid">
                        {this.state.board.map(row => (
                            row.map(tile => {
                                return (
                                    <div>
                                        <Tile id={tile.id} x={tile.x} y={tile.y} color={tile.color}
                                              piece={tile.piece} selectedTile={tile.selectedTile} clickTile={tile}/>
                                    </div>
                                )
                            })
                        ))}
                    </div>
                    <div className="grid">
                        {Constants.gameboard[7].map(tile => {
                            return (<div className='tile'>
                                <h style={Constants.style.GreenTile} className={"tile"}>{`${tile.id}`}</h>
                            </div>)
                        })}
                    </div>
                </div>


            </div>
        )
    }

    mount(tile) {
        this.ReactDOM.mount(tile)
        return tile
    }

    displayNum(tile, left) {
        if (tile.getId().substring(0, 1) === "a" && left === true) {
            return (<div className={"grid-cell"} key={`${tile.getId()}`}>
                <p className={"leftRow"}>{tile.getId().substring(1, 2)}</p>
            </div>)
        } else if (tile.getId().substring(1, 2) === "1") {
            return (<div className={"grid-cell"} key={`${tile.getId()}`}>
                <p className={"tile"}>{tile.getId()}</p>
            </div>)
        }
    }

    renderPiece(tile) {
        if (tile.getSelectedTile() === true) {
            if (tile.getPiece() !== null) {
                return (<div className={"grid-cell"} key={`${tile.getId()}`}>
                    <img style={Constants.style.GreenTile} className={"tile"}
                         src={`./images/${tile.getPiece().getName()}.png`} onClick={() => this._imageClick(tile)}
                         alt={`${tile.getId()}`}/>
                </div>)
            }
            return (<div className={"grid-cell"} key={`${tile.getId()}`}>
                <img className={"tile"}
                     src={'./images/BlackTile.png'} onClick={() => this._imageClick(tile)}
                     alt={`${tile.getId()}`}/>
            </div>)
        }
        // -------------------------------------------------- obove needs to be re done
        if (tile.getPiece() !== null) {
            if (tile.getColor() === "OrangeTile") {
                return (<div className={"grid-cell"} key={`${tile.getId()}`}>
                        <img style={Constants.style.OrangeTile} className={"tile"}
                             src={`./images/${tile.getPiece().getName()}.png`} onClick={() => this._imageClick(tile)}
                             alt={`${tile.getId()}`}/>
                    </div>
                )
            } else {
                return (
                    <div className={"grid-cell"} key={`${tile.getId()}`}>
                        <img style={Constants.style.WhiteTile} className={"tile"}
                             src={`./images/${tile.getPiece().getName()}.png`} onClick={() => this._imageClick(tile)}
                             alt={`${tile.getId()}`}/>
                    </div>
                )
            }
        } else {
            if (tile.getColor() === "OrangeTile") {
                return (<div className={"grid-cell"} key={`${tile.getId()}`}>
                    <img src='./images/OrangeTile.png' className={"tile"} onClick={() => this._imageClick(tile)}/>
                </div>)
            } else if (tile.getColor() === "WhiteTile") {
                return (<div className={"grid-cell"} key={`${tile.getId()}`}>
                    <img src='./images/WhiteTile.png' className={"tile"} onClick={() => this._imageClick(tile)}/>
                </div>)
            }
        }
        console.log(tile)
    }

}

export default GameBoard





