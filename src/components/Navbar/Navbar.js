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

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleClick() {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  }

  handleLogoutClick() {
    const { handleLogout } = this.props; /* eslint-disable-line */
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then(() => handleLogout())
      .catch((error) => {
        throw new Error(error);
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
    const { clicked } = this.state;
    const { loggedInStatus } = this.state; /* eslint-disable-line */
    return (
      <div className="navbar">
        <button type="button" className="menu-icon" onClick={this.handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
        <div className={clicked ? 'nav-menu-active' : 'nav-menu'}>
          <Link className="nav-link" to="/skates">
            <img
              alt="logo"
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
            {loggedInStatus === 'NOT_LOGGED_IN' ? (
              <div className="nav-btn">
                <button type="button" className="nav-btn-links">
                  <Link className="nav-btn-link" to="/" onClick={this.checkLoginStatus()}>
                    LOGIN
                  </Link>
                </button>
                <button type="button" className="nav-btn-links">
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
                <button type="button" className="nav-btn-links" onClick={this.checkLoginStatus()}>
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
