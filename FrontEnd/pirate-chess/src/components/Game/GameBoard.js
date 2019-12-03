import React, {Component} from 'react';
import Tile from './Tile';
import * as Constants from './Constants';
import Timer from './Timer.js';
import CHeader from '../CustomHeader';


class GameBoard extends Component {
    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this._imageClick = this._imageClick.bind(this);
        this.renderBoard = this.renderBoard.bind(this);

        this.state = {
            board: Constants.setBoard(),
            time: 10,
            players: [{
                player: 1,
                type: 'white'
            }, {
                player: 2,
                type: 'black',
            }],
            selectTile: false,
        }
    }

    /**
     * componentDidMount Game websocket
     */
    componentDidMount() {
        window.wSocket.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }
        /**
         *
         * @param evt
         */
        window.wSocket.onmessage = evt => {
            console.log(evt)
            console.log('Received data: ' + evt.data);
            let obj = JSON.parse(evt.data)
            //console.log(obj.Move[0].x, obj.Move[1].x)
            //console.log(Constants.gameboard[obj.Move[0].y][obj.Move[0].x], Constants.gameboard[obj.Move[1].y][obj.Move[1].x])
            Constants.moveHandler.receiveMove(Constants.gameboard[obj.Move[0].y][obj.Move[0].x], Constants.gameboard[obj.Move[1].y][obj.Move[1].x])
            console.log(this.state.board)
            //let eleId = document.findElementById(obj.Move[0].id)
            var sgs =  ReactDOM.findDOMNode(obj.Move[0].id)
            console.log(sgs)
        }
        /**
         *
         */
        window.wSocket.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss

        }

    }

    /**
     *
     * @param Tile
     * @private
     */
    _imageClick(Tile) {
        if (Constants.moveHandler.handleMovment(Tile))
            this.forceUpdate();

    }

    renderBoard() {
        return (this.state.board.map(row => (
                row.map(tile => {
                    return (
                        <div key={tile.id}>
                            <Tile id={tile.id} x={tile.x} y={tile.y} color={tile.color}
                                  piece={tile.piece} selectedTile={tile.selectedTile} clickTile={tile}/>
                        </div>
                    )
                })
            )
        ))
    }


    render() {
        console.log("render method has been called")
        console.log(Constants.gameboard)
        return (
            <div className='gamePage'>
                <CHeader/>
                <Timer/>
                <tile Id={0} x={0} y={0} piece={null} color={"GreenTile"}/>
                <div className='flex-row'>
                    {[Constants.gameboard[0][0], Constants.gameboard[1][0], Constants.gameboard[2][0],
                        Constants.gameboard[3][0], Constants.gameboard[4][0], Constants.gameboard[5][0],
                        Constants.gameboard[6][0], Constants.gameboard[7][0]].map(tile => {
                        return (<div className='tile'>
                            <p style={Constants.style.OrangeTile} className={"tile"}>{`${tile.id}`}</p>
                        </div>)
                    })}

                </div>

                <div className='gameBoard'>
                    <div className="grid">
                        {this.renderBoard()}
                    </div>
                    <div className="grid">
                        {Constants.gameboard[7].map(tile => {
                            return (<div className='tile'>
                                <p style={Constants.style.OrangeTile} className={"tile"}>{`${tile.id}`}</p>
                            </div>)
                        })}
                    </div>
                </div>


            </div>
        )
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





