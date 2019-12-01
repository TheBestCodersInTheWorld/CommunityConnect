import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import logo from './assets/logo.png';
import Home from './home/Home';
import Results from './Results.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      route: 'home'
    };
  }
  navigate(route) {
    this.setState({ route });
  }
  render() {
    return (
      <div className="App">
        <Navbar bg="light" >
          <img style={{ height: '100%', width: '2em', marginRight: '0.5em' }} alt="logo" src={logo} />

          <Navbar.Brand href="#home">Community Connect</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav.Link onClick={() => this.navigate('home')}>Home</Nav.Link>
          <Nav.Link onClick={() => this.navigate('about')}>About</Nav.Link>
          
        </Navbar>
        {this.state.route === 'home'
          ? <Home />
          : <Results />}
      </div>
    );
  }
}

export default App;
