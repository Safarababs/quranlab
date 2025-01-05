import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import { Link } from "react-router-dom";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const OnlineNikah = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Online Nikah Service", active: true },
  ];

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="Online Nikah Service"
        breadcrumbItems={breadcrumbItems}
      />

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  className="img-fluid rounded shadow"
                  src="img/nikah.jpg"
                  alt="Online Nikah Service"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="section-title bg-white text-primary pe-3">
                About Our Online Nikah Service
              </h6>
              <h1 className="mb-4">
                Get Married Virtually with Our Trusted Nikah Service
              </h1>
              <p>
                Our **Online Nikah Service** provides a convenient and lawful
                platform for couples to get married under the supervision of
                qualified Islamic scholars. With a simple, secure, and legal
                process, we make it easier for couples to conduct their Nikah
                remotely, ensuring all the required Islamic protocols are met.
              </p>
              <p>
                We understand that due to distance, travel restrictions, or
                other personal reasons, it may be difficult for couples to have
                a traditional Nikah ceremony. Our online service facilitates a
                seamless virtual Nikah process, conducted in the presence of
                certified witnesses, ensuring that the union is valid and
                recognized.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Conducted by qualified Islamic scholars
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Convenient for long-distance or remote weddings
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  All required Islamic rituals and protocols are followed
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary py-3 px-5 mt-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <h2 className="mb-4 text-center">
            How Our Online Nikah Service Works
          </h2>
          <div className="row g-5">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Step 1: Initial Consultation</h5>
                  <p className="card-text">
                    Begin by contacting us to schedule a consultation. Our team
                    will guide you through the process, explain the
                    requirements, and assist you with necessary documentation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Step 2: Ceremony Setup</h5>
                  <p className="card-text">
                    We will schedule the online Nikah ceremony at a convenient
                    time for both parties. Our scholars will conduct the
                    ceremony in accordance with Islamic guidelines.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Step 3: Marriage Certificate</h5>
                  <p className="card-text">
                    After the ceremony, you will receive an official marriage
                    certificate, acknowledging the validity of your Nikah,
                    recognized in accordance with Islamic law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <Contact />
      <PopularCourses />
    </div>
  );
};

export default OnlineNikah;
