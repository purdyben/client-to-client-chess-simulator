import React from 'react';
import axios from 'axios';

componentDidMount() {

    let URL_testString = 'http://coms-309-bs-4.misc.iastate.edu:';
    axios.post(URL_testString, {
        Selected: 'Fred',
        comparableTile: 'comparableTile'
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}