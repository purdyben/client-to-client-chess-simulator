import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

export default class Chat extends React.Component {
  ws = new WebSocket('ws://coms-309-bs-4.misc.iastate.edu:8080/chat/userName')

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

  //get and post methods here
  render() {
    return (
      <header className="App-header">
        <img src="logo.png" className="App-logo-small" alt="logo" />
        <Container>
          <Row>
            <Col>

            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}