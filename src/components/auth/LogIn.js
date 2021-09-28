/* eslint-disable react/no-unused-state, class-methods-use-this, no-console,
 react/jsx-props-no-spreading */
import React, { Component } from 'react';
import axios from 'axios';

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
    axios
      .post(
        'http://localhost:3001/sessions',
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
          this.props.handleSuccessfullAuth(response.data);
        }
      })
      .catch((errors) => {
        console.log('Login error', errors);
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

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

/* eslint-enable react/no-unused-state, class-methods-use-this, no-console,
react/jsx-props-no-spreading */
