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
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <header className="App-header">
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
        <img src="logo.png" className="App-logo" alt="logo" />
        <div className="Login-buttons">
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="username" name="username" id="username" placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Password" />
            </FormGroup>
          </Form>
          <Button color="primary" size="lg" href="/mainScreen" block>Login</Button>
        </div>
      </header>
    )
  }
}