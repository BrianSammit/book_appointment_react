/* eslint-disable react/prefer-stateless-function, react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './Dashboard';
import HomeRegistration from './HomeRegistration';
import HomeLogin from './HomeLogin';
import Lifestyle from './Lifestyle';
import Navbar from './Navbar/Navbar';
import Shop from './Shop';
import Skate from './Skate';
import Test from './Test';
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
          this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: response.data.user,
          });
        } else if (!response.data.logged_in & (this.state.loggedInStatus === 'LOGGED_IN')) {
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
          });
        }
      })
      .catch((error) => {
        console.log('check login error', error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user,
    });
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Switch>
              <Route
                exact
                path="/skates"
                render={(props) => (
                  <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
                )}
              />
              <Route exact path="/lifestyle">
                <Lifestyle />
              </Route>
              <Route exact path="/Shop">
                <Shop />
              </Route>
              <Route exact path="/test">
                <Test />
              </Route>
              <Route
                exact
                path="/"
                render={(props) => (
                  <HomeLogin
                    {...props}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />
              <Route
                exact
                path="/registration"
                render={(props) => (
                  <HomeRegistration
                    {...props}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />
              <Route exact path="/:skateboard_id" render={(props) => <Skate {...props} />} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

/* eslint-enable react/prefer-stateless-function, react/jsx-props-no-spreading */
