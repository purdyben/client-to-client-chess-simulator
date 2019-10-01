import React from 'react';
import axios from 'axios';
import {Button, Form, Label, FormGroup, Input} from 'reactstrap';

export default class Leaderboard extends React.Component {
  state = {
    name: '',
  }
  
  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res.data.user);
      })
  }

  render() {
    return (
      <header className="App-header">
        <img src="logo.png" className="App-logo" alt="logo" />
        <div className="Login-buttons">
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="username" name="username" id="username" placeholder="Username" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Password" />
            </FormGroup>
            <Button type="submit" color="primary" size="lg" href="/mainScreen" onClick={this.handleSubmit} block>Login</Button> 
          </Form>
        </div>
      </header>
    )
  }
}