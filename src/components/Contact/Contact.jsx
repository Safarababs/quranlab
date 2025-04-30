import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function handleClick(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_ueoym1l",
        "template_uidjdus",
        event.target,
        "79pxgO9DwkqVi5_BE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  }

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Contact Us
          </h6>
          <h1 className="mb-5">Contact For Any Query</h1>
        </div>
        <div className="row g-4">
          {/* Contact Form Section */}
          <div
            className="col-lg-6 col-md-12 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <form onSubmit={handleClick}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="form-control"
                      id="name"
                      required
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="form-control"
                      id="email"
                      required
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      name="tel"
                      placeholder="+123-123456"
                      className="form-control"
                      id="Tel"
                      required
                    />
                    <label htmlFor="Tel">Whatsapp</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "150px" }}
                      name="message"
                      required
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Information Section */}
          <div
            className="col-lg-6 col-md-12 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h5>Get In Touch</h5>
            <p>
              We are always here to assist you with any queries or concerns you
              may have. Please feel free to reach out to us through any of the
              provided contact methods. Your satisfaction is our priority, and
              we strive to respond to all inquiries promptly.
            </p>

            <div className="d-flex align-items-center mb-3">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="fa fa-phone-alt text-white"></i>
              </div>
              <div className="ms-3">
                <h5 className="text-primary">Mobile</h5>
                <p className="mb-0">+923002425568</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="fa fa-envelope-open text-white"></i>
              </div>
              <div className="ms-3">
                <h5 className="text-primary">Email</h5>
                <p className="mb-0">info@onlinequranlab.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
