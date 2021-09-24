/* eslint-disable react/prefer-stateless-function, react/jsx-props-no-spreading */
import React, { Component } from 'react';
import axios from 'axios';
import Login from './auth/LogIn';
import Registration from './auth/Registration';
import '../assets/style/main.scss';

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
      <div className="home">
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <div>
          <Registration handleSuccessfullAuth={this.handleSuccessfullAuth} />
          <Login handleSuccessfullAuth={this.handleSuccessfullAuth} />
        </div>
      </div>
    );
  }
}

/* eslint-enable react/prefer-stateless-function, react/jsx-props-no-spreading */
