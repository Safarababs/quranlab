import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a
          href="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <i className="fa fa-book me-3"></i> Quran Lab Online
          </h2>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            {/* Main Navigation Links (5 Items) */}
            <a href="/" className="nav-item nav-link active">
              Home
            </a>

            {/* Dropdown for General Information */}
            <div className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Information
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="/about" className="dropdown-item">
                  About
                </a>
                <a href="/contact" className="dropdown-item">
                  Contact
                </a>
              </div>
            </div>

            {/* Dropdown for Quran & Islamic Studies */}
            <div className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Quran & Studies
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="/quran-teaching" className="dropdown-item">
                  Quran Teaching
                </a>
                <a href="/religious-services" className="dropdown-item">
                  Religious Services
                </a>
                <a href="/quran-studio" className="dropdown-item">
                  Quran Studio
                </a>
                <a href="/islamic-library" className="dropdown-item">
                  Islamic Library
                </a>
              </div>
            </div>

            {/* Dropdown for Additional Services */}
            <div className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="/educational-fund" className="dropdown-item">
                  Educational Fund
                </a>
                <a href="/islamic-jewelry" className="dropdown-item">
                  Islamic Jewelry & Rings
                </a>
                <a href="/podcast" className="dropdown-item">
                  Podcast
                </a>
                <a href="/qa" className="dropdown-item">
                  Q&A
                </a>
              </div>
            </div>

            {/* Dropdown for Team & Miscellaneous */}
            <div className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Team & More
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="/our-team" className="dropdown-item">
                  Our Team
                </a>
                <a href="/testimonials" className="dropdown-item">
                  Testimonials
                </a>
                <a href="/404" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
          </div>

          {/* Join Now Button */}
          <a
            href="/join"
            className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >
            Join Now<i className="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
