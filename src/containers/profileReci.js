/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class ProfileReci extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div> Pending Requests </div>
        <div id="request-block">
          <text>Hannafords Supermarket</text>
          <div>
            <text>2.1 mi</text>
            <text>3/19 5:00PM</text>
          </div>
          <input type="button" id="complete-button" value="Complete" />
        </div>
      </div>
    );
  }
}

export default ProfileReci;
