import React from "react";
import { FaFacebookF, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 col-12">
            <h4 className="text-white mb-3">Quick Links</h4>
            <a className="btn btn-link text-light" href="/about">
              About Us
            </a>
            <a className="btn btn-link text-light" href="/contact">
              Contact Us
            </a>
            <a className="btn btn-link text-light" href="/policy">
              Privacy Policy
            </a>
            <a className="btn btn-link text-light" href="/terms">
              Terms & Conditions
            </a>
            <a className="btn btn-link text-light" href="/faq">
              FAQs & Help
            </a>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4 col-md-6 col-12">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2">
              <FaPhoneAlt className="me-3" />
              +923002425568
            </p>
            <p className="mb-2">
              <FaEnvelope className="me-3" />
              info@onlinequranlab.com
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social me-2"
                href="http://www.youtube.com/@almasonlinequran"
              >
                <FaFacebookF />
              </a>
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.facebook.com/profile.php?id=100066718635513"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="col-lg-4 col-md-6 col-12">
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
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container-fluid p-0 bg-dark text-light">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 text-center text-md-start mb-3 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <a
                className="border-bottom me-2"
                href="https://www.quranlabonline.com"
                style={{ textDecoration: "none" }}
              >
                Quran Lab Online
              </a>
              <p className="mb-0">
                &copy;{" "}
                {`2025 - ${new Date().getFullYear()} All Rights Reserved.`}
              </p>
            </div>
            <br />
            <span>Designed By </span>
            <a href="https://safarababs.github.io/safarweb/">Safar Abbas</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
