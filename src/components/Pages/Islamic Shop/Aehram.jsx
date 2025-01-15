import React from "react";
import PageHeader from "../../Pages Header/PageHeader"; // Adjust path if needed
import Contact from "../../Contact/Contact"; // Adjust path if needed
import Service from "../Home Page/LandingPage/Service/Service"; // Adjust path if needed

const Aehram = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Aehram", active: true },
  ];

  return (
    <div>
      <PageHeader
        title="Aehram (Pilgrimage Garment)"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Product
          </h6>
          <h2 className="mb-4">Aehram (Pilgrimage Garment) Collection</h2>
        </div>
        <p>
          The Aehram (Pilgrimage Garment) is an essential part of the Islamic
          pilgrimage (Hajj and Umrah). This garment is worn by Muslim men and
          women during their pilgrimage to the holy cities of Mecca and Medina.
          The Aehram holds deep spiritual significance, symbolizing purity,
          humility, and unity in the worship of Allah.
        </p>
        <p>
          The garment is typically made from simple, white cloth that is free of
          any adornments or designs. This simplicity reflects the pilgrim’s
          detachment from worldly concerns and the readiness to stand before
          Allah in a state of purity and devotion. It is worn as part of the
          rites of Hajj and Umrah, marking the beginning of the sacred journey.
        </p>
        <div className="text-center my-5">
          <img
            src="./img/aehram1.jpg" // Replace with actual image URL
            alt="Aehram Pilgrimage Garment"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/aehram2.jpg" // Replace with actual image URL
            alt="Aehram Pilgrimage Garment"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/aehram3.jpg" // Replace with actual image URL
            alt="Aehram Pilgrimage Garment"
            className="img-fluid rounded image-gap"
          />
        </div>

        <p>
          The Aehram is worn during specific rituals of Hajj and Umrah, such as
          Tawaf (the act of walking around the Kaaba), and Sa'i (the act of
          walking between the hills of Safa and Marwah). It is a symbol of the
          pilgrim’s dedication to the spiritual journey, demonstrating their
          commitment to self-purification and submission to Allah.
        </p>
        <p>
          At our store, we offer high-quality Aehram garments made from soft,
          breathable fabrics that are comfortable to wear throughout the
          pilgrimage. Our Aehrams are designed to meet the specific requirements
          for both Hajj and Umrah, ensuring that your pilgrimage experience is
          comfortable and spiritually enriching.
        </p>
        <p>
          Whether you are preparing for the sacred pilgrimage or looking for a
          gift for someone going to Hajj or Umrah, our Aehram collection offers
          the perfect solution. Each garment is carefully crafted to ensure
          purity, comfort, and ease of use, helping you focus on the spiritual
          significance of your journey.
        </p>
      </div>

      {/* Additional Product Features Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src="./img/aehram.jpg" // Replace with actual image URL
              alt="Aehram Pilgrimage Garment"
              className="img-fluid rounded image-gap"
            />
          </div>
          <div className="col-md-6">
            <h4>Why Choose Our Aehram Garment?</h4>
            <ul>
              <li>Made from high-quality, breathable fabric for comfort</li>
              <li>Designed to meet the requirements for Hajj and Umrah</li>
              <li>Simple and elegant, symbolizing purity and devotion</li>
              <li>
                Perfect for both men and women, with sizes available for all
              </li>
              <li>Ensures ease of movement during the pilgrimage rituals</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="container py-5">
        <div className="text-center">
          <h4>Customer Reviews</h4>
          <p>Here's what our customers say about our Aehram garments:</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "The Aehram was incredibly comfortable during my pilgrimage.
                  The fabric was soft and breathable, making my journey much
                  easier."
                </p>
                <h5 className="card-title">Ahmed S.</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "I wore this Aehram during Umrah, and it was perfect. It felt
                  light yet durable, and I didn’t have any issues during the
                  rituals."
                </p>
                <h5 className="card-title">Mariam R.</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "This Aehram is of excellent quality. It fit perfectly, and
                  the fabric kept me cool even in the heat of Mecca. Highly
                  recommend!"
                </p>
                <h5 className="card-title">Suleiman K.</h5>
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

export default Aehram;
