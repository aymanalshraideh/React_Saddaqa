function Home() {
  return (
    <div>
      {/* Topbar Start */}
      {/* <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center border-start border-end px-3">
              <small className="fa fa-phone-alt me-2" />
              <small>+012 345 6789</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center border-end px-3">
              <small className="far fa-envelope-open me-2" />
              <small>info@example.com</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center border-end px-3">
              <small className="far fa-clock me-2" />
              <small>Mon - Fri : 09 AM - 09 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center">
              <a className="btn btn-square border-end border-start" href>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square border-end" href>
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square border-end" href>
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-square border-end" href>
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* Topbar End */}

      {/* Carousel Start */}
      <div
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/sss.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div
                      className="col-12 col-lg-10"
                      style={{ textAlign: "center" }}
                    >
                      <h5 className="text-light text-uppercase mb-3 animated slideInDown"></h5>
                      <h1 className="display-2 text-light mb-3 animated slideInDown">
                        بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
                      </h1>
                      <h4 className="text-light text-uppercase mb-3 animated slideInDown">
                        السلام عليكم,اهلا وسهلا بكم في موقع{" "}
                        <span
                          style={{
                            color: "goldenrod",
                            fontWeight: "bold",
                            
                          }}
                        >
                          صدقة
                        </span>{" "}
                      </h4>
                      <h4 className="text-light  mb-3 animated slideInDown">
                        As-Salaam Alaykom ,Welcom to{" "}
                        <span className="logo">Saddaqa</span> website
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/ss.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                      <h5 className="text-light text-uppercase mb-3 animated slideInDown">
                        Welcome to Apex
                      </h5>
                      <h1 className="display-2 text-light mb-3 animated slideInDown">
                        Professional Tiling &amp; Painting Services
                      </h1>
                      <ol className="breadcrumb mb-4 pb-2">
                        <li className="breadcrumb-item fs-5 text-light">
                          Commercial
                        </li>
                        <li className="breadcrumb-item fs-5 text-light">
                          Residential
                        </li>
                        <li className="breadcrumb-item fs-5 text-light">
                          Industrial
                        </li>
                      </ol>
                      <a href className="btn btn-primary py-3 px-5">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/sss.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                      <h5 className="text-light text-uppercase mb-3 animated slideInDown">
                        Welcome to Apex
                      </h5>
                      <h1 className="display-2 text-light mb-3 animated slideInDown">
                        Professional Tiling &amp; Painting Services
                      </h1>
                      <ol className="breadcrumb mb-4 pb-2">
                        <li className="breadcrumb-item fs-5 text-light">
                          Commercial
                        </li>
                        <li className="breadcrumb-item fs-5 text-light">
                          Residential
                        </li>
                        <li className="breadcrumb-item fs-5 text-light">
                          Industrial
                        </li>
                      </ol>
                      <a href className="btn btn-primary py-3 px-5">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden ps-5 pt-5 h-100"
                style={{ minHeight: 400 }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="img/about.jpg"
                  alt
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                  style={{ width: 200, height: 200 }}
                >
                  <div className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3">
                    <h1 className="text-white">25</h1>
                    <h2 className="text-white">Years</h2>
                    <h5 className="text-white mb-0">Experience</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="border-start border-5 border-primary ps-4 mb-5">
                  <h6 className="text-body text-uppercase mb-2">About Us</h6>
                  <h1 className="display-6 mb-0">
                    Unique Solutions For Residentials &amp; Industries!
                  </h1>
                </div>
                <p>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <div className="border-top mt-4 pt-4">
                  <div className="row g-4">
                    <div
                      className="col-sm-4 d-flex wow fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3" />
                      <h6 className="mb-0">Ontime at services</h6>
                    </div>
                    <div
                      className="col-sm-4 d-flex wow fadeIn"
                      data-wow-delay="0.3s"
                    >
                      <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3" />
                      <h6 className="mb-0">24/7 hours services</h6>
                    </div>
                    <div
                      className="col-sm-4 d-flex wow fadeIn"
                      data-wow-delay="0.5s"
                    >
                      <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3" />
                      <h6 className="mb-0">Verified professionals</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Facts Start */}
      <div className="container-fluid my-5 p-0">
        <div className="row g-0">
          <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="position-relative">
              <img className="img-fluid w-100" src="img/fact-1.jpg" alt />
              <div className="facts-overlay">
                <h1 className="display-1">01</h1>
                <h4 className="text-white mb-3">Construction</h4>
                <p className="text-white">
                  Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                  clita duo justo erat amet
                </p>
                <a className="text-white small" href>
                  READ MORE
                  <i className="fa fa-arrow-right ms-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="position-relative">
              <img className="img-fluid w-100" src="img/fact-2.jpg" alt />
              <div className="facts-overlay">
                <h1 className="display-1">02</h1>
                <h4 className="text-white mb-3">Mechanical</h4>
                <p className="text-white">
                  Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                  clita duo justo erat amet
                </p>
                <a className="text-white small" href>
                  READ MORE
                  <i className="fa fa-arrow-right ms-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="position-relative">
              <img className="img-fluid w-100" src="img/fact-3.jpg" alt />
              <div className="facts-overlay">
                <h1 className="display-1">03</h1>
                <h4 className="text-white mb-3">Architecture</h4>
                <p className="text-white">
                  Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                  clita duo justo erat amet
                </p>
                <a className="text-white small" href>
                  READ MORE
                  <i className="fa fa-arrow-right ms-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.7s">
            <div className="position-relative">
              <img className="img-fluid w-100" src="img/fact-4.jpg" alt />
              <div className="facts-overlay">
                <h1 className="display-1">04</h1>
                <h4 className="text-white mb-3">Interior Design</h4>
                <p className="text-white">
                  Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                  clita duo justo erat amet
                </p>
                <a className="text-white small" href>
                  READ MORE
                  <i className="fa fa-arrow-right ms-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}
      {/* Features Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="border-start border-5 border-primary ps-4 mb-5">
                <h6 className="text-body text-uppercase mb-2">
                  Why Choose Us!
                </h6>
                <h1 className="display-6 mb-0">
                  Our Specialization And Company Features
                </h1>
              </div>
              <p className="mb-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row gy-5 gx-4">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3" />
                    <h6 className="mb-0">Large number of services provided</h6>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam
                  </span>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3" />
                    <h6 className="mb-0">
                      25+ years of professional experience
                    </h6>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam
                  </span>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3" />
                    <h6 className="mb-0">
                      A large number of grateful customers
                    </h6>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam
                  </span>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3" />
                    <h6 className="mb-0">
                      Always reliable and affordable prices
                    </h6>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div
                className="position-relative overflow-hidden ps-5 pt-5 h-100"
                style={{ minHeight: 400 }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="img/feature.jpg"
                  alt
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                  style={{ width: 200, height: 200 }}
                >
                  <div className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3">
                    <h1 className="text-white">25</h1>
                    <h2 className="text-white">Years</h2>
                    <h5 className="text-white mb-0">Experience</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-end mb-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="border-start border-5 border-primary ps-4">
                <h6 className="text-body text-uppercase mb-2">Our Services</h6>
                <h1 className="display-6 mb-0">
                  Construction And Renovation Solutions
                </h1>
              </div>
            </div>
            <div
              className="col-lg-6 text-lg-end wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <a className="btn btn-primary py-3 px-5" href>
                More Services
              </a>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light overflow-hidden h-100">
                <img className="img-fluid" src="img/service-1.jpg" alt />
                <div className="service-text position-relative text-center h-100 p-4">
                  <h5 className="mb-3">Building Construction</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <a className="small" href>
                    READ MORE
                    <i className="fa fa-arrow-right ms-3" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-light overflow-hidden h-100">
                <img className="img-fluid" src="img/service-2.jpg" alt />
                <div className="service-text position-relative text-center h-100 p-4">
                  <h5 className="mb-3">Home Maintainance</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <a className="small" href>
                    READ MORE
                    <i className="fa fa-arrow-right ms-3" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light overflow-hidden h-100">
                <img className="img-fluid" src="img/service-3.jpg" alt />
                <div className="service-text position-relative text-center h-100 p-4">
                  <h5 className="mb-3">Renovation and Painting</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <a className="small" href>
                    READ MORE
                    <i className="fa fa-arrow-right ms-3" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light overflow-hidden h-100">
                <img className="img-fluid" src="img/service-4.jpg" alt />
                <div className="service-text position-relative text-center h-100 p-4">
                  <h5 className="mb-3">Wiring and installation</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <a className="small" href>
                    READ MORE
                    <i className="fa fa-arrow-right ms-3" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-light overflow-hidden h-100">
                <img className="img-fluid" src="img/service-5.jpg" alt />
                <div className="service-text position-relative text-center h-100 p-4">
                  <h5 className="mb-3">Tiling and Painting</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <a className="small" href>
                    READ MORE
                    <i className="fa fa-arrow-right ms-3" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light overflow-hidden h-100">
                <img className="img-fluid" src="img/service-6.jpg" alt />
                <div className="service-text position-relative text-center h-100 p-4">
                  <h5 className="mb-3">Interior Design</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <a className="small" href>
                    READ MORE
                    <i className="fa fa-arrow-right ms-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Appointment Start */}
      <div
        className="container-fluid appointment my-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-5 col-md-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="border-start border-5 border-primary ps-4 mb-5">
                <h6 className="text-white text-uppercase mb-2">Appointment</h6>
                <h1 className="display-6 text-white mb-0">
                  A Company Involved In Service And Maintenance
                </h1>
              </div>
              <p className="text-white mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            </div>
            <div className="col-lg-7 col-md-6 wow fadeIn" data-wow-delay="0.5s">
              <form>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-dark border-0"
                        id="gname"
                        placeholder="Gurdian Name"
                      />
                      <label htmlFor="gname">Your Name</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control bg-dark border-0"
                        id="gmail"
                        placeholder="Gurdian Email"
                      />
                      <label htmlFor="gmail">Your Email</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-dark border-0"
                        id="cname"
                        placeholder="Child Name"
                      />
                      <label htmlFor="cname">Your Mobile</label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control bg-dark border-0"
                        id="cage"
                        placeholder="Child Age"
                      />
                      <label htmlFor="cage">Service Type</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control bg-dark border-0"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 100 }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Get Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End */}
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-end mb-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="border-start border-5 border-primary ps-4">
                <h6 className="text-body text-uppercase mb-2">Our Team</h6>
                <h1 className="display-6 mb-0">Our Expert Worker</h1>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item position-relative">
                <img className="img-fluid" src="img/team-1.jpg" alt />
                <div className="team-text bg-white p-4">
                  <h5>Full Name</h5>
                  <span>Engineer</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item position-relative">
                <img className="img-fluid" src="img/team-2.jpg" alt />
                <div className="team-text bg-white p-4">
                  <h5>Full Name</h5>
                  <span>Engineer</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item position-relative">
                <img className="img-fluid" src="img/team-3.jpg" alt />
                <div className="team-text bg-white p-4">
                  <h5>Full Name</h5>
                  <span>Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* Testimonial Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="border-start border-5 border-primary ps-4 mb-5">
                <h6 className="text-body text-uppercase mb-2">Testimonial</h6>
                <h1 className="display-6 mb-0">What Our Happy Clients Say!</h1>
              </div>
              <p className="mb-4">
                Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                magna dolore erat amet
              </p>
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fa fa-users fa-2x text-primary flex-shrink-0" />
                    <h1 className="ms-3 mb-0">123+</h1>
                  </div>
                  <h5 className="mb-0">Happy Clients</h5>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0" />
                    <h1 className="ms-3 mb-0">123+</h1>
                  </div>
                  <h5 className="mb-0">Projects Done</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item">
                  <img
                    className="img-fluid mb-4"
                    src="img/testimonial-1.jpg"
                    alt
                  />
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <div
                    className="bg-primary mb-3"
                    style={{ width: 60, height: 5 }}
                  />
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="testimonial-item">
                  <img
                    className="img-fluid mb-4"
                    src="img/testimonial-2.jpg"
                    alt
                  />
                  <p className="fs-5">
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat.
                  </p>
                  <div
                    className="bg-primary mb-3"
                    style={{ width: 60, height: 5 }}
                  />
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
}

export default Home;
