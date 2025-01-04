import React, { useState } from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const FaqAndHelp = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "FAQ and Help", active: true },
  ];

  const faqs = [
    {
      id: 1,
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support by email at support@yourdomain.com or by calling +123-456-7890.",
    },
    {
      id: 2,
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy. If you're not satisfied with your purchase, you can return it within 30 days of receiving the item.",
    },
    {
      id: 3,
      question: "How can I reset my password?",
      answer:
        "To reset your password, click on 'Forgot Password' on the login page, and follow the instructions sent to your registered email.",
    },
    {
      id: 4,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping fees will vary depending on your location.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <PageHeader title="FAQ and Help" breadcrumbItems={breadcrumbItems} />
      <div className="container py-5">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <p>
          This section contains answers to common questions. If you need further
          assistance, please don't hesitate to contact us.
        </p>

        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <div className="faq-section">
          <h3>FAQs</h3>
          <div className="row">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{faq.question}</h5>
                    <p className="card-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="help-section mt-5">
          <h3>Need More Help?</h3>
          <p>
            If you cannot find the answer to your question here, feel free to
            contact our support team for further assistance.
          </p>
          <p>
            Email us at{" "}
            <a href="mailto:support@yourdomain.com">support@yourdomain.com</a>{" "}
            or call us at +123-456-7890.
          </p>
        </div>

        <PopularCourses />
        <Contact />
      </div>
    </div>
  );
};

export default FaqAndHelp;
