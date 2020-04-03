/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { signoutUser } from '../actions/index';

class Home extends Component {
  constructor(props) {
    super();
    this.onSignOut = this.onSignOut.bind(this);
  }

  onSignOut() {
    this.props.signoutUser(this.props.history);
  }

  render() {
    if (true) {
      return (
        <div>
          <div>RECIPIENT</div>
          <div>Requests I Have Accepted</div>
          <div id="request-block">
            <text>Hannafords Supermarket</text>
            <div>
              <text>2.1 mi</text>
              <text>3/19 5:00PM</text>
            </div>
            <input type="button" id="complete-button" value="Complete" />
          </div>
          <div>Requests for Good Neighbors</div>
          <div id="request-block">
            <text>CVS Pharmacy</text>
            <div>
              <text>2.7 mi</text>
              <text>3/20 10:30AM</text>
            </div>
            <input type="button" id="complete-button" value="Accept" />
          </div>
          <input type="button" id="complete-button" value="Sign Out" onClick={this.onSignOut} />
        </div>
      );
    } else {
      return (
        <div>
          <div color="white">GOOD NEIGHBOR</div>
          <div>Requests I Have Accepted</div>
          <div id="request-block">
            <text>Hannafords Supermarket</text>
            <div>
              <text>2.1 mi</text>
              <text>3/19 5:00PM</text>
            </div>
            <input type="button" id="complete-button" value="Complete" />
          </div>
          <div>Requests for Good Neighbors</div>
          <div id="request-block">
            <text>CVS Pharmacy</text>
            <div>
              <text>2.7 mi</text>
              <text>3/20 10:30AM</text>
            </div>
            <input type="button" id="complete-button" value="Accept" />
          </div>
          <input type="button" id="complete-button" value="Sign Out" />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { signoutUser })(Home));
