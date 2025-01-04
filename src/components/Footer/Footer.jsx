import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Quick Links</h4>
            <a className="btn btn-link" href="/about">
              About Us
            </a>
            <a className="btn btn-link" href="/contact">
              Contact Us
            </a>
            <a className="btn btn-link" href="/policy">
              Privacy Policy
            </a>
            <a className="btn btn-link" href="/terms">
              Terms & Conditions
            </a>
            <a className="btn btn-link" href="/faq">
              FAQs & Help
            </a>
          </div>

          {/* Contact Information */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2">
              <FaMapMarkerAlt className="me-3" />
              123 Street, New York, USA
            </p>
            <p className="mb-2">
              <FaPhoneAlt className="me-3" />
              +012 345 67890
            </p>
            <p className="mb-2">
              <FaEnvelope className="me-3" />
              info@example.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="/">
                <FaTwitter />
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="http://www.youtube.com/@almasonlinequran"
              >
                <FaFacebookF />
              </a>
              <a className="btn btn-outline-light btn-social" href="/">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Gallery</h4>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="img/cat-1.jpg"
                  alt="cat 1"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="img/cat-2.jpg"
                  alt="cat 2"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="img/cat-3.jpg"
                  alt="cat 3"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="img/cat-4.jpg"
                  alt="cat 4"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="img/cat-4.jpg"
                  alt="cat 5"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid bg-light p-1"
                  src="img/cat-4.jpg"
                  alt="cat 6"
                />
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Newsletter</h4>
            <p>Stay updated with the latest news and offers.</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="email"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright and Footer Menu */}
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a
                className="border-bottom"
                href="https://www.quranlabonline.com"
              >
                Quran Lab Online
              </a>
              , All Rights Reserved.
              <br />
              Designed By{" "}
              <a className="border-bottom" href="https://www.abdullah.com">
                Abdullah
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="/">Home</a>
                <a href="/">Cookies</a>
                <a href="/">Help</a>
                <a href="/">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
