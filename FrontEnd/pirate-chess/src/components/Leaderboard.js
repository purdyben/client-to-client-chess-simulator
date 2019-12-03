import React from 'react';
import axios from 'axios';
import {Table, Button, ButtonGroup} from 'reactstrap';
import CHeader from './CustomHeader';

export default class Leaderboard extends React.Component {
  state = {
    persons: [],
    name: ""
  }
  componentDidMount() {
      axios.get('http://coms-309-bs-4.misc.iastate.edu:8080/users')
          .then(response => {
              console.log(response.data);
              this.setState({persons: response.data});
          });
  }

  createTable() {
    let table = [];
    console.log(this.state.persons.length)
    for(let i = 0; i < this.state.persons.size; i++) {
      return(<tr>
        <th scope="row">[i]</th>
        <td>{this.state.persons}[i]</td>
        <td>[Point Value]</td>
        <td>[Rank]</td>
        </tr>)
    }
  }
  
  render() {
    var i = 1;
    return (
      <header className="App-header">
        <CHeader/>
        <br/>
        <h1>
          Leaderboard
        </h1>
        <div className="Leaderboard-Buttons">
          <ButtonGroup size="lg">
            <Button color="primary" href="/leaderboard">All Time</Button>
            <Button color="primary" href="/leaderboard">Monthly</Button>
            <Button color="primary" href="/leaderboard">Weekly</Button>
          </ButtonGroup>
        </div>
        <Table dark className="Leaderboard">
          <thead>
            <tr>
              <th>#</th>
              <th>Display Name</th>
              <th>Games Played</th>
              <th>Rank Score</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map((person)=>
            <tr>
              <th scope="row">{i++}</th>
              <td>{person.displayName}</td>
              <td>{person.numGames}</td>
              <td>{person.rankScore}</td>
            </tr>
          )}
          </tbody>
        </Table>
        <br/>
        <br/>
      </header>
    )
  }
}