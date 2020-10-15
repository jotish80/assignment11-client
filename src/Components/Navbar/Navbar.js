import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logos/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <img style={{ width: "150px", height: "47px" }} src={logo} alt="" />
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link mr-5" href="#">
                <b>Home</b> <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">
                <b>Our Portfolio</b>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">
                <b>Our Team</b>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">
                <b>Contuct Us</b>
              </a>
            </li>
            <button
              style={{ width: "134px", height: "45px" }}
              type="button"
              class="btn btn-dark"
            >
              <Link to="/login">
                {" "}
                <b style={{ color: "white" }}>Login</b>{" "}
              </Link>
            </button>
            &nbsp;&nbsp;
            <Link to="/adminserviceslists">
              <button
                style={{
                  width: "134px",
                  height: "45px",
                }}
                type="button"
                class="btn btn-dark"
              >
                <b>Admin</b>
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
