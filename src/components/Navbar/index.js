import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

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
          <Link className="nav-link" to="/">
            <img
              src="https://res.cloudinary.com/ddjesec95/image/upload/v1632449015/Skate%20brands/logo_pqi497.png"
              className="logo"
            />
          </Link>
          <ul>
            <li>
              <Link to="/skates"> SKATES</Link>
            </li>
            <li>
              <Link to="/lifestyle"> LIFESTYLE</Link>
            </li>
            <li>
              <Link to="/shop"> SHOP</Link>
            </li>
            <li>
              <Link to="/test"> TEST</Link>
            </li>
          </ul>
          <div className="nav-btn">
            <div className="nav-btn-link" to="/signin">
              Sign In
            </div>
          </div>
        </div>
      </div>
    );
  }
}
