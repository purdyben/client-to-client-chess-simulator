import React from 'react';
import {wSocket} from '../Constants';

export default class OpenSocket extends React.Component {
    //ws = new WebSocket('ws://coms-309-bs-4.misc.iastate.edu:8080/game/userName')

    // componentDidMount() {
    //   //  Constants.wSocket
    //     wSocket.onopen = () => {
    //         // on connecting, do nothing but log it to the console
    //         console.log('connected')
    //     }
    //
    //     wSocket.onmessage = evt => {
    //         // listen to data sent from the websocket server
    //         console.log("this is my test mesage", 1)
    //         console.log('Received data: ' + evt.data, 2);
    //         const message = JSON.parse(evt.data.substring(1,5))
    //         // this.setState({dataFromServer: message})
    //         console.log(message, 3)
    //     }
    //
    //     wSocket.onclose = () => {
    //         console.log('disconnected')
    //         // automatically try to reconnect on connection loss
    //
    //     }
    //
    // }

    // componentWillMount() {
    //     this.ws.onopen = () => {
    //         console.log('WebSocket Client Connected');
    //     };
    //     this.ws.onmessage = (message) => {
    //         console.log(message);
    //     };
    // }

    render(){
        return (null)
    }
}