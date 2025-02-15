import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import { Link } from "react-router-dom";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const Istikhara = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Istikhara Online", active: true },
  ];

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="Online Istikhara Service"
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
                  src="img/istakhara.jpg"
                  alt="Online Istikhara Service"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="section-title bg-white text-primary pe-3">
                About Our Online Istikhara Service
              </h6>
              <h1 className="mb-4">
                Seek Guidance with Our Online Istikhara Service
              </h1>
              <p>
                Our **Online Istikhara Service** provides a platform to seek
                guidance and make informed decisions in matters of life. Through
                online consultations with experienced Islamic scholars, you can
                gain insights and clarity on various aspects of life, including
                marriage, career, education, and personal challenges.
              </p>
              <p>
                We understand that seeking guidance can be a personal and
                sensitive matter. Our service offers a convenient and
                confidential way to connect with knowledgeable scholars who can
                provide valuable insights and support based on Islamic
                principles and teachings.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Consultations with experienced Islamic scholars
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Guidance on various life matters
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Confidentiality and privacy assured
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
            How Our Online Istikhara Service Works
          </h2>
          <div className="row g-5">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Step 1: Consultation Request</h5>
                  <p className="card-text">
                    Submit a request for an online consultation through our
                    website or contact us directly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">
                    Step 2: Consultation Scheduling
                  </h5>
                  <p className="card-text">
                    Schedule a convenient time for your online consultation with
                    the selected scholar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Step 3: Online Consultation</h5>
                  <p className="card-text">
                    Participate in the online consultation via video call or
                    chat and receive guidance and insights from the scholar.
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

export default Istikhara;
