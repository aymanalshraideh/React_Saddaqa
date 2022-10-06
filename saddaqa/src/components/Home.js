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
                        <span className="logo">Saddaqa</span> Website
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
      
      {/* Facts Start */}
      <div className="container-fluid my-5 p-0">
        <div className="row g-0">
          <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="position-relative">
              <img className="img-fluid w-100" src="img/43678707_745057465836754_7133291206586400768_n.jpg" alt />
              <div className="facts-overlay">
                {/* <h1 className="display-1">01</h1>
                <h4 className="text-white mb-3">Construction</h4>
                <p className="text-white">
                  Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                  clita duo justo erat amet
                </p>
                <a className="text-white small" href>
                  READ MORE
                  <i className="fa fa-arrow-right ms-3" />
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="position-relative">
              <img className="img-fluid w-100" src="img/43663930_745057519170082_8198218348945735680_n.jpg" alt />
              <div className="facts-overlay">
                {/* <h1 className="display-1">02</h1>
                <h4 className="text-white mb-3">Mechanical</h4>
                <p className="text-white">
                  Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                  clita duo justo erat amet
                </p>
                <a className="text-white small" href>
                  READ MORE
                  <i className="fa fa-arrow-right ms-3" />
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="position-relative">
              <img className="img-fluid w-100" src="img/43728823_745057382503429_719539577655656448_n.jpg" alt />
              <div className="facts-overlay">
                {/* <h1 className="display-1">03</h1>
                <h4 className="text-white mb-3">Architecture</h4>
                <p className="text-white">
                  Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                  clita duo justo erat amet
                </p>
                <a className="text-white small" href>
                  READ MORE
                  <i className="fa fa-arrow-right ms-3" />
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.7s">
            <div className="position-relative">
              <img className="img-fluid w-100" src="img/43770582_745057432503424_6620338941688020992_n.jpg" alt />
              <div className="facts-overlay">
                {/* <h1 className="display-1">04</h1>
                <h4 className="text-white mb-3">Interior Design</h4>
                <p className="text-white">
                  Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                  clita duo justo erat amet
                </p>
                <a className="text-white small" href>
                  READ MORE
                  <i className="fa fa-arrow-right ms-3" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}
     
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
      
     
    </div>
  );
}

export default Home;
