import React from 'react';

export default class OpenSocket extends React.Component {
    ws = new WebSocket('ws://coms-309-bs-4.misc.iastate.edu:8080/game/userName')

    componentDidMount() {
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // listen to data sent from the websocket server
            const message = JSON.parse(evt.data)
            this.setState({dataFromServer: message})
            console.log(message)
        }

        this.ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss

        }

    }

    render() {
        return (null);
    }
}