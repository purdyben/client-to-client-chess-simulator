import React from 'react';
import './App.css';
import {Button, NavLink} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.png" className="App-logo" alt="logo" />
        <div className="Login-button">
          <Button color="primary" size="lg" block>Login</Button>
          <Button color="secondary" size="lg" block>Guest Login</Button>
        </div>
        <NavLink href="" classname="Create-account-link">Create Account</NavLink>
      </header>
    </div>
  );
}

export default App;
