import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <h3>Shop Name</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <a href="#">Category 1</a>
          </li>
          <li className="list-group-item">
            <a href="#">Category 2</a>
          </li>
          <li className="list-group-item">
            <a href="#">Category 3</a>
          </li>
        </ul>
      </div>
    );
  }
}
