import React from 'react';
import {Button, Form, Label, FormGroup, Input} from 'reactstrap';

const CreateAccount = () => (
    <header className="App-header">
      <img src="logo.png" className="App-logo" alt="logo" />
      <div className="Login-buttons">
        <Form>
          <FormGroup>
            <Label for="newUsername">Enter Username</Label>
            <Input type="newUsername" name="newUsername" id="newUsername" placeholder="Username" />
          </FormGroup>
          <FormGroup>
            <Label for="newPassword">Password</Label>
            <Input type="newPassword" name="newPassword" id="newPassword" placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <Label for="confirmNewPassword">Confirm Password</Label>
            <Input type="confirmNewPassword" name="confirmNewPassword" id="confirmNewPassword" placeholder="Confirm Password" />
          </FormGroup>
        </Form>
        <Button color="primary" size="lg" href="/mainScreen" block>Create Account</Button>
      </div>
    </header>
  )

export default CreateAccount;