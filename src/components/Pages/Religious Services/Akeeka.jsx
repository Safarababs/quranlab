import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import { Link } from "react-router-dom";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const Aqiqah = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Aqiqah", active: true },
  ];

  return (
    <div>
      {/* Page Header */}
      <PageHeader title="Aqiqah Service" breadcrumbItems={breadcrumbItems} />

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  className="img-fluid rounded shadow"
                  src="img/aqiqah.webp"
                  alt="Aqiqah Service"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="section-title bg-white text-primary pe-3">
                About Our Aqiqah Service
              </h6>
              <h1 className="mb-4">Welcome to Our Aqiqah Service</h1>
              <p>
                Our **Aqiqah Service** is dedicated to providing a platform for
                the performance of the Aqiqah ritual, which is a significant
                Sunnah in Islam. Through our online services, you can
                conveniently arrange for the sacrifice and distribution of meat
                according to Shia Islamic principles.
              </p>
              <p>
                We understand that performing Aqiqah is an important religious
                duty for parents to express gratitude for the birth of a child.
                Our service ensures that the Aqiqah is conducted with proper
                respect and adherence to Islamic teachings.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Arrangements for sacrifice and distribution
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Conducted according to Shia Islamic principles
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Ensures proper respect and adherence to teachings
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
          <h2 className="mb-4 text-center">How Our Aqiqah Service Works</h2>
          <div className="row g-5">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Step 1: Service Request</h5>
                  <p className="card-text">
                    Submit a request for Aqiqah service through our website or
                    contact us directly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Step 2: Arrangements</h5>
                  <p className="card-text">
                    We will make all necessary arrangements for the sacrifice
                    and distribution of meat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Step 3: Confirmation</h5>
                  <p className="card-text">
                    Receive confirmation and details of the completed Aqiqah
                    ritual.
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

export default Aqiqah;
