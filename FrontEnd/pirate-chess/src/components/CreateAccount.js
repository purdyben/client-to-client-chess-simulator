import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import CHeader from './CustomHeader';
import Axios from 'axios';

export default class CreateAccount extends React.Component {
    state = {
      username: "",
      password: "",
      confirmPassword: ""
    }

    componentDidMount() {
        const response = await axios.post(
            'https://example.com',
            { username: this.state.username },
            { headers: { 'Content-Type': 'application/json' } }
          )
          console.log(response.data)
    }

    render() {
        return (
            <header className="App-header">
                <CHeader/>
                <img style={{width: 150, height: 150}} src="logo.png" className="App-logo-small" alt="logo"/>
                <div className="Login-buttons">
                    <Form>
                        <FormGroup>
                            <Label for="newUsername">Enter Username</Label>
                            <Input type="newUsername" name="newUsername" id="newUsername" placeholder="Username"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="newPassword">Password</Label>
                            <Input type="newPassword" name="newPassword" id="newPassword" placeholder="Password"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmNewPassword">Confirm Password</Label>
                            <Input type="confirmNewPassword" name="confirmNewPassword" id="confirmNewPassword"
                                placeholder="Confirm Password"/>
                        </FormGroup>
                    </Form>
                    <Button color="primary" size="lg" href="/mainScreen" block>Create Account</Button>
                    <br/>
                </div>
            </header>
        );
    }
}
