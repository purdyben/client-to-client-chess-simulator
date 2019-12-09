import React from 'react';
import {Button} from 'reactstrap';
import CHeader from './CustomHeader';

const MainScreen = () => (
    <header className="App-header">
        <CHeader/>
        <img src="logo.png" className="App-logo-small" alt="logo"/>
        <div className="Login-buttons">

            <Button color="primary" size="lg" href="/" block> Home / Logins</Button>
            <Button color="primary" size="lg" href="/GamePage" block>GamePage</Button>
            <Button color="primary" size="lg" href="/GameBoard" block>Game</Button>
            {/*<Button color="primary" size="lg" href="/tournament" block>Tournament</Button>*/}
            <Button color="primary" size="lg" href="/profile" block>Profile</Button>
            <Button color="primary" size="lg" href="/leaderboard" block>Leaderboard</Button>
            <Button color="primary" size="lg" href="/settings" block>Settings</Button>
            {/*<Button color="primary" size="lg" href="/howToPlay" block>How To Play</Button>*/}
            <Button color="primary" size="lg" href="/chat" block>Chat</Button>
            <br/>
            <br/>
        </div>
    </header>
);

export default MainScreen;