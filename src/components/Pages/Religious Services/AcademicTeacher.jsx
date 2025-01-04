import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const AcademicTeacher = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    {
      label: "Academic Teacher Available for School and College",
      active: true,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Academic Teacher Available for School and College"
        breadcrumbItems={breadcrumbItems}
      />

      {/* Main Content Section */}
      <div className="container py-5">
        <h2 className="mb-4">
          Academic Teacher Available for School and College
        </h2>
        <p>
          We offer experienced academic teachers for school and college-level
          education. Whether you need help with science, mathematics, or social
          studies, our qualified teachers are available for personalized
          lessons. Our teachers have years of experience helping students
          succeed in their academic careers. They understand the importance of a
          tailored teaching approach and provide one-on-one sessions that cater
          to the individual learning style of each student. By focusing on your
          specific needs, they help you grasp complex concepts and improve your
          grades. Whether you're struggling in a subject or looking to improve
          your understanding, our academic teachers are here to help.
        </p>
        <p>
          Book online for one-on-one sessions with our teachers who can guide
          you through your academic curriculum and improve your grades. The
          sessions are flexible and can be scheduled at your convenience.
          Whether you're in high school or preparing for college, our teachers
          offer support across various subjects including math, science,
          languages, and more. Their deep knowledge and expertise in each field
          make them an excellent resource for anyone looking to succeed
          academically. We understand that every student learns differently, so
          our teaching style adapts to suit your needs, ensuring that you
          receive the best education possible.
        </p>
        <p>
          Booking a session with one of our academic teachers is quick and easy.
          Simply choose the subject you'd like to focus on, select your
          preferred date, and you're ready to go. Our teachers are available to
          help with homework assignments, exam preparation, and understanding
          course material. If you're having trouble with specific concepts, our
          teachers will explain them in a way that is easy to understand. By the
          end of your sessions, you'll have a better understanding of the
          subject and be more confident in your academic abilities.
        </p>
        <p>
          With our online booking system, it's never been easier to get the help
          you need. Our teachers are committed to helping you achieve your
          academic goals. You don't have to struggle through difficult subjects
          alone. Let us assist you in reaching your full potential by providing
          you with the guidance and resources necessary to succeed.
        </p>

        {/* Booking Section */}
        <div className="booking-form mt-5">
          <h3 className="mb-3">Book a Session</h3>
          <p>
            To book a session with one of our academic teachers, simply click
            the button below to be redirected to our contact page where you can
            submit your booking details. You can provide your information,
            select a subject, and choose a time that works best for you.
          </p>
          <p>
            <a href="/contact" className="btn btn-primary py-2 px-4">
              Book Now
            </a>
          </p>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials mt-5">
          <h3 className="mb-4">What Our Students Say</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial p-3 border rounded">
                <p>
                  "The sessions with my academic teacher were excellent! I
                  improved my grades and gained confidence in math."
                </p>
                <strong>- Sarah A.</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial p-3 border rounded">
                <p>
                  "Highly recommend these teachers! They make learning easy and
                  fun. I enjoyed every session."
                </p>
                <strong>- Ahmed R.</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial p-3 border rounded">
                <p>
                  "Flexible scheduling and great teaching. I could prepare for
                  my college exams effectively."
                </p>
                <strong>- Maria K.</strong>
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

export default AcademicTeacher;
