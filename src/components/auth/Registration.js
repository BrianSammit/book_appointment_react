/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      registrationErrors: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const {
      username, email, password, passwordConfirmation,
    } = this.state;
    const { handleSuccessfullAuth } = this.props;
    axios
      .post(
        'http://localhost:3001/registrations',

        {
          user: {
            username,
            email,
            password,
            passwordConfirmation,
          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.status === 'created') {
          handleSuccessfullAuth(response.data);
        }
      })
      .catch((errors) => {
        this.setState({
          loginErrors: errors,
        });
      });
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      username, email, password, passwordConfirmation,
    } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="control block-cube block-input">
            <input
              type="text"
              name="username"
              placeholder="User"
              value={username}
              onChange={this.handleChange}
              required
            />
            <div className="bg-top">
              <div className="bg-inner" />
            </div>
            <div className="bg-right">
              <div className="bg-inner" />
            </div>
            <div className="bg">
              <div className="bg-inner" />
            </div>
          </div>
          <div className="control block-cube block-input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              required
            />
            <div className="bg-top">
              <div className="bg-inner" />
            </div>
            <div className="bg-right">
              <div className="bg-inner" />
            </div>
            <div className="bg">
              <div className="bg-inner" />
            </div>
          </div>
          <div className="control block-cube block-input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
              required
            />
            <div className="bg-top">
              <div className="bg-inner" />
            </div>
            <div className="bg-right">
              <div className="bg-inner" />
            </div>
            <div className="bg">
              <div className="bg-inner" />
            </div>
          </div>

          <div className="control block-cube block-input">
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="Password Confirmation"
              value={passwordConfirmation}
              onChange={this.handleChange}
              required
            />
            <div className="bg-top">
              <div className="bg-inner" />
            </div>
            <div className="bg-right">
              <div className="bg-inner" />
            </div>
            <div className="bg">
              <div className="bg-inner" />
            </div>
          </div>

          <button className="btn block-cube block-cube-hover" type="submit">
            <div className="bg-top">
              <div className="bg-inner" />
            </div>
            <div className="bg-right">
              <div className="bg-inner" />
            </div>
            <div className="bg">
              <div className="bg-inner" />
            </div>
            <div className="text">Register</div>
          </button>
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  handleSuccessfullAuth: PropTypes.any.isRequired /* eslint-disable-line */,
};

/* eslint-enable react/no-unused-state */
