import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const QuestionAnswer = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Question Answer Section", active: true },
  ];

  // Example previously answered questions
  const faqItems = [
    {
      question: "What is the importance of prayer in Islam?",
      answer:
        "Prayer (Salah) is one of the Five Pillars of Islam and is a direct connection between the worshipper and Allah. It is a way to express gratitude and seek guidance.",
    },
    {
      question: "How should I perform Wudu (ablution)?",
      answer:
        "Wudu is the purification ritual before performing prayers. It involves washing the hands, face, arms, wiping the head, and washing the feet.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Question Answer Section"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container py-5">
        <h2 className="mb-4">Question Answer Section</h2>
        <p>
          This section is dedicated to answering your questions about Islam,
          religious practices, and everyday challenges. Our knowledgeable
          scholars are here to provide you with insightful and accurate answers
          based on Islamic teachings.
        </p>
        <p>
          You can explore existing questions and answers for better
          understanding, or if you wish to submit a question, please visit our
          contact page where you can easily reach out to us.
        </p>

        {/* Question Submission Link */}
        <div className="mt-5">
          <h3 className="mb-4">Submit Your Question</h3>
          <p>
            To submit your question, please click the link below to reach our
            contact page and fill in the details there.
          </p>
          <p>
            <a href="/contact" className="btn btn-primary py-2 px-4">
              Submit Question
            </a>
          </p>
        </div>

        {/* Past Questions and Answers Section */}
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

export default QuestionAnswer;
