import React, {Component} from 'react';
class ChildComponent extends Component {

    sendMessage=()=>{
        const {websocket} = this.props // websocket instance passed as props to the child component.

        try {
            websocket.send(websocket.data) //send data to the server
        } catch (error) {
            console.log(error) // catch error
        }
    }
    handleClick() {
        console.log("Did it link");
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                tap me
            </button>
        );
    }
}

export default ChildComponent;