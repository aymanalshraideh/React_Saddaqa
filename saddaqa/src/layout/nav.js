import React from "react";
import { NavLink ,Link } from "react-router-dom";
function Nav(){
  
    return (
        <>
        {/* Navbar Start */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <NavLink to="index.html" className="navbar-brand d-flex align-items-center">
        <h1 className="m-0 logo">
        Saddaqa
        </h1>
      </NavLink>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-3 py-lg-0">
          
          <NavLink to="/" className="nav-item nav-link ">
            Home
          </NavLink>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Live
            </Link>
            <div className="dropdown-menu bg-light m-0">
              <NavLink to="makkah" className="dropdown-item">
              Makkah Live HD
              </NavLink>
              <NavLink to="madinah" className="dropdown-item">
              Madinah Live HD
              </NavLink>
            </div>
          </div>
          <NavLink to="about" className="nav-item nav-link">
            About Us
          </NavLink>
          <NavLink to="service.html" className="nav-item nav-link">
            Our Services
          </NavLink>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </Link>
            <div className="dropdown-menu bg-light m-0">
              <NavLink to="feature.html" className="dropdown-item">
                Features
              </NavLink>
              <NavLink to="appointment.html" className="dropdown-item">
                Appointment
              </NavLink>
              <NavLink to="team.html" className="dropdown-item">
                Our Team
              </NavLink>
              <NavLink to="testimonial.html" className="dropdown-item">
                Testimonial
              </NavLink>
              <NavLink to="404.html" className="dropdown-item">
                404 Page
              </NavLink>
            </div>
          </div>
          <NavLink to="contact" className="nav-item nav-link">
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
    {/* Navbar End */}
        
        </>
    )
}
export default Nav;