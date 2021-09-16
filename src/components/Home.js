/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Login from './auth/LogIn';
import Registration from './auth/Registration';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfullAuth = this.handleSuccessfullAuth.bind(this);
  }

  handleSuccessfullAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Registration handleSuccessfullAuth={this.handleSuccessfullAuth} />
        <Login handleSuccessfullAuth={this.handleSuccessfullAuth} />
      </div>
    );
  }
}

/* eslint-enable react/prefer-stateless-function */
