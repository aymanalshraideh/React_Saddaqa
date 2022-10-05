

function Nav(){
    return (
        <>
        {/* Navbar Start */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <a href="index.html" className="navbar-brand d-flex align-items-center">
        <h1 className="m-0 logo">
        Saddaqa
        </h1>
      </a>
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
          <a href="/" className="nav-item nav-link active">
            Home
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Live
            </a>
            <div className="dropdown-menu bg-light m-0">
              <a href="makkah" className="dropdown-item">
              Makkah Live HD
              </a>
              <a href="madinah" className="dropdown-item">
              Madinah Live HD
              </a>
            </div>
          </div>
          <a href="about" className="nav-item nav-link">
            About Us
          </a>
          <a href="service.html" className="nav-item nav-link">
            Our Services
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu bg-light m-0">
              <a href="feature.html" className="dropdown-item">
                Features
              </a>
              <a href="appointment.html" className="dropdown-item">
                Appointment
              </a>
              <a href="team.html" className="dropdown-item">
                Our Team
              </a>
              <a href="testimonial.html" className="dropdown-item">
                Testimonial
              </a>
              <a href="404.html" className="dropdown-item">
                404 Page
              </a>
            </div>
          </div>
          <a href="contact" className="nav-item nav-link">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
    {/* Navbar End */}
        
        </>
    )
}
export default Nav;