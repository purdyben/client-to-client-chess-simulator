import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import CHeader from './CustomHeader';
import axios from 'axios';

export default class Login extends React.Component {
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

        const response = axios.post(
            'http://coms-309-bs-4.misc.iastate.edu:8080/login',
            { userName: this.state.username, userPassword: this.state.password },
            { headers: { 'Content-Type': 'application/json' } }
        )
        console.log(response);
        this.props.history.push('/mainScreen');
        
    }
    render() {
        const {
            username,
            password
          } = this.state;
        return (
            <header className="App-header">
                <CHeader/>
                <img src="logo.png" className="App-logo" alt="logo"/>
                <div className="Login-buttons">
                <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="username">Enter Username</Label>
                            <Input value={username} type="text" name="username" id="username" placeholder="Username" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input value={password} type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange}/>
                        </FormGroup>
                        <Button color="primary" size="lg" type="submit" block>Login</Button>
                    </Form>
                </div>
            </header>
        )
    }
}
