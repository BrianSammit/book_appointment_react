import React from 'react';
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavBar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src="https://res.cloudinary.com/ddjesec95/image/upload/v1632449015/Skate%20brands/logo_pqi497.png"
            className="logo"
          ></img>
        </NavLink>
        <NavMenu>
          <NavLink to="/skates">SKATE</NavLink>
          <NavLink to="/lifestyle">LIFESTYLE</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/test">TEST</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
