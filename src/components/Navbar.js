import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top  bg-dark">
        <div className="container-fluid">
          <Link className="navbarlink navbar-brand" to="#">
            Newzer
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  style={{ textDecoration: "none" }}
                  className="navbarlink nav-a mx-4 text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ textDecoration: "none" }}
                  className="navbarlink nav-a mx-4 text-white"
                  to="#"
                >
                  About
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <Link
                  style={{ textDecoration: "none" }}
                  className="nav-a dropdown-toggle mx-4 text-white"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      className="navbarlink dropdown-item"
                      to="/business"
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      className="navbarlink dropdown-item"
                      to="/entertainment"
                    >
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      className="navbarlink dropdown-item"
                      to="/general"
                    >
                      General
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      className="navbarlink dropdown-item"
                      to="/health"
                    >
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      className="navbarlink dropdown-item"
                      to="/science"
                    >
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={{ textDecoration: "none" }}
                      className="navbarlink dropdown-item"
                      to="/technology"
                    >
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
