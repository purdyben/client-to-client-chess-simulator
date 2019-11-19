import React from 'react';
import axios from 'axios';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button} from 'reactstrap';
import {Container, Row, Col} from 'react-bootstrap';
import CHeader from './CustomHeader';

export default class Settings extends React.Component {
  
  //get and post methods here
  state = {
    persons: [],
    name: ""
  }
  componentDidMount() {
    //coms-309-bs-4.misc.iastate.edu:8080/test/hello
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res.data[0]);
        this.setState({persons : res.data});
        console.log(this.state.persons[0].name);
        this.setState({name : res.data[0].name});
      })
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
      return (
        <header className="App-header">
          <CHeader/>
          <Container>
            <Row>
              <Col>
                <img src="logo.png" className="App-logo" alt="logo" />
                <br></br>
                <Button color="primary" size="sm" href="/mainScreen">Main Screen</Button>
                <h1>
                  Settings
                </h1>
              </Col>
              <Col>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size="lg">
                <DropdownToggle caret color="primary" block>
                  Theme
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Pirate</DropdownItem>
                  <DropdownItem>Classic</DropdownItem>
                  <DropdownItem>Blue</DropdownItem>
                  <DropdownItem>Pink</DropdownItem>
                  <DropdownItem>Green</DropdownItem>
                </DropdownMenu>
              </Dropdown>
                <br></br>
                <img src="chess-board.jpg" className="App-logo" alt="logo" /> {/*Preview image*/}
              </Col>
            </Row>
          </Container>
        </header>
      )
    
  }
}

