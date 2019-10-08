import React from 'react';
import axios from 'axios';

export default class personList extends React.Component {

    testMassage = "";

    state = {
        // persons:[]
        message: String
    };

    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {

        let URL_testString = 'http://coms-309-bs-4.misc.iastate.edu:8080/test/hello';
        axios.get(URL_testString, {
            method: 'GET',
            mode: 'yes-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
            .then(res => {
            this.setState({message: res.data});
            console.log(res);
            this.testMassage = this.state.message + "hellowergwy";
        });
    }


    render() {
        return<div>
                <h1>My First Web Page</h1>
                {document.write(this.testMassage + "<br>")}
                {document.write(this.state.message.toLocaleString(this.state.message)+ "<br>")}
                {document.write(5)}
        </div>
    }
}
