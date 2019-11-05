import React from 'react';
import {Button} from 'reactstrap';

const MainScreen = () => (
    <header className="App-header">
        <img src="logo.png" className="App-logo-small" alt="logo"/>
        <div className="Login-buttons">
            {/*<Button color="primary" size="lg" href="/personList" block>HTTPList</Button>*/}
            <Button color="primary" size="lg" href="/" block>Home</Button>
            <Button color="primary" size="lg" href="/GameBoard" block>GameBoard</Button>
            <Button color="primary" size="lg" href="/tournament" block>Tournament</Button>
            <Button color="primary" size="lg" href="/profile" block>Profile</Button>
            <Button color="primary" size="lg" href="/leaderboard" block>Leaderboard</Button>
            <Button color="primary" size="lg" href="/settings" block>Settings</Button>
            <Button color="primary" size="lg" href="/howToPlay" block>How To Play</Button>
            <Button color="primary" size="lg" href="/chat" block>Chat</Button>
        </div>
    </header>
);

export default MainScreen;