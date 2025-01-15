import React from "react";
import PageHeader from "../../Pages Header/PageHeader"; // Adjust path if needed
import Contact from "../../Contact/Contact"; // Adjust path if needed
import Service from "../Home Page/LandingPage/Service/Service"; // Adjust path if needed

const AlamAbbas = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Alam-e-Abbas", active: true },
  ];

  return (
    <div>
      <PageHeader title="Alam-e-Abbas" breadcrumbItems={breadcrumbItems} />
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Product
          </h6>
          <h2 className="mb-4">Alam-e-Abbas Collection</h2>
        </div>
        <p>
          The Alam-e-Abbas is a symbol of strength, loyalty, and sacrifice,
          representing the revered and heroic character of Abbas ibn Ali, the
          son of Imam Ali and the half-brother of Imam Hussain. Known for his
          bravery and commitment during the Battle of Karbala, the Alam, or
          flag, is a significant religious and cultural emblem in Islamic
          tradition.
        </p>
        <p>
          The Alam-e-Abbas is often seen in religious processions, especially
          during the month of Muharram, where it signifies the spirit of loyalty
          and devotion to the cause of Imam Hussain. It is typically carried by
          devotees during mourning ceremonies, particularly in Karbala-related
          rituals and commemorations.
        </p>
        <div className="text-center my-5">
          <img
            src="./img/alam-abass1.jpg" // Replace with actual image URL
            alt="Alam-e-Abbas"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/alam-abass2.jpg" // Replace with actual image URL
            alt="Alam-e-Abbas"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/alam-abass3.png" // Replace with actual image URL
            alt="Alam-e-Abbas"
            className="img-fluid rounded image-gap"
          />
        </div>

        <p>
          The Alam-e-Abbas is typically adorned with intricate designs, often
          featuring the name of Abbas ibn Ali, his titles, and other symbolic
          representations. It is usually constructed from high-quality fabric
          and materials, ensuring that it remains strong and durable while
          serving as a spiritual banner for the followers of the Ahlul Bayt.
        </p>
        <p>
          Our collection of Alam-e-Abbas is crafted with meticulous care and
          attention to detail, ensuring that each Alam is not only a symbol of
          devotion but also an artistic representation of religious history.
          These Alams are available in different sizes, designs, and fabrics to
          cater to various needs and preferences.
        </p>
      </div>

      {/* Additional Product Features Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src="./img/alam-e-abbas.jpg" // Replace with actual image URL
              alt="Alam-e-Abbas"
              className="img-fluid rounded image-gap"
            />
          </div>
          <div className="col-md-6">
            <h4>Why Choose Our Alam-e-Abbas?</h4>
            <ul>
              <li>Symbol of strength, loyalty, and sacrifice</li>
              <li>High-quality materials ensuring durability</li>
              <li>Intricate designs honoring Abbas ibn Ali</li>
              <li>Perfect for religious processions and commemorations</li>
              <li>Available in various sizes and designs to fit your needs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="container py-5">
        <div className="text-center">
          <h4>Customer Reviews</h4>
          <p>Here's what our customers say about our Alam-e-Abbas:</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "The Alam-e-Abbas I purchased was beautifully crafted and
                  added a spiritual touch to our religious procession. I felt a
                  deep connection to the history it represents."
                </p>
                <h5 className="card-title">Ali R.</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "A stunning piece of craftsmanship. The Alam is strong,
                  durable, and the intricate design truly symbolizes the values
                  of Abbas ibn Ali."
                </p>
                <h5 className="card-title">Sana F.</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "Our community procession was elevated by the presence of the
                  Alam-e-Abbas. It is truly a meaningful and powerful symbol of
                  faith."
                </p>
                <h5 className="card-title">Hassan M.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact and Service Sections */}
      <div className="container py-5">
        <Contact />
        <Service />
      </div>
    </div>
  );
};

export default AlamAbbas;
