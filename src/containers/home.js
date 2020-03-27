/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div id="logo">Good Neighbor</div>
        <div id="main">
          connecting communities and alleviating the burden of grocery shopping
          from those at high risk
        </div>
        <form action=" ">
          <input type="email" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />
          <input type="button" id="login-button" value="Log In" />
        </form>
      </div>
    );
  }
}

export default Home;
