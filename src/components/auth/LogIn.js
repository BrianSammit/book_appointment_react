/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      loginErrors: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const { username, email, password } = this.state;
    const { handleSuccessfullAuth } = this.props;
    axios
      .post(
        'https://skate-store-api.herokuapp.com/sessions',
        {
          user: {
            username,
            email,
            password,
          },
        },
        { withCredentials: true },
      )
      .then((response) => {
        if (response.data.logged_in) {
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
    const { username, email, password } = this.state;
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
            <div className="text">Log In</div>
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleSuccessfullAuth: PropTypes.any.isRequired /* eslint-disable-line */,
};

/* eslint-enable react/no-unused-state */
