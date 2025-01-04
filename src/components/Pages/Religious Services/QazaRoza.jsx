// src/components/QazaRoza.js
import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const QazaRoza = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Qaza Roza (Missed Fasts)", active: true },
  ];

  const faqItems = [
    {
      question: "What is Qaza Roza?",
      answer:
        "Qaza Roza refers to the fasts that a person needs to make up for those missed during Ramadan due to illness, travel, or any valid excuse. These fasts must be performed as soon as possible after Ramadan.",
    },
    {
      question: "How do I perform Qaza Roza?",
      answer:
        "To perform Qaza Roza, you must fast on days outside of Ramadan, with the intention of making up for the missed fast. You can perform these fasts individually, one for each missed day, or in sequence if multiple fasts were missed.",
    },
    {
      question: "Is there a specific time to perform Qaza Roza?",
      answer:
        "There is no fixed time for performing Qaza Roza, but it should be done as soon as possible after the missed fasts. You may choose any time of the year, except for the days of Eid or Hajj.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Qaza Roza (Missed Fasts)"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container py-5">
        <h2 className="mb-4">Qaza Roza (Missed Fasts)</h2>
        <p>
          If you have missed any fasts during Ramadan, this section guides you
          on how to perform Qaza Roza (missed fasts). Learn the correct steps to
          fulfill your missed fasting obligations according to Islamic law.
        </p>
        <p>
          The process includes the number of fasts to be made up and the
          appropriate conditions for performing them.
        </p>

        {/* Detailed Guide Section */}
        <div className="guide-section mt-5">
          <h3 className="mb-4">How to Perform Qaza Roza</h3>
          <p>
            To perform Qaza Roza, begin by making an intention (niyyah) that you
            are fasting to make up for a missed fast. The fast should be
            observed just like a regular fast, with no food or drink from dawn
            to sunset.
          </p>
          <p>
            If you have missed multiple fasts, try to perform them one at a
            time, following the order of the days you missed.
          </p>
        </div>

        {/* FAQs Section */}
        <div className="faq-section mt-5">
          <h3 className="mb-4">Frequently Asked Questions</h3>
          {faqItems.map((faq, index) => (
            <div className="faq-item mb-4" key={index}>
              <h5>{faq.question}</h5>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <Contact />
      <PopularCourses />
    </div>
  );
};

export default QazaRoza;
