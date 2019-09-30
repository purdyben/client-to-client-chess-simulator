import React from 'react';

const Leaderboard = () => (
  <div>
    <div className="Navigation-bar">
      <ButtonGroup vertical size="lg">
          <Button color="primary" href="/mainScreen">Main Screen</Button>
          <Button color="primary" href="/game">Play Now</Button>
          <Button color="primary" href="/leaderboard">Chat</Button>
          <Button color="primary" href="/howToPlay">How To Play</Button>
          <Button color="primary" href="/tournament">Tournament</Button>
        </ButtonGroup>
    </div>
    <header className="App-header">
      Leaderboard
    </header>
  </div>
)

export default Leaderboard;
  