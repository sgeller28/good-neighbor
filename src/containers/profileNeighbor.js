/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class ProfileNeighbor extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div>You have helped 4 neighbors! Thank you! :) </div>
        <div>Requests I Have Accepted</div>
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

export default ProfileNeighbor;
