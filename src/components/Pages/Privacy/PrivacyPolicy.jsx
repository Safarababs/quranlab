import React from "react";
import PageHeader from "../../Pages Header/PageHeader";

const PrivacyPolicy = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Privacy Policy", active: true },
  ];

  return (
    <div>
      <PageHeader title="Privacy Policy" breadcrumbItems={breadcrumbItems} />
      <div className="container py-5">
        <h2 className="mb-4">Privacy Policy</h2>
        <p>
          This Privacy Policy describes how we collect, use, and protect your
          personal information when you visit our website or use our services.
          By using our website, you agree to the collection and use of
          information in accordance with this policy.
        </p>

        <h3>1. Information We Collect</h3>
        <p>
          We collect the following types of information when you visit our
          website:
        </p>
        <ul>
          <li>
            <strong>Personal Information:</strong> This includes information
            like your name, email address, phone number, and other details that
            you voluntarily provide when contacting us or signing up for our
            services.
          </li>
          <li>
            <strong>Usage Data:</strong> We collect information about how you
            interact with our website, including your IP address, browser type,
            device information, and pages visited. This is typically gathered
            via cookies or similar tracking technologies.
          </li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>To provide and improve our services.</li>
          <li>To respond to your inquiries or requests.</li>
          <li>To personalize your experience on our website.</li>
          <li>
            To send you updates, newsletters, or promotional material (if you
            have opted in).
          </li>
          <li>To monitor and analyze the usage of our website.</li>
        </ul>

        <h3>3. How We Protect Your Information</h3>
        <p>
          We implement a variety of security measures to safeguard your personal
          information. This includes encryption, access control, and regular
          security audits. However, no method of transmission over the internet
          or electronic storage is 100% secure, so we cannot guarantee complete
          security.
        </p>

        <h3>4. Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar technologies to improve your browsing
          experience. Cookies are small files stored on your device that help us
          track usage patterns, preferences, and allow for a more personalized
          experience. You can control cookie settings through your browser
          preferences, but please note that disabling cookies may affect your
          ability to use certain features of our website.
        </p>

        <h3>5. Sharing Your Information</h3>
        <p>
          We do not sell, rent, or trade your personal information to third
          parties. However, we may share your information with trusted third
          parties who assist us in operating our website, conducting our
          business, or servicing you, as long as those parties agree to keep
          this information confidential.
        </p>

        <h3>6. Your Rights</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Request corrections or updates to your personal information.</li>
          <li>
            Request the deletion of your personal information, subject to
            certain legal conditions.
          </li>
          <li>
            Object to the processing of your data or request restriction of its
            use.
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us via the information
          provided in the "Contact Us" section below.
        </p>

        <h3>7. Third-Party Links</h3>
        <p>
          Our website may contain links to other websites. We are not
          responsible for the privacy practices of these third-party websites,
          and we encourage you to review their privacy policies before providing
          any personal information.
        </p>

        <h3>8. Children's Privacy</h3>
        <p>
          Our services are not intended for individuals under the age of 13, and
          we do not knowingly collect personal information from children. If we
          learn that we have collected personal information from a child under
          the age of 13, we will take steps to delete that information.
        </p>

        <h3>9. Changes to This Privacy Policy</h3>
        <p>
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be posted on this page, and the date of the
          last update will be indicated at the top. Please review this policy
          periodically to stay informed about how we are protecting your
          information.
        </p>

        <h3>10. Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          practices, please contact us at:
        </p>
        <p>
          Email: <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
        </p>
        <p>Phone: +123-456-7890</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
