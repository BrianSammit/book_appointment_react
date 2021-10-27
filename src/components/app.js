/* eslint-disable react/no-unused-state */
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

  checkLoginStatus() {
    const { loggedInStatus } = this.state;
    axios
      .get('http://localhost:3001/logged_in', { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus === 'NOT_LOGGED_IN') {
          this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: response.data.user,
          });
        } else if (!response.data.logged_in && loggedInStatus === 'LOGGED_IN') {
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
          });
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  render() {
    const { loggedInStatus } = this.state;
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
                  <Dashboard
                    {...props} /* eslint-disable-line */
                    loggedInStatus={loggedInStatus}
                  />
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
                    {...props} /* eslint-disable-line */
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={loggedInStatus}
                  />
                )}
              />
              <Route
                exact
                path="/registration"
                render={(props) => (
                  <HomeRegistration
                    {...props} /* eslint-disable-line */
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={loggedInStatus}
                  />
                )}
              />
              {/* eslint-disable-next-line */}
              <Route exact path="/:skateboard_id" render={(props) => <Skate {...props} />} />{' '}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

/* eslint-enable react/no-unused-state */
