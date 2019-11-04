import React, {Component} from 'react';
import tile from './tile';
import * as Constants from './Constants';


class GameBoard extends Component {

    constructor(props) {
        super(props);
        this._imageClick = this._imageClick.bind(this);
    }

    state = {
        board: Constants.gameboard,
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

    _imageClick(tile) {
        if (Constants.moveHandler.handleMovment(tile))
            this.forceUpdate();

    }

    render() {
        {
            console.log("render method has been called")
        }
        {
            console.log(Constants.gameboard)
        }
        return (
            <div className='gamePage'>
                <tile Id={0} x={0} y={0} piece={null} color={"GreenTile"}/>
                <div className='flex-row'>
                    {/*{[this.state.board[0][0], this.state.board[1][0], this.state.board[2][0], this.state.board[3][0],*/}
                    {/*    this.state.board[4][0], this.state.board[5][0], this.state.board[6][0], this.state.board[7][0]].map(tile => (*/}
                    {/*    /!*<h1>ya</h1>*!/*/}
                    {/*    this.displayNum(tile, false)*/}
                    {/*))}*/}
                </div>
                <div className='gameBoard'>
                    <div className="grid">

                        {this.state.board.map(row => (
                            row.map(tile => (
                                // this.renderPiece(tile)
                                <li key={row}>
                                    {tile}
                                </li>

                            ))
                        ))}
                        {/*{this.state.board[7].map(tile => (*/}
                        {/*    this.displayNum(tile, false)*/}
                        {/*))}*/}
                    </div>
                    <div className="grid">
                        {<tile Id={0} x={0} y={0} piece={null} color={"GreenTile"}/>}
                        {/*{this.state.board.map(row => (*/}
                        {/*    row.map(tile => (*/}
                        {/*        tile.render()*/}


                        {/*    ))*/}
                        {/*))}*/}
                    </div>
                </div>

            </div>
        )
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





