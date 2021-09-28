/* eslint-disable react/prefer-stateless-function, react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Login from './auth/LogIn';
import Registration from './auth/Registration';
import '../assets/style/main.scss';

export default class Home extends Component {
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
      <div className="home">
        <div>
          <Registration handleSuccessfullAuth={this.handleSuccessfullAuth} />
          <Login handleSuccessfullAuth={this.handleSuccessfullAuth} />
        </div>
      </div>
    );
  }
}

/* eslint-enable react/prefer-stateless-function, react/jsx-props-no-spreading */
