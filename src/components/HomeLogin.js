import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from './auth/LogIn';

export default class HomeLogin extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfullAuth = this.handleSuccessfullAuth.bind(this);
  }

  handleSuccessfullAuth(data) {
    const { handleLogin, history } = this.props;
    handleLogin(data);
    history.push('/skates'); /* eslint-disable-line */
  }

  render() {
    return (
      <div className="home-login">
        <Login handleSuccessfullAuth={this.handleSuccessfullAuth} />
      </div>
    );
  }
}

HomeLogin.propTypes = {
  handleLogin: PropTypes.any.isRequired /* eslint-disable-line */,
  history: PropTypes.any.isRequired /* eslint-disable-line */,
};
