/* eslint-disable react/prefer-stateless-function, react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Login from './auth/LogIn';
import '../assets/style/main.scss';

export default class HomeLogin extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfullAuth = this.handleSuccessfullAuth.bind(this);
  }

  handleSuccessfullAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/skates');
  }

  render() {
    return (
      <div className="home-login">
        <Login handleSuccessfullAuth={this.handleSuccessfullAuth} />
      </div>
    );
  }
}

/* eslint-enable react/prefer-stateless-function, react/jsx-props-no-spreading */
