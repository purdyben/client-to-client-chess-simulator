import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import CHeader from './CustomHeader';
import axios from 'axios';

export default class CreateAccount extends React.Component {
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

        if(this.state.username != undefined && this.state.username.length > 5 && 
            this.state.password != undefined && this.state.password == this.state.confirmPassword && 
            this.state.password.length > 7 && this.state.email != undefined && this.state.email.length > 5) {
            const response = axios.post(
                'http://coms-309-bs-4.misc.iastate.edu:8080/users/new',
                { userPassword: this.state.password, userName: this.state.username, 
                    displayName: this.state.username, email: this.state.email},
                { headers: { 'Content-Type': 'application/json' } }
            )
            console.log(response);
            this.props.history.push('/login');
        } else {
            alert('Make sure the following are correct: \n\nUsername must be at least 5 characters long \nEmail must be at least 5 characters long \nPassword must be at least 8 characters long \nPasswords must match ');
        }
    }

    render() {
        const {
            username,
            password,
            confirmPassword,
            email
          } = this.state;
        return (
            <header className="App-header">
                <CHeader/>
                <div className="Login-buttons">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="username">Enter Username</Label>
                            <Input value={username} type="text" name="username" id="username" placeholder="Username" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Enter Email</Label>
                            <Input value={email} type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Enter Password</Label>
                            <Input value={password} type="password" name="password" id="password" placeholder="Password" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmNewPassword">Confirm Password</Label>
                            <Input value={confirmPassword} type="password" name="confirmPassword" id="confirmPassword"
                                placeholder="Confirm Password" onChange={this.handleChange}/>
                        </FormGroup>
                        <Button color="primary" size="lg" type="submit" block>Create Account</Button>
                    </Form>
                    <br/>
                    <br/>
                </div>
            </header>
        );
    }
}
