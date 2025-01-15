import React from "react";
import PageHeader from "../../Pages Header/PageHeader"; // Adjust path if needed
import Contact from "../../Contact/Contact"; // Adjust path if needed
import Service from "../Home Page/LandingPage/Service/Service"; // Adjust path if needed

const Ring = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Silver Rings", active: true },
  ];

  return (
    <div>
      <PageHeader title="Silver Rings" breadcrumbItems={breadcrumbItems} />
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Product
          </h6>
          <h2 className="mb-4">Our Silver Rings Collection</h2>
        </div>
        <p>
          Our silver rings collection is a testament to elegance and
          craftsmanship. Each ring is meticulously designed using high-quality
          sterling silver, ensuring durability and beauty. Whether you're
          looking for a sophisticated accessory for daily wear or a special
          piece to mark an occasion, our range of silver rings offers something
          for every taste.
        </p>
        <p>
          Silver is a timeless metal known for its bright sheen and versatility.
          Our collection features rings in a variety of styles, from
          minimalistic and sleek to bold, statement pieces. Some are adorned
          with delicate gemstones like diamonds, sapphires, and emeralds, while
          others focus on the purity of the silver itself, making each piece
          unique.
        </p>
        <div className="text-center my-5">
          <img
            src="./img/ring1.jpg" // Replace with actual image URL
            alt="Silver Ring Collection"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/ring2.jpg" // Replace with actual image URL
            alt="Silver Ring Collection"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/ring3.jpg" // Replace with actual image URL
            alt="Silver Ring Collection"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/ring.jpg" // Replace with actual image URL
            alt="Silver Ring Collection"
            className="img-fluid rounded image-gap"
          />
        </div>

        <p>
          Silver rings are perfect for those who appreciate a balance of
          elegance and practicality. Whether you prefer a polished finish or a
          more rustic, matte look, our silver rings can be styled to suit any
          occasion. These rings are not just beautiful, but also durable and
          comfortable for everyday wear.
        </p>
        <p>
          From wedding bands to unique, one-of-a-kind pieces, our silver rings
          cater to all occasions. Whether you’re celebrating a milestone or just
          adding a special piece to your collection, each ring is a lasting
          symbol of quality and craftsmanship.
        </p>
        <p>
          Explore our collection today and discover the beauty of silver. Each
          ring is designed to stand the test of time, offering both elegance and
          practicality.
        </p>
      </div>

      {/* Additional Product Features Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src="./img/ring4.jpg" // Replace with actual image URL
              alt="Silver Ring"
              className="img-fluid rounded image-gap"
            />
          </div>
          <div className="col-md-6">
            <h4>Why Choose Our Silver Rings?</h4>
            <ul>
              <li>
                Crafted from high-quality sterling silver for lasting shine and
                strength
              </li>
              <li>Wide range of designs, from modern to classic styles</li>
              <li>Perfect for everyday wear or special occasions</li>
              <li>Gemstone options for added sparkle and elegance</li>
              <li>Comfortable and durable, designed for long-term use</li>
              <li>Customizable options available for special occasions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="container py-5">
        <div className="text-center">
          <h4>Customer Reviews</h4>
          <p>
            Here's what our customers have to say about our beautiful silver
            rings:
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "I purchased a silver ring as a gift, and the recipient
                  absolutely loved it. The design is elegant and the quality is
                  fantastic!"
                </p>
                <h5 className="card-title">Amina S.</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "This is the second silver ring I’ve bought, and I am
                  extremely satisfied with the craftsmanship. It’s simple yet
                  stunning!"
                </p>
                <h5 className="card-title">Omar T.</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "I wear this silver ring every day. It’s comfortable, stylish,
                  and goes with everything. Highly recommend!"
                </p>
                <h5 className="card-title">Sana P.</h5>
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

export default Ring;
