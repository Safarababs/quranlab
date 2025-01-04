import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const EducationalFund = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Educational Fund", active: true },
  ];

  return (
    <div>
      <PageHeader title="Educational Fund" breadcrumbItems={breadcrumbItems} />
      <div className="container py-5">
        <h2 className="mb-4">Educational Fund</h2>
        <p>
          The Educational Fund is dedicated to helping students who are in need
          of financial assistance. This fund supports the education of
          underprivileged students by covering their tuition fees, providing
          books, and ensuring they have access to quality education.
        </p>
        <p>
          Your contribution will make a significant impact in the lives of many
          students, enabling them to pursue their dreams and build a better
          future.
        </p>

        <h3>Support the Educational Fund</h3>
        <p>
          If you'd like to make a contribution or need more information about
          the fund, please feel free to contact us.
        </p>

        {/* Donate Now Button */}
        <a href="/contact" className="btn btn-primary mt-3">
          Donate Now
        </a>

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
