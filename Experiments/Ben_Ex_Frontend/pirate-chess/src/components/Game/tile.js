import React, {Component} from 'react';
class tile extends Component{
    constructor(props){
        super(props);
        this.state = {Id: props.Id,
            piece: props.piece,
            color: props.color};
        this.getColor = this.getColor.bind(this);
    };
    state = {
        Id:"",
        piece: "",
        color: null,

    };
    getColor(){
        return(this.state.color);
    }
}
export default tile;