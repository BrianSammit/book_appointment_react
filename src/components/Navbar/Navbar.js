import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      loggedInStatus: 'NOT_LOGGED_IN',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
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

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  handleLogoutClick() {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then(() => this.props.handleLogout())
      .catch((error) => {
        console.log('logout error', error);
      });
  }

  render() {
    return (
      <div className="navbar">
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <div className={this.state.clicked ? 'nav-menu-active' : 'nav-menu'}>
          <Link className="nav-link" to="/skates">
            <img
              src="https://res.cloudinary.com/ddjesec95/image/upload/v1632449015/Skate%20brands/logo_pqi497.png"
              className="logo"
            />
          </Link>
          <ul className="links">
            <li>
              <Link to="/skates">SKATES</Link>
            </li>
            <li>
              <Link to="/lifestyle">LIFESTYLE</Link>
            </li>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/test">TESTS</Link>
            </li>
          </ul>
          <div>
            {this.state.loggedInStatus == 'NOT_LOGGED_IN' ? (
              <div className="nav-btn">
                <button className="nav-btn-links">
                  <Link className="nav-btn-link" to="/" onClick={this.checkLoginStatus()}>
                    LOGIN
                  </Link>
                </button>
                <button className="nav-btn-links">
                  <Link
                    className="nav-btn-link"
                    to="/registration"
                    onClick={this.checkLoginStatus()}
                  >
                    REGISTER
                  </Link>
                </button>
              </div>
            ) : (
              <div className="nav-btn">
                <button className="nav-btn-links" onClick={this.checkLoginStatus()}>
                  <Link className="nav-btn-link" to="/" onClick={() => this.handleLogoutClick()}>
                    LOGOUT
                  </Link>
                </button>
              </div>
            )}
          </div>
          <ul className="nav-icons">
            <li className="nav-icons-li">
              <a
                className="nav-icons-link"
                href="https://twitter.com/CruzSammit"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="nav-icons-li">
              <a
                className="nav-icons-link"
                href="https://www.facebook.com/groups/easkate4"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="nav-icons-li">
              <a
                className="nav-icons-link"
                href="https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-behance-square" />
              </a>
            </li>
            <li className="nav-icons-li">
              <a
                className="nav-icons-link"
                href="https://github.com/BrianSammit"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li className="nav-icons-li">
              <a
                className="nav-icons-link"
                href="https://www.pinterest.es/uolker/skate/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-pinterest-p" />
              </a>
            </li>
          </ul>
          <div className="copy">
            <p>Copyright © 2021 Brian Sammit. All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}
