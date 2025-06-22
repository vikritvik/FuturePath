 import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const MyNavbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand fw-bold fs-3 px-5 mx-4">
          <img src="/Images/logo.png" alt="Logo" width={50} height={50} />
          FuturePath
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <NavLink to="/Home" className="nav-link fs-5">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Courses" className="nav-link fs-5">Courses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className="nav-link fs-5">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Docs" className="nav-link fs-5">Docs</NavLink>
            </li>
          </ul>

          {token ? (
            <button className="btn btn-outline-danger ms-3" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <div className="btn-group d-flex gap-2">
              <NavLink to="/SignIn" className="btn btn-outline-primary fs-5">
                Sign In
              </NavLink>
              <NavLink to="/SignUp" className="btn btn-primary fs-5">
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
