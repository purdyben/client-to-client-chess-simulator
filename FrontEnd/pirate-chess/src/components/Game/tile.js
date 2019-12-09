import React, {Component} from 'react';
import * as Constants from './Constants';


class Tile extends Component {
    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            x: props.x,
            y: props.y,
            piece: props.piece,
            color: props.color,
            selectedTile: false,
        };
        this.setPiece = this.setPiece.bind(this)
        this.reRender = this.reRender.bind(this)
    };
    reRender(){
        this.forceUpdate();
    }

    setPiece(newPiece) {
        this.setState({piece: newPiece})
    }

    /**
     *
     * @param tile
     * @private
     */
    _imageClick(tile) {
        Constants.moveHandler.handleMovment(tile)
        this.props.imageClick()
    }
    /**
     *Returns an the tiles current model based
     * @returns {*}
     */
    render() {
        const {id, color, piece,selectedTile} = this.props;
        /**
         * shows if a tile is selected ( green background
         */
        if (this.state.selectedTile === true) {
            return (<div className={"grid-cell"} key={`${id}`} id={`${id}`}>
                    <img style={Constants.style.GreenTile} className={"tile"}
                         src={`./images/${piece.getName()}.png`} onClick={() => this._imageClick(this)}
                         alt={`${id}`}/>
                    {/*<p  style={Constants.style.GreenTile}  className={"tile"}>{`${this.state.id}`}</p>*/}
                </div>
            )

        }
        /**
         * shows if a tile if there is a piece
         */
        else if (piece != null) {
            return (<div className={"grid-cell"} key={`${id}`} id={`${id}`}>
                    <img style={this.getstyle(color)} className={"tile"}
                         src={`./images/${piece.getName()}.png`} onClick={() => this._imageClick(this)}
                         alt={`${id}`}/>
                </div>
            )
        }
        /**
         * shows if a tile if there is no piece
         */
        else {
            return (
                <div className={"grid-cell"} key={`${id}`} id={`${id}`}>
                    <img className={"tile"}
                         src={`./images/${color}.png`} onClick={() => this._imageClick(this)}
                         alt={`${id}`}/>
                </div>
            )
        }

    }

    /**
     *
     * @param color
     * @returns {style.OrangeTile|{backgroundImage}|style.WhiteTile|{backgroundImage}|style.BlackTile|{backgroundImage}|style.GreenTile|{backgroundImage}}
     */
    getstyle(color) {
        switch (color) {
            case 'OrangeTile':
                return Constants.style.OrangeTile
            case 'WhiteTile':
                return Constants.style.WhiteTile
            case 'GreenTile':
                return Constants.style.GreenTile
            case 'BlackTile':
                return Constants.style.BlackTile
        }
    }
}

export default Tile;