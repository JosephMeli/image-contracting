import React, { Component } from 'react';

class TitleBar extends Component {
  render() {
    return (
      <div className="ui stackable menu">
        <div className="item">
          <img src="logo.png" alt="alt" />
        </div>
        <div className="item">General Contracting</div>
        <div className="item" />
        <div className="item">Sign-in</div>
      </div>
    );
  }
}
export default TitleBar;
