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
                <br/>
                <h1>
                  Settings
                </h1>
                <br/>
                <br/>
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
                <br/>
                <br/>
                <br/>
                <br/>
              </Col>
            </Row>
          </Container>
        </header>
      )
    
  }
}

