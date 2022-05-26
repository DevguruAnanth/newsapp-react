import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="mt-4 pt-4">
        <footer className="d-flex flex-wrap justify-content-between align-items-center mb-0 border-top bg-dark">
          <p className="col-md-4 mb-0 text-white">&copy; 2022 Newzer</p>
          <ul className="nav col-md-4 justify-content-end text-white my-4">
            <li className="nav-item">
              <a href="#" className="nav-link text-white px-2">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white px-2">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer;
