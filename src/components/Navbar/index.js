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
              <Link to="/test">TEST</Link>
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
          <ul className="nav-icons">
            <li className="nav-icons-li">
              <a className="nav-icons-link" href="https://twitter.com/CruzSammit" target="_blank">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="nav-icons-li">
              <a
                className="nav-icons-link"
                href="https://www.facebook.com/groups/easkate4"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="nav-icons-li">
              <a
                className="nav-icons-link"
                href="https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign"
                target="_blank"
              >
                <i className="fab fa-behance-square" />
              </a>
            </li>
            <li className="nav-icons-li">
              <a className="nav-icons-link" href="https://github.com/BrianSammit" target="_blank">
                <i className="fab fa-github" />
              </a>
            </li>
            <li className="nav-icons-li">
              <a
                className="nav-icons-link"
                href="https://www.pinterest.es/uolker/skate/"
                target="_blank"
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
