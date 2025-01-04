// src/components/MajlisETarheem.js
import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const MajlisETarheem = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Majlis e Tarheem", active: true },
  ];

  const upcomingEvents = [
    {
      title: "Majlis e Tarheem - January",
      date: "January 15, 2025",
      time: "6:00 PM",
      location: "Community Center",
    },
    {
      title: "Majlis e Tarheem - February",
      date: "February 10, 2025",
      time: "6:00 PM",
      location: "Community Center",
    },
  ];

  return (
    <div>
      <PageHeader title="Majlis e Tarheem" breadcrumbItems={breadcrumbItems} />
      <div className="container py-5">
        <h2 className="mb-4">Majlis e Tarheem</h2>
        <p>
          Majlis e Tarheem is a special gathering held in remembrance of the
          deceased. The purpose of this gathering is to pray for the forgiveness
          and elevation of the souls of the deceased and to offer comfort and
          spiritual support to their families.
        </p>
        <p>
          Join us for Majlis e Tarheem sessions where we offer prayers,
          recitations of Quranic verses, and supplications for the departed
          souls. These sessions provide a sense of peace for both the families
          and the community members.
        </p>

        {/* Upcoming Events Section */}
        <div className="upcoming-events mt-5">
          <h3 className="mb-4">Upcoming Majlis e Tarheem Events</h3>
          <div className="row">
            {upcomingEvents.map((event, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">
                      <strong>Date:</strong> {event.date} <br />
                      <strong>Time:</strong> {event.time} <br />
                      <strong>Location:</strong> {event.location}
                    </p>
                    <a href="/contact" className="btn btn-primary">
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials mt-5">
          <h3 className="mb-4">What Our Attendees Say</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial p-3 border rounded">
                <p>
                  "Attending Majlis e Tarheem has brought a sense of peace and
                  comfort to my heart. I feel spiritually connected to the
                  departed souls."
                </p>
                <strong>- Ali H.</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial p-3 border rounded">
                <p>
                  "The prayers and supplications during Majlis e Tarheem have
                  helped me cope with the loss of my loved ones."
                </p>
                <strong>- Fatima S.</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial p-3 border rounded">
                <p>
                  "A truly spiritual experience that brings the community
                  together. Highly recommend attending."
                </p>
                <strong>- Zainab A.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <PopularCourses />
    </div>
  );
};

export default MajlisETarheem;
