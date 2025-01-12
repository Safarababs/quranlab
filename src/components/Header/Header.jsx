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
            <i className="fa fa-book me-3"></i> Online Quran Lab
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

            {/* Dropdown for Quran & Islamic Studies */}
            <div className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Courses
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="/courses" className="dropdown-item">
                  All Courses
                </a>
                <a href="/quran-reading" className="dropdown-item">
                  Quran Reading (Nazra Quran)
                </a>
                <a href="/tajweed" className="dropdown-item">
                  Tajweed (Quranic Pronunciation)
                </a>
                <a href="/quran-translation" className="dropdown-item">
                  Quran Translation (Tafseer)
                </a>
                <a href="/memorization" className="dropdown-item">
                  Quran Memorization (Hifz Quran)
                </a>
                <a href="/islamic-studies" className="dropdown-item">
                  Islamic Studies (Deeniyaat)
                </a>
                <a href="/islamic-rules" className="dropdown-item">
                  Shariah Rules (Ahkaam Shariah)
                </a>
                <a href="/islamic-ethics" className="dropdown-item">
                  Islamic Ethics (Akhlaaq)
                </a>
              </div>
            </div>
            {/* relihous services */}
            <div className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Religious Services
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="/religious-1" className="dropdown-item">
                  Expert Teacher's for Religion and Academic
                </a>
                <a href="/recording" className="dropdown-item">
                  Recording Services
                </a>

                <a href="/religious-5" className="dropdown-item">
                  Online Nikkah
                </a>
                <a href="/marhomeen" className="dropdown-item">
                  Aamal For Marhoomeen
                </a>

                <a href="/religious-9" className="dropdown-item">
                  Question Answer Section
                </a>
              </div>
            </div>

            {/* Dropdown for Projects */}
            <div className="nav-item dropdown">
              <a
                href="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Projects
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="/educational-fund" className="dropdown-item">
                  Educational Fund
                </a>
                <a href="/islamic-jewelry" className="dropdown-item">
                  Islamic shop
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
                eLibrary
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="/read-quran" className="dropdown-item">
                  Read Quran Online
                </a>
                <a href="/books" className="dropdown-item">
                  books
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
                More
              </a>
              <div className="dropdown-menu fade-down m-0">
                <a href="/about" className="dropdown-item">
                  About Us
                </a>
                <a href="/contact" className="dropdown-item">
                  Contact Us
                </a>
                <a href="/fee" className="dropdown-item">
                  Fee Structure
                </a>
                <a href="/courses" className="dropdown-item">
                  Courses
                </a>
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
            href="/contact"
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
