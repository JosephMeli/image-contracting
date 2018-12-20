import React, { Component } from 'react';
import logo from '../logo.png';
class TitleBar extends Component {
  render() {
    return (
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <a href="#" className="header item">
            <img className="logo" src={logo} />
            Project Name
          </a>
          <a href="#" className="item">
            Home
          </a>
          <div className="ui simple dropdown item">
            Dropdown <i className="dropdown icon" />
            <div className="menu">
              <a className="item" href="#">
                Link Item
              </a>
              <a className="item" href="#">
                Link Item
              </a>
              <div className="divider" />
              <div className="header">Header Item</div>
              <div className="item">
                <i className="dropdown icon" />
                Sub Menu
                <div className="menu">
                  <a className="item" href="#">
                    Link Item
                  </a>
                  <a className="item" href="#">
                    Link Item
                  </a>
                </div>
              </div>
              <a className="item" href="#">
                Link Item
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TitleBar;
