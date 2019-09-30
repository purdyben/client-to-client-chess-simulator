import React from 'react';
import {Table, Button, ButtonGroup} from 'reactstrap';

const Leaderboard = () => (
    <header className="App-header">
    <img src="logo.png" className="App-logo-small" alt="logo" />
      Leaderboard
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
            <th>Points</th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>[Name]</td>
            <td>[Point Value]</td>
            <td>[Rank]</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>[Name]</td>
            <td>[Point Value]</td>
            <td>[Rank]</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>[Name]</td>
            <td>[Point Value]</td>
            <td>[Rank]</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>[Name]</td>
            <td>[Point Value]</td>
            <td>[Rank]</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>[Name]</td>
            <td>[Point Value]</td>
            <td>[Rank]</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>[Name]</td>
            <td>[Point Value]</td>
            <td>[Rank]</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>[Name]</td>
            <td>[Point Value]</td>
            <td>[Rank]</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>[Name]</td>
            <td>[Point Value]</td>
            <td>[Rank]</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>[Name]</td>
            <td>[Point Value]</td>
            <td>[Rank]</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>[Name]</td>
            <td>[Point Value]</td>
            <td>[Rank]</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>[Name]</td>
            <td>[Point Value]</td>
            <td>[Rank]</td>
          </tr>
        </tbody>
      </Table>
    </header>
  )

export default Leaderboard;
  