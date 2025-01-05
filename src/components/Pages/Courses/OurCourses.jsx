import React from "react";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import Service from "../Home Page/LandingPage/Service/Service";
import Instructors from "../Home Page/LandingPage/Instructors/Instructorrs";

const OurCourses = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Courses", link: "/courses" },
    { label: "Our Courses", active: true },
  ];
  return (
    <div>
      <PageHeader
        title="Quran Reading (Nazra Quran)"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Courses
          </h6>
          <h2 className="mb-4">What we offer?</h2>
        </div>
        <p>
          We offer a wide range of online courses designed to help you gain a
          deeper understanding of Islamic teachings, improve your Quranic
          knowledge, and develop essential skills in a variety of subjects. Our
          courses are designed for Muslims of all ages and backgrounds, and they
          are taught by qualified and experienced instructors.
        </p>
        <p>
          Whether you are looking to enhance your knowledge of the Quran, learn
          about Islamic history, master Tajweed (pronunciation), or explore
          other aspects of Islamic studies, we have a course that suits your
          needs. Start your learning journey with us today and build a strong
          foundation in your faith and practice.
        </p>
      </div>

      {/* Popular Courses Section */}
      <div className="container py-5">
        <PopularCourses />
        <Contact />
        <Service />
        <Instructors />
      </div>
    </div>
  );
};

export default OurCourses;
