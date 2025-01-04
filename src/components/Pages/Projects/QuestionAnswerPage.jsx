import React, { useState } from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const QuestionAnswerPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Question Answer Section", active: true },
  ];

  const faqs = [
    {
      id: 1,
      question: "What is the significance of fasting in Islam?",
      answer:
        "Fasting during the month of Ramadan is one of the Five Pillars of Islam, symbolizing spiritual growth, self-discipline, and empathy for the less fortunate.",
      category: "Fasting",
    },
    {
      id: 2,
      question: "How can I perform daily prayers correctly?",
      answer:
        "Performing daily prayers (Salah) includes specific physical movements and recitations. It is essential to learn the correct posture and supplications from authentic sources.",
      category: "Prayer",
    },
    {
      id: 3,
      question: "What are the rights of parents in Islam?",
      answer:
        "Islam emphasizes kindness, respect, and obedience to parents. Serving them and honoring them is a key aspect of being a good Muslim.",
      category: "Family",
    },
    {
      id: 4,
      question: "What is the concept of Zakat in Islam?",
      answer:
        "Zakat is an obligatory charity given to the poor and needy. It purifies wealth and promotes social justice.",
      category: "Charity",
    },
  ];

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="row">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{faq.question}</h5>
                    <p className="card-text">{faq.answer}</p>
                    <p className="mt-2">
                      <strong>Category: {faq.category}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h3>Have a Question? Ask Us!</h3>
          <a href="/contact" className="btn btn-primary">
            Ask a Question
          </a>
        </div>
      </div>

      <PopularCourses />
      <Contact />
    </div>
  );
};

export default QuestionAnswerPage;
