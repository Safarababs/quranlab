import React from "react";
import PageHeader from "../../Pages Header/PageHeader"; // Adjust path if needed
import Contact from "../../Contact/Contact"; // Adjust path if needed
import Service from "../Home Page/LandingPage/Service/Service"; // Adjust path if needed

const Tasbee = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Tasbee (Prayer Beads)", active: true },
  ];

  return (
    <div>
      <PageHeader
        title="Tasbee (Prayer Beads)"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Product
          </h6>
          <h2 className="mb-4">Our Tasbee (Prayer Beads) Collection</h2>
        </div>
        <p>
          Our Tasbee (prayer beads) collection is designed to help you keep
          track of your prayers and dhikr. Made from high-quality materials such
          as wood, stone, and glass, each tasbee is crafted to offer a smooth,
          comfortable experience during your spiritual practice. Whether you're
          looking for a simple set for everyday use or a more decorative piece,
          our range of prayer beads suits all preferences.
        </p>
        <p>
          Tasbees are not just functional but also serve as beautiful
          accessories that hold deep meaning. Whether you prefer a traditional
          style or one with more intricate designs, each tasbee is a reflection
          of devotion and faith. Some beads are adorned with precious stones or
          intricate carvings, while others maintain a minimalist, pure design.
        </p>
        <div className="text-center my-5">
          <img
            src="./img/tasbee.jpg" // Replace with actual image URL
            alt="Tasbee Collection"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/tasbee2.jpg" // Replace with actual image URL
            alt="Tasbee Collection"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/tasbee3.jpg" // Replace with actual image URL
            alt="Tasbee Collection"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/tasbee1.jpg" // Replace with actual image URL
            alt="Tasbee Collection"
            className="img-fluid rounded image-gap"
          />
        </div>

        <p>
          Our Tasbee collection offers a wide variety of colors and materials,
          allowing you to find the perfect set for your needs. Whether you are
          looking for something traditional or modern, each tasbee is
          thoughtfully designed to enhance your spiritual practice.
        </p>
        <p>
          Each set of prayer beads is carefully selected to ensure smoothness
          and comfort during use, making it easier for you to maintain focus
          during your prayers. The beads are made from durable materials,
          ensuring they stand the test of time.
        </p>
        <p>
          Explore our collection today and find the perfect Tasbee to aid in
          your prayers and spiritual journey.
        </p>
      </div>

      {/* Additional Product Features Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src="./img/tasbee4.jpg" // Replace with actual image URL
              alt="Tasbee"
              className="img-fluid rounded image-gap"
            />
          </div>
          <div className="col-md-6">
            <h4>Why Choose Our Tasbee (Prayer Beads)?</h4>
            <ul>
              <li>Crafted from high-quality materials for long-lasting use</li>
              <li>Perfect for daily prayers, dhikr, or meditation</li>
              <li>Wide range of designs, from traditional to modern styles</li>
              <li>Comfortable and smooth beads for ease of use</li>
              <li>
                Available in different materials: wood, glass, stone, and more
              </li>
              <li>Perfect gift for spiritual occasions or loved ones</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="container py-5">
        <div className="text-center">
          <h4>Customer Reviews</h4>
          <p>
            Here's what our customers have to say about our Tasbee (Prayer
            Beads):
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "I purchased a Tasbee as a gift for my father, and he
                  absolutely loves it! The quality is excellent, and it feels
                  great to use during prayers."
                </p>
                <h5 className="card-title">Fatima R.</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "The Tasbee I bought is beautifully crafted, smooth, and
                  comfortable. It helps me stay focused during my prayers.
                  Highly recommend!"
                </p>
                <h5 className="card-title">Ahmed S.</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "This Tasbee is exactly what I was looking for. The beads are
                  smooth and easy to use, making it perfect for my daily dhikr."
                </p>
                <h5 className="card-title">Mariam A.</h5>
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

export default Tasbee;
