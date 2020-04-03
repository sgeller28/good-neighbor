/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  signinUser,
} from '../actions/index';

class SignIn extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onSubmitClick() {
    const post = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
    };
    this.props.signinUser(post, this.props.history);
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
          <input type="email" id="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChange} />
          <input type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
          <input type="button" id="login-button" value="Log In" onClick={this.onSubmitClick} />
        </form>
      </div>
    );
  }
}

export default connect(null, { signinUser })(SignIn);
