import './App.scss';
import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { Component } from 'react';
import SignInPage from './views/SignInPage/SignInPage';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/login" component={SignInPage} />
      </div>
    );
  }
}

export default App;

