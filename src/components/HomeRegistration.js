import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Registration from './auth/Registration';

export default class HomeRegistration extends Component {
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
      <div className="home-registration">
        <Registration handleSuccessfullAuth={this.handleSuccessfullAuth} />
      </div>
    );
  }
}

HomeRegistration.propTypes = {
  handleLogin: PropTypes.any.isRequired /* eslint-disable-line */,
  history: PropTypes.any.isRequired /* eslint-disable-line */,
};
