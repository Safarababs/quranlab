import React from "react";
import PageHeader from "../Pages Header/PageHeader";
import { useNavigate } from "react-router-dom";
import Contact from "../Contact/Contact";
import "./fee.css";

const Pricing = () => {
  const navigate = useNavigate();
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Courses", link: "/courses" },
    { label: "Pricing", active: true },
  ];

  const handleGetAdmission = () => {
    // Navigate to the Contact page when the button is clicked
    navigate("/contact");
  };

  const pricingPlans = [
    {
      classes: 4,
      price: {
        USD: 35,
        CAD: 35,
        UK: 25,
        AUD: 35,
        EURO: 25,
      },
    },
    {
      classes: 8,
      price: {
        USD: 40,
        CAD: 40,
        UK: 28,
        AUD: 40,
        EURO: 28,
      },
    },
    {
      classes: 12,
      price: {
        USD: 45,
        CAD: 45,
        UK: 30,
        AUD: 45,
        EURO: 30,
      },
    },
    {
      classes: 20,
      price: {
        USD: 60,
        CAD: 60,
        UK: 45,
        AUD: 60,
        EURO: 45,
      },
    },
  ];

  return (
    <>
      <PageHeader title="Pricing Plans" breadcrumbItems={breadcrumbItems} />
      <div>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Fees
          </h6>
          <h1 className="mb-5">Fee Structure</h1>
        </div>
        <div className="container py-5">
          <div className="pricing-container">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="pricing-plan mb-5">
                <h3>{plan.classes} Classes/Month</h3>
                <p>30 minutes Class - One to One Class</p>
                <ul>
                  {Object.entries(plan.price).map(([currency, price]) => (
                    <li key={currency}>
                      {currency}: <strong>${price.toFixed(2)}</strong>{" "}
                      only/month
                    </li>
                  ))}
                </ul>
                <button
                  className="btn btn-primary"
                  onClick={handleGetAdmission}
                >
                  Get Admission
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Pricing;
