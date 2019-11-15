import React, {Component} from 'react';
import * as Constants from './Constants';


class Tile extends Component {

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
    };

    setSelectedTile = (bool) => {
        this.setState({selectedTile: bool})
    }

    _TestimageClick(tile) {
        if (Constants.moveHandler.handleMovment(tile)) {
            this.forceUpdate();
        }
    }
    setPiece(newPiece){
        this.setState({piece: newPiece})
    }


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

    render() {
        const {id, color, /*piece,selectedTile*/} = this.props

        if (this.state.selectedTile === true) {
            return (<div className={"grid-cell"} key={`${id}`}>
                    <img style={Constants.style.GreenTile} className={"tile"}
                         src={`./images/${this.state.piece.getName()}.png`} onClick={() => this._TestimageClick(this)}
                         alt={`${id}`}/>
                    <h style={Constants.style.GreenTile}  className={"tile"}>{`${this.state.id}`}</h>
                </div>
            )
        } else if (this.state.piece != null) {
            return (<div className={"grid-cell"} key={`${id}`}>
                    <img style={this.getstyle(color)} className={"tile"}
                         src={`./images/${this.state.piece.getName()}.png`} onClick={() => this._TestimageClick(this)}
                         alt={`${id}`}/>
                </div>
            )
        } else {
            return (
                <div className={"grid-cell"} key={`${id}`}>
                    <img className={"tile"}
                         src={`./images/${color}.png`} onClick={() => this._TestimageClick(this)}
                         alt={`${id}`}/>
                </div>
            )
        }

    }
}

export default Tile;