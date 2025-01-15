import React from "react";
import PageHeader from "../../Pages Header/PageHeader"; // Adjust path if needed
import Contact from "../../Contact/Contact"; // Adjust path if needed
import Service from "../Home Page/LandingPage/Service/Service"; // Adjust path if needed

const JaiNamaz = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Jai Namaz (Prayer Rug)", active: true },
  ];

  return (
    <div>
      <PageHeader
        title="Jai Namaz (Prayer Rug)"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Product
          </h6>
          <h2 className="mb-4">Our Jai Namaz (Prayer Rug) Collection</h2>
        </div>
        <p>
          Our Jai Namaz (prayer rugs) are crafted with utmost care and attention
          to detail. These prayer rugs are designed to provide the utmost
          comfort during your prayers, with soft, durable fabrics that offer the
          perfect support for your knees and body while you perform your Salah.
          The intricate designs and patterns on the rugs reflect the beauty of
          Islamic art, making each piece not just functional but also a work of
          art.
        </p>
        <p>
          Available in a wide range of colors, sizes, and designs, our Jai Namaz
          collection caters to diverse tastes. Whether you're looking for a
          simple, elegant design or something more vibrant and decorative, our
          prayer rugs provide both comfort and beauty for your spiritual
          practice.
        </p>
        <div className="text-center my-5">
          <img
            src="./img/jai1.jpg" // Replace with actual image URL
            alt="Jai Namaz Collection"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/jai2.jpg" // Replace with actual image URL
            alt="Jai Namaz Collection"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/jai3.jpg" // Replace with actual image URL
            alt="Jai Namaz Collection"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/jai4.jpg" // Replace with actual image URL
            alt="Jai Namaz Collection"
            className="img-fluid rounded image-gap"
          />
        </div>

        <p>
          The Jai Namaz rugs are designed with quality materials that ensure
          durability while providing comfort during your prayers. The
          high-density fabric used in these prayer rugs is soft to the touch and
          easy to maintain. The vibrant colors and intricate patterns enhance
          the aesthetic appeal of your prayer space.
        </p>
        <p>
          Whether you’re at home, on the go, or at the mosque, our Jai Namaz
          rugs are portable, lightweight, and easy to carry, ensuring a peaceful
          prayer experience wherever you are.
        </p>
        <p>
          We also offer custom designs for special occasions, making them a
          perfect gift for family, friends, or a meaningful addition to your
          personal prayer space.
        </p>
      </div>

      {/* Additional Product Features Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src="./img/jainamaz.jpg" // Replace with actual image URL
              alt="Jai Namaz"
              className="img-fluid rounded image-gap"
            />
          </div>
          <div className="col-md-6">
            <h4>Why Choose Our Jai Namaz (Prayer Rugs)?</h4>
            <ul>
              <li>Comfortable fabric designed for long prayer sessions</li>
              <li>Available in a variety of colors and patterns</li>
              <li>Portable and lightweight, perfect for home or travel</li>
              <li>Durable and easy to clean, ensuring long-lasting use</li>
              <li>Elegant designs that complement your prayer space</li>
              <li>
                Ideal for gifting during religious occasions or celebrations
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="container py-5">
        <div className="text-center">
          <h4>Customer Reviews</h4>
          <p>
            Here's what our customers have to say about our Jai Namaz (Prayer
            Rugs):
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "This prayer rug is incredibly comfortable and soft. The
                  material is great, and it looks amazing in my prayer room."
                </p>
                <h5 className="card-title">Fatima S.</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "I’ve been using this Jai Namaz for a few weeks, and I’m
                  really impressed by its durability and comfort."
                </p>
                <h5 className="card-title">Ali M.</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "The quality of the rug exceeded my expectations. It’s a
                  beautiful addition to my prayer space."
                </p>
                <h5 className="card-title">Samira N.</h5>
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

export default JaiNamaz;
