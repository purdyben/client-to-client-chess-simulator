import React from 'react';
import {Button, NavLink} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import MainScreen from './components/MainScreen';
import Leaderboard from './components/Leaderboard';
import Tournament from './components/Tournament';
import Profile from './components/Profile';
import Settings from './components/Settings';
import HowToPlay from './components/HowToPlay';
import personList from './components/HTTP_Requests/personList';
// import testAxios from './components/HTTP_Requests/testAxios';
// import testPostAxios from './components/HTTP_Requests/testPostAxios';
import GameBoard from './components/Game/GameBoard';
import GamePage from './components/Game/GamePage'


const Home = () => (
    <header className="App-header">
        <img src="logo.png" className="App-logo" alt="logo"/>
        <div className="Login-buttons">
            <Button color="primary" size="lg" href="/login" block>Login</Button>
            <Button color="secondary" size="lg" href="/mainScreen" block>Guest Login</Button>
        </div>
        <NavLink href="/createAccount" classname="Create-account-link">Create Account</NavLink>
    </header>
);
function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/GamePage" component={GamePage}/>
                <Route exact path="/GameBoard" component={GameBoard}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/createAccount" component={CreateAccount}/>
                <Route exact path="/mainScreen" component={MainScreen}/>
                <Route exact path="/leaderboard" component={Leaderboard}/>
                <Route exact path="/tournament" component={Tournament}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/settings" component={Settings}/>
                <Route exact path="/howToPlay" component={HowToPlay}/>
                <Route exact path="/personList" component={personList}/>
            </div>
        </Router>
    );
}



export default App;