/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class HomeNeighbor extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default HomeNeighbor;
