import React, {Component} from 'react';
import ChildComponent from './ChildComponent'

class OpenSocket extends Component {
    client = new WebSocket('client://localhost:3000/client');

    componentDidMount() {
        this.client.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // listen to data sent from the websocket server
            const message = JSON.parse(evt.data)
            this.setState({dataFromServer: message})
            console.log(message)
        }

        this.client.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss

        }

    }

    render() {
        return(< ChildComponent websocket={this.client} />)
    }
}

export default OpenSocket;