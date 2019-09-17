import React from 'react';
import './App.css';
import {Button, NavLink} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <header className="App-header">
    <img src="logo.png" className="App-logo" alt="logo" />
      <div className="Login-button">
        <Button color="primary" size="lg" href="/login" block>Login</Button>
        <Button color="secondary" size="lg" href="/guestLogin"block>Guest Login</Button>
      </div>
      <NavLink href="/createAccount" classname="Create-account-link">Create Account</NavLink>
  </header>
)

const Login = () => (
  <header className="App-header">
    Login
  </header>
)

const GuestLogin = () => (
  <header className="App-header">
    GuestLogin
  </header>
)

const CreateAccount = () => (
  <header className="App-header">
    CreateAccount
  </header>
)

const Game = () => (
  <header className="App-header">
    Game
  </header>
)

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/guestLogin" component={GuestLogin} />
          <Route exact path="/createAccount" component={CreateAccount} />
          <Route exact path="/game" component={Game} />
      </div>
    </Router>
  );
}

export default App;
