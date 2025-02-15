import React from "react";
import PageHeader from "../../Pages Header/PageHeader"; // Adjust path if needed
import Contact from "../../Contact/Contact"; // Adjust path if needed
import Service from "../Home Page/LandingPage/Service/Service"; // Adjust path if needed

const SajdaGah = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Turbat ", active: true },
  ];

  return (
    <div>
      <PageHeader title="Turbat " breadcrumbItems={breadcrumbItems} />
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Product
          </h6>
          <h2 className="mb-4">Our Turbat (Prayer Mat) Collection</h2>
        </div>
        <p>
          Our Turbat (prayer mats) are crafted with comfort and devotion in
          mind. These mats are designed to provide a soft, clean, and serene
          space for your prayers. Made from high-quality fabrics and materials,
          they offer comfort for long prayers while maintaining the traditional
          beauty of Islamic prayer mats.
        </p>
        <p>
          Available in a variety of colors, sizes, and designs, our Turbat
          collection is perfect for daily prayers, special occasions, and gifts.
          Whether you're looking for a simple, minimalist design or an
          intricately embroidered mat, we offer a selection that suits all
          preferences.
        </p>
        <div className="text-center my-5">
          <img
            src="./img/sajda1.jpg" // Replace with actual image URL
            alt="Turbat Collection"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/sajda2.jpg" // Replace with actual image URL
            alt="Turbat Collection"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/sajda3.jpg" // Replace with actual image URL
            alt="Turbat Collection"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/sajda4.jpg" // Replace with actual image URL
            alt="Turbat Collection"
            className="img-fluid rounded image-gap"
          />
        </div>

        <p>
          Our prayer mats are not only functional but also designed to be
          aesthetically pleasing. With soft and comfortable textures, they help
          you focus during your prayers and create a peaceful environment for
          your spiritual practice.
        </p>
        <p>
          Each mat is meticulously crafted with attention to detail, from the
          stitching to the choice of fabric, ensuring you receive a high-quality
          product that will stand the test of time.
        </p>
        <p>
          Whether you are at home, traveling, or praying at the mosque, our
          Turbat mats provide a comfortable and clean space to connect with your
          faith.
        </p>
      </div>

      {/* Additional Product Features Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src="./img/sajdagah.jpg" // Replace with actual image URL
              alt="Turbat"
              className="img-fluid rounded image-gap"
            />
          </div>
          <div className="col-md-6">
            <h4>Why Choose Our Turbat (Prayer Mats)?</h4>
            <ul>
              <li>Soft and comfortable fabric for long prayer sessions</li>
              <li>
                Available in a variety of sizes and colors to suit different
                needs
              </li>
              <li>
                Intricate and elegant designs that enhance your prayer space
              </li>
              <li>Portable and lightweight, ideal for home or travel use</li>
              <li>Durable and easy to clean, with high-quality stitching</li>
              <li>Perfect gift for friends and family</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="container py-5">
        <div className="text-center">
          <h4>Customer Reviews</h4>
          <p>
            Here's what our customers have to say about our Turbat (Prayer
            Mats):
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "The prayer mat I bought is so comfortable and soft. It has
                  made my prayers much more enjoyable, and the design is
                  beautiful."
                </p>
                <h5 className="card-title">Ayesha K.</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "I love the texture of the mat. It's perfect for daily use and
                  even feels luxurious during longer prayers. Highly recommend!"
                </p>
                <h5 className="card-title">Omar H.</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "This prayer mat is exactly what I needed. The quality is
                  excellent, and the color is just as shown in the pictures."
                </p>
                <h5 className="card-title">Zahra L.</h5>
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

export default SajdaGah;
