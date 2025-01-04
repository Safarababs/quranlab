import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";

const ContactPage = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },

    { label: "Contact", active: true },
  ];
  return (
    <div>
      <PageHeader title="Contact Us" breadcrumbItems={breadcrumbItems} />
      <Contact />
    </div>
  );
};

export default ContactPage;
