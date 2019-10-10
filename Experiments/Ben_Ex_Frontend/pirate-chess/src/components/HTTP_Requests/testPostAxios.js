import React from 'react';
import axios from 'axios';
import Input from "reactstrap/es/Input";

export default class testPostAxios extends React.Component {
    state = {
       name:''
    };
    handleChange = event => {
      this.setState({name: event.target.value});

    };


    handleSubmit = event => {
        event.preventDefault();
        const user ={
            name: this.state.name,
        };
        axios.post('https:jsonplaceholder.typicode.com/users', {user})
            .then(res =>{
                console.log(res);
                console.log(res.data);
            })
    };
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    person Name:
                    <input type="text" name="name" onChange ={this.handleChange} />
            </label>
                <div><header>"this is a test"</header></div>
                <button type="submit"> add </button>
            </form>

        );
    }
}