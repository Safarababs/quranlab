// src/components/QazaNamaz.js
import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const QazaNamaz = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Qaza Namaz (Missed Prayers)", active: true },
  ];

  const faqItems = [
    {
      question: "What is Qaza Namaz?",
      answer:
        "Qaza Namaz refers to the missed prayers that a person needs to perform as a way to make up for the prayers they missed due to various reasons. It is an important practice in Islam.",
    },
    {
      question: "How do I perform Qaza Namaz?",
      answer:
        "Qaza Namaz is performed in the same way as regular prayers, with the intention of making up for the missed ones. Specific guidelines can be followed based on the missed prayer's time.",
    },
    {
      question: "How many Qaza prayers do I need to perform?",
      answer:
        "The number of Qaza prayers depends on the number of prayers you missed. You need to offer each missed prayer as soon as possible and continue until all missed prayers are fulfilled.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Qaza Namaz (Missed Prayers)"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container py-5">
        <h2 className="mb-4">Qaza Namaz (Missed Prayers)</h2>
        <p>
          This section helps you understand the process of performing Qaza Namaz
          (missed prayers). The Islamic teachings provide guidelines on how to
          make up for missed prayers and how they can be performed in an
          appropriate manner.
        </p>
        <p>
          Learn the proper methods and the number of prayers required to fulfill
          your Qaza Namaz obligations.
        </p>

        {/* Detailed Guide Section */}
        <div className="guide-section mt-5">
          <h3 className="mb-4">How to Perform Qaza Namaz</h3>
          <p>
            To perform Qaza Namaz, start by making an intention (niyyah) to
            perform the missed prayers. Then, follow the same steps as regular
            prayer, such as reciting Surah Al-Fatiha and performing Ruku,
            Sujood, etc.
          </p>
          <p>
            It is recommended to perform the Qaza prayers in the same order they
            were missed, starting from the most recent missed prayer.
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

export default QazaNamaz;
