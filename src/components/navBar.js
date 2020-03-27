/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../styles/style.scss';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/posts/new">Create New Post</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </nav>
    );
  }
}

export default NavBar;
