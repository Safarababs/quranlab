import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const TermsAndConditions = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Terms and Conditions", active: true },
  ];

  return (
    <div>
      <PageHeader
        title="Terms and Conditions"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container py-5">
        <h2 className="mb-4">Terms and Conditions</h2>
        <p>
          Welcome to our website! These terms and conditions outline the rules
          and regulations for the use of our website. By accessing this website,
          you agree to comply with these terms. If you do not agree to these
          terms, please do not use our website.
        </p>

        <h3>1. Acceptance of Terms</h3>
        <p>
          By using our website, services, or products, you agree to these terms
          and conditions. We reserve the right to update or change these terms
          at any time, and it is your responsibility to check this page
          periodically for updates.
        </p>

        <h3>2. Use of the Website</h3>
        <p>
          You are authorized to access and use this website only for lawful
          purposes. You agree to comply with all applicable laws and regulations
          when using this site.
        </p>
        <ul>
          <li>You may not use the website in any unlawful manner.</li>
          <li>
            You may not use the website to transmit any harmful or unlawful
            content.
          </li>
          <li>
            You agree not to interfere with the operation or security of the
            website.
          </li>
        </ul>

        <h3>3. User Responsibilities</h3>
        <p>
          You are responsible for maintaining the confidentiality of your
          account and any activity that occurs under your account. You agree to
          immediately notify us of any unauthorized use of your account.
        </p>

        <h3>4. Restrictions</h3>
        <p>
          You may not, under any circumstances, engage in the following actions:
        </p>
        <ul>
          <li>
            Copying, reproducing, or distributing content without permission.
          </li>
          <li>
            Decompiling, disassembling, or attempting to reverse-engineer any
            software or code on the website.
          </li>
          <li>
            Engaging in any activity that could harm the website or its users.
          </li>
        </ul>

        <h3>5. Intellectual Property</h3>
        <p>
          All content, including but not limited to text, images, graphics, and
          logos on this website, is protected by intellectual property laws. You
          may not use any content from the website without prior written
          consent.
        </p>

        <h3>6. Limitation of Liability</h3>
        <p>
          We are not liable for any damages, losses, or expenses arising from
          the use or inability to use this website. We do not guarantee that the
          website will be error-free or available at all times.
        </p>

        <h3>7. Privacy Policy</h3>
        <p>
          Please refer to our Privacy Policy for information on how we collect,
          use, and protect your personal data when you visit our website.
        </p>

        <h3>8. Third-Party Links</h3>
        <p>
          Our website may contain links to third-party websites. These websites
          are not under our control, and we are not responsible for their
          content or privacy practices. Please review the terms and privacy
          policies of any third-party websites you visit.
        </p>

        <h3>9. Termination</h3>
        <p>
          We may suspend or terminate your access to the website at our sole
          discretion, without notice, if you violate any of these terms and
          conditions.
        </p>

        <h3>10. Indemnification</h3>
        <p>
          You agree to indemnify, defend, and hold harmless us and our
          affiliates, employees, and partners from any claims, damages, losses,
          or expenses arising from your use of the website, your violation of
          these terms, or any actions related to your account.
        </p>

        <h3>11. Governing Law</h3>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of [Your Country/State], without regard to its conflict
          of law principles. Any disputes arising from these terms will be
          resolved in the appropriate courts of [Your Country/State].
        </p>

        <h3>12. Changes to Terms</h3>
        <p>
          We reserve the right to modify or update these terms at any time. Any
          changes will be effective immediately upon posting. It is your
          responsibility to review these terms regularly.
        </p>

        <h3>13. Contact Us</h3>
        <p>
          If you have any questions or concerns regarding these terms and
          conditions, please contact us at:
        </p>
        <p>
          Email: <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
        </p>
        <p>Phone: +123-456-7890</p>

        <PopularCourses />
        <Contact />
      </div>
    </div>
  );
};

export default TermsAndConditions;
