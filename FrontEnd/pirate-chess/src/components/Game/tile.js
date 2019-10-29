import React, {Component} from 'react';
import * as Constants from './Constants'


class tile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Id: props.Id,
            piece: props.piece,
            color: props.color,
            selectedTile: false,
        };
        this.getColor = this.getColor.bind(this);
        this.getId = this.getId.bind(this);
        this.getPiece = this.getPiece.bind(this);
        this.setPiece = this.setPiece.bind(this);
        this.getSelectedTile = this.getSelectedTile.bind(this)
        this.setSelectedTile = this.setSelectedTile.bind(this)
    };

    getSelectedTile() {
        return (this.state.selectedTile);
    }

    setSelectedTile = (bool) => {
        this.state.selectedTile = bool;
    }

    getColor() {
        return (this.state.color);
    }

    getPiece() {
        return (this.state.piece);
    }

    getId() {
        return (this.state.Id);
    }

    setPiece = (pie) => {
        this.state.piece = pie;
    };

    _TestimageClick(tile) {
        if (Constants.moveHandler.handleMovment(tile)) {
            this.forceUpdate();
        }
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
        if (this.state.selectedTile === true) {
            return (<div className={"grid-cell"} key={`${this.getId()}`}>
                    <img style={Constants.style.GreenTile} className={"tile"}
                         src={`./images/${this.getPiece().getName()}.png`} onClick={() => this._TestimageClick(this)}
                         alt={`${this.getId()}`}/>
                </div>
            )
        } else if (this.getPiece() != null) {
            return (<div className={"grid-cell"} key={`${this.getId()}`}>
                    <img style={this.getstyle(this.getColor())} className={"tile"}
                         src={`./images/${this.getPiece().getName()}.png`} onClick={() => this._TestimageClick(this)}
                         alt={`${this.getId()}`}/>
                </div>
            )
        } else {
            return (
                <div className={"grid-cell"} key={`${this.getId()}`}>
                    <img className={"tile"}
                         src={`./images/${this.getColor()}.png`} onClick={() => this._TestimageClick(this)}
                         alt={`${this.state.Id}`}/>
                </div>
            )
        }

    }
}

export default tile;