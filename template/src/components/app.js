import React from 'react';
import { Container, Nav, NavItem } from 'reactstrap';
import { Router } from 'preact-router';
import Header from './Header.js';
import Home from './Home.js';
import Profile from './Profile.js';
// import Home from 'async!./Home.js';
// import Profile from 'async!./Profile.js';

export default class App extends React.Component {

  handleRoute = (e) => {
    this.currentUrl = e.url;
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Container>
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Profile path="/profile/" user="me" />
            <Profile path="/profile/:user" />
          </Router>
        </Container>
      </div>
    );
  }
}
