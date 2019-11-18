import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import CHeader from './CustomHeader';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayChat: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  };


  handleSubmit(event) {
      event.preventDefault();
      this.ws.send(JSON.stringify('!all ' + this.state.message));
  }

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
      this.setState({displayChat: this.state.displayChat + "\n" + message.substring(5)})
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
    }

  };

  //get and post methods here
  render() {
    const {
      message
    } = this.state;
    return (
      <header className="App-header">
        <CHeader/>
        <img src="logo.png" className="App-logo-small" alt="logo" />
        <Container>
          <Row>
            <Col>
              <Label type="text" name="displayChat" id="displayChat">{this.state.displayChat}</Label>
              <br/>
              <br/>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Input value={message} type="text" name="message" id="message" placeholder="Message" onChange={this.handleChange}/>
                </FormGroup>
                <Button color="primary" size="lg" type="submit" block>Send Message</Button>
              </Form>
              <br/>
              <br/>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}