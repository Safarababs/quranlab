import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

// Reusable Fund Section Component (Card Layout)
const FundSection = ({ title, description, link, image }) => (
  <div className="col-md-4 mb-4">
    <div className="card shadow border-light">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">
          Donate Now
        </a>
      </div>
    </div>
  </div>
);

const EducationalFund = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Educational Fund", active: true },
  ];

  return (
    <div>
      <PageHeader title="Educational Fund" breadcrumbItems={breadcrumbItems} />\
      <div className="container py-5">
        {/* Split Screen Layout (Image + Text) */}
        <div className="row align-items-center">
          {/* Left Side (Image) */}
          <div className="col-lg-6">
            <img
              src="img/donate.jpg" // Replace with your image
              alt="Educational Fund"
              className="img-fluid rounded shadow"
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                borderRadius: "10px",
              }}
            />
          </div>

          {/* Right Side (Text) */}
          <div className="col-lg-6">
            <h2 className="mb-4">About the Educational Fund</h2>
            <p>
              The Educational Fund is dedicated to helping students who are in
              need of financial assistance. This fund supports the education of
              underprivileged students by covering their tuition fees, providing
              books, and ensuring they have access to quality education.
            </p>
            <p>
              Your contribution will make a significant impact in the lives of
              many students, enabling them to pursue their dreams and build a
              better future.
            </p>
            <h3>Support the Educational Fund</h3>
            <p>
              If you'd like to make a contribution or need more information
              about the fund, please feel free to contact us.
            </p>
            <a href="/contact" className="btn btn-primary mt-3">
              Donate Now
            </a>
          </div>
        </div>

        {/* Fund Sections (Cards) */}
        <h3 className="mt-5 mb-4">Our Funds</h3>
        <div className="row">
          <FundSection
            title="Studio Fund"
            description="The Studio Fund supports the establishment and maintenance of a creative space for educational purposes, such as video production, art workshops, and other learning activities."
            link="/contact"
            image="img/donate1.png" // Replace with image
          />
          <FundSection
            title="Podcast Fund"
            description="The Podcast Fund helps produce educational podcasts aimed at spreading knowledge on religious, cultural, and societal issues. Your contribution will allow us to produce high-quality content for our community."
            link="/contact"
            image="img/donate2.webp" // Replace with image
          />
          <FundSection
            title="Islamic Shop Fund"
            description="The Islamic Shop Fund assists in providing resources such as books, prayer mats, religious items, and other materials necessary for the spiritual well-being of the community."
            link="/contact"
            image="img/donate3.jpg" // Replace with image
          />
        </div>

        {/* Contact Section */}
        <Contact />

        <h4 className="mt-5">
          Popular Courses Supported by the Educational Fund
        </h4>
        <p>
          The funds contributed will help support courses and programs like the
          ones below:
        </p>

        {/* Popular Courses Section */}
        <PopularCourses />
      </div>
    </div>
  );
};

export default EducationalFund;
