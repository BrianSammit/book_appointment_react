/* eslint-disable react/prefer-stateless-function, react/jsx-props-no-spreading */
import React, { Component } from 'react';
import axios from 'axios';
import Login from './auth/LogIn';
import Registration from './auth/Registration';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfullAuth = this.handleSuccessfullAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfullAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/dashboard');
  }

  handleLogoutClick() {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then(() => this.props.handleLogout())
      .catch((error) => {
        console.log('logout error', error);
      });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>
          Status:
          {this.props.loggedInStatus}
        </h1>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <Registration handleSuccessfullAuth={this.handleSuccessfullAuth} />
        <Login handleSuccessfullAuth={this.handleSuccessfullAuth} />
      </div>
    );
  }
}

/* eslint-enable react/prefer-stateless-function, react/jsx-props-no-spreading */
