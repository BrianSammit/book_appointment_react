import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div className="navbar">
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <div className={this.state.clicked ? 'nav-menu-active' : 'nav-menu'}>
          <Link className="nav-link" to="/skates">
            <img
              src="https://res.cloudinary.com/ddjesec95/image/upload/v1632449015/Skate%20brands/logo_pqi497.png"
              className="logo"
            />
          </Link>
          <ul>
            <li>
              <Link
                className="link"
                to="/skates"
                style={{ textDecoration: 'none', color: '#303236' }}
              >
                SKATES
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="/lifestyle"
                style={{ textDecoration: 'none', color: '#303236' }}
              >
                LIFESTYLE
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="/shop"
                style={{ textDecoration: 'none', color: '#303236' }}
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="/test"
                style={{ textDecoration: 'none', color: '#303236' }}
              >
                TEST
              </Link>
            </li>
          </ul>
          <div className="nav-btn">
            <div className="nav-btn-link" to="/login">
              LOGIN
            </div>
            <div className="nav-btn-link" to="/register">
              REGISTER
            </div>
          </div>
        </div>
      </div>
    );
  }
}
