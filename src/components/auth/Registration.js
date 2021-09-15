/* eslint-disable react/no-unused-state, class-methods-use-this, no-console */
import React, { Component } from 'react';
import axios from 'axios';

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
    const { username, email, password, passwordConfirmation } = this.state;
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
        console.log('response res', response);
      })
      .catch((errors) => {
        console.log('resgistration error', errors);
      });
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="User"
            value={username}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Password Confirmation"
            value={passwordConfirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

/* eslint-enable react/no-unused-state, class-methods-use-this, no-console */
