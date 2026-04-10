import React from "react";
import { FaGlobe } from "react-icons/fa";
import logo from "../../assets/Logo.png";
import "../Styles/NavbarSection.css";

function NavbarSection() {
  return (

    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

    
        <a className="navbar-brand" href="#">
          <img src={logo} alt="NHRC Logo" className="navbar-logo" />
        </a>
      
      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                 About Us
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">Action</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Another action</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>


            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">Action</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Another action</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>


            <li className="nav-item">
              <a className="nav-link" href="#">
                Family Tree
              </a>
            </li>

             <li className="nav-item">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>

             <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>

                        <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaGlobe />
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">Action</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Another action</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>

            <li>
                <button className="btn btn-secondary">Membership</button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarSection;
