import React from 'react';
import {Button, Form, Label, FormGroup, Input} from 'reactstrap';

const Login = () => (
    <header className="App-header">
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

  export default Login;