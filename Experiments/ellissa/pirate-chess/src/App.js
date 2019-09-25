import React from 'react';
import './App.css';
import {Button, NavLink, Form, Label, FormGroup, Input} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <header className="App-header">
    <img src="logo.png" className="App-logo" alt="logo" />
      <div className="Login-buttons">
        <Button color="primary" size="lg" href="/login" block>Login</Button>
        <Button color="secondary" size="lg" href="/mainScreen"block>Guest Login</Button>
      </div>
      <NavLink href="/createAccount" classname="Create-account-link">Create Account</NavLink>
  </header>
)

const Login = () => (
  <header className="App-header">
    <img src="logo.png" className="App-logo" alt="logo" />
    <div className="Login-buttons">
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="username" name="username" id="username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Password" />
        </FormGroup>
      </Form>
      <Button color="primary" size="lg" href="/mainScreen" block>Login</Button>
    </div>
  </header>
)

const CreateAccount = () => (
  <header className="App-header">
    <img src="logo.png" className="App-logo" alt="logo" />
    <div className="Login-buttons">
      <Form>
        <FormGroup>
          <Label for="newUsername">Enter Username</Label>
          <Input type="newUsername" name="newUsername" id="newUsername" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label for="newPassword">Password</Label>
          <Input type="newPassword" name="newPassword" id="newPassword" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Label for="confirmNewPassword">Confirm Password</Label>
          <Input type="confirmNewPassword" name="confirmNewPassword" id="confirmNewPassword" placeholder="Confirm Password" />
        </FormGroup>
      </Form>
      <Button color="primary" size="lg" href="/mainScreen" block>Create Account</Button>
    </div>
  </header>
)

const MainScreen = () => (
  <header className="App-header">
    <img src="logo.png" className="App-logo-small" alt="logo" />
    <div className="Login-buttons">
    <Button color="primary" size="lg" href="/" block>Home</Button>
    <Button color="primary" size="lg" href="/game" block>Game</Button>
    <Button color="primary" size="lg" href="/tournament" block>Tournament</Button>
    <Button color="primary" size="lg" href="/profile" block>Profile</Button>
    <Button color="primary" size="lg" href="/leaderboard" block>Leaderboard</Button>
    <Button color="primary" size="lg" href="/settings" block>Settings</Button>
    <Button color="primary" size="lg" href="/howToPlay" block>How To Play</Button>
    </div>
  </header>
)

const Game = () => (
  <div>
    <img src="logo.png" className="App-logo-small" alt="logo" />
    <div className="Game-board">
      <div className="Black-square"></div>
    </div>
  </div>
)

const Leaderboard = () => (
  <header className="App-header">
    Leaderboard
  </header>
)

const Tournament = () => (
  <header className="App-header">
    Tournament
  </header>
)

const Profile = () => (
  <header className="App-header">
    Profile
  </header>
)

const Settings = () => (
  <header className="App-header">
    Settings
  </header>
)

const HowToPlay = () => (
  <header className="App-header">
    How To Play
  </header>
)

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createAccount" component={CreateAccount} />
          <Route exact path="/mainScreen" component={MainScreen} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/tournament" component={Tournament} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/howToPlay" component={HowToPlay} />
      </div>
    </Router>
  );
}

export default App;
