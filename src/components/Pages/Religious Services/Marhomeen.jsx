import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import { Link } from "react-router-dom";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

// Reusable Service Component
const ServiceSection = ({ title, imageSrc, description, index }) => {
  // Determine if the index is odd or even to switch the order
  const isOdd = index % 2 !== 0;

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Conditionally render the image and description order */}
          {isOdd ? (
            <>
              {/* Description First for Odd Indices */}
              <div className="col-lg-6">
                <h6 className="section-title bg-white text-primary pe-3">
                  About Our Aamal for Marhoomeen Service
                </h6>
                <h1 className="mb-4">{title}</h1>
                <p>{description}</p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-check text-primary me-2"></i>
                    Conducted by experienced scholars and religious guides
                  </li>
                  <li>
                    <i className="fa fa-check text-primary me-2"></i>
                    Tailored services for deceased loved ones
                  </li>
                  <li>
                    <i className="fa fa-check text-primary me-2"></i>
                    Available for individuals and families in need
                  </li>
                </ul>
                <Link to="/contact" className="btn btn-primary py-3 px-5 mt-3">
                  Contact Us
                </Link>
              </div>

              {/* Image Second for Odd Indices */}
              <div className="col-lg-6">
                <div className="position-relative">
                  <img
                    className="img-fluid rounded shadow"
                    src={imageSrc}
                    alt={title}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Image First for Even Indices (default) */}
              <div className="col-lg-6">
                <div className="position-relative">
                  <img
                    className="img-fluid rounded shadow"
                    src={imageSrc}
                    alt={title}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Description Second for Even Indices (default) */}
              <div className="col-lg-6">
                <h6 className="section-title bg-white text-primary pe-3">
                  About Our Aamal for Marhoomeen Service
                </h6>
                <h1 className="mb-4">{title}</h1>
                <p>{description}</p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-check text-primary me-2"></i>
                    Conducted by experienced scholars and religious guides
                  </li>
                  <li>
                    <i className="fa fa-check text-primary me-2"></i>
                    Tailored services for deceased loved ones
                  </li>
                  <li>
                    <i className="fa fa-check text-primary me-2"></i>
                    Available for individuals and families in need
                  </li>
                </ul>
                <Link to="/contact" className="btn btn-primary py-3 px-5 mt-3">
                  Contact Us
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const AamalForMarhoomeen = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Aamal for Marhoomeen", active: true },
  ];

  // Service details can be dynamic if necessary
  const services = [
    {
      title: "Majlis-e-Tarheem",
      description:
        "A special gathering to pray for the deceased, seeking peace for their soul.",
      imageSrc: "img/majlis.jpg",
    },
    {
      title: "Quran Khawani for Marhoomeen",
      description:
        "A recitation of the Quran dedicated to the departed, to benefit their soul in the afterlife.",
      imageSrc: "img/quran.png",
    },
    {
      title: "Special Aamal for Marhoomeen",
      description:
        "Special rituals and prayers to honor the deceased and seek blessings for them.",
      imageSrc: "img/marhoom.jpg",
    },
    {
      title: "Qaza Namaz for Marhoomeen",
      description:
        "Performing missed prayers on behalf of the deceased to fulfill their religious obligations.",
      imageSrc: "img/missingnamaz.jpg",
    },
    {
      title: "Qaza Roza for Marhoomeen",
      description:
        "Fasting on behalf of the deceased to fulfill any missed fasts.",
      imageSrc: "img/fast.jpg",
    },
    {
      title: "Hajj, Umrah, and Ziyarah for Niyabat",
      description:
        "Performing pilgrimage on behalf of the deceased, fulfilling their religious obligations.",
      imageSrc: "img/umra.jpg",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="Aamal for Marhoomeen"
        breadcrumbItems={breadcrumbItems}
      />

      {/* Render Service Sections Dynamically */}
      {services.map((service, index) => (
        <ServiceSection
          key={index}
          title={service.title}
          imageSrc={service.imageSrc}
          description={service.description}
          index={index} // Pass index to ServiceSection
        />
      ))}

      {/* Additional Sections */}
      <Contact />
      <PopularCourses />
    </div>
  );
};

export default AamalForMarhoomeen;
