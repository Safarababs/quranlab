// src/components/OnlineNikkah.js
import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const OnlineNikkah = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Online Nikkah", active: true },
  ];

  const testimonials = [
    {
      name: "Ahmed & Fatima",
      feedback:
        "The online Nikkah service was seamless, and we were guided through every step. It was a blessing to have a valid marriage even while abroad.",
    },
    {
      name: "Sarah & Ali",
      feedback:
        "We are so happy we chose this service. The officiant was kind and professional, and the ceremony felt so special, even from afar.",
    },
  ];

  return (
    <div>
      <PageHeader title="Online Nikkah" breadcrumbItems={breadcrumbItems} />
      <div className="container py-5">
        <h2 className="mb-4">Online Nikkah</h2>
        <p>
          We offer an online Nikkah service, allowing couples to perform their
          Islamic marriage ceremony virtually, with the proper religious
          procedures followed. This service ensures that both parties can
          conduct the marriage contract while staying within the bounds of
          Islamic law, no matter their location.
        </p>
        <p>
          Our qualified officiants will guide you through the Nikkah process,
          ensuring the ceremony is performed according to Islamic traditions.
        </p>

        {/* Booking Section */}
        <div className="booking-section mt-5">
          <h3 className="mb-4">Book Your Online Nikkah</h3>
          <p>
            Ready to take the next step? Book your online Nikkah ceremony with
            us today. Our team is here to assist you in arranging the perfect
            online Nikkah ceremony.
          </p>
          <a href="/contact" className="btn btn-primary">
            Book Now
          </a>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials mt-5">
          <h3 className="mb-4">What Our Couples Are Saying</h3>
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="testimonial p-3 border rounded shadow-sm">
                  <p>
                    <i>"{testimonial.feedback}"</i>
                  </p>
                  <strong>- {testimonial.name}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Contact />
      <PopularCourses />
    </div>
  );
};

export default OnlineNikkah;
