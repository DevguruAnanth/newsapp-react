import React from "react";

const Footer = () => {
  return (
    <div className="mt-4 pt-4">
      <footer className="d-flex flex-wrap justify-content-between align-items-center mb-0 border-top bg-dark">
        <p className="col-md-4 mb-0 text-white">&copy; 2022 Newzer</p>
        <ul className="nav col-md-4 justify-content-end text-white my-4">
          <li className="nav-item">
            <p className="nav-link text-white px-2">
              Home
            </p>
          </li>
          <li className="nav-item">
            <p className="nav-link text-white px-2">
              About
            </p>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;
