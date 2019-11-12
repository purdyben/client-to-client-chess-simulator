import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import CHeader from './CustomHeader';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  };


  handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.message);
      this.ws.send(JSON.stringify('user' + this.state.message));
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
      console.log(message)
      }

      this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss

      }

  }

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