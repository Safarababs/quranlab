import React from "react";
import PageHeader from "../../Pages Header/PageHeader"; // Adjust path if needed
import Contact from "../../Contact/Contact"; // Adjust path if needed
import Service from "../Home Page/LandingPage/Service/Service"; // Adjust path if needed

const IraniChadar = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Irani Chadar", active: true },
  ];

  return (
    <div>
      <PageHeader title="Irani Chadar" breadcrumbItems={breadcrumbItems} />
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Product
          </h6>
          <h2 className="mb-4">Irani Chadar Collection</h2>
        </div>
        <p>
          The Irani Chadar is a beautifully designed traditional garment widely
          known for its elegance and use in religious and cultural practices.
          This versatile piece of cloth is typically worn by women during
          prayer, religious gatherings, and various cultural events. The Irani
          Chadar has gained popularity for its graceful design and light,
          breathable fabric, offering both comfort and modesty.
        </p>
        <p>
          The garment features a loose and flowing structure, ensuring full
          coverage while remaining stylish and lightweight. Irani Chadar is also
          commonly used in outdoor religious events, where women seek to
          maintain their modesty while participating in communal prayers and
          celebrations.
        </p>
        <div className="text-center my-5">
          <img
            src="./img/irani-chadar1.jpg" // Replace with actual image URL
            alt="Irani Chadar"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/irani-chadar2.jpg" // Replace with actual image URL
            alt="Irani Chadar"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/irani-chadar3.jpg" // Replace with actual image URL
            alt="Irani Chadar"
            className="img-fluid rounded image-gap"
          />
        </div>

        <p>
          The Irani Chadar comes in various colors, patterns, and styles to
          cater to different preferences. It is made from soft, comfortable
          fabrics such as cotton or silk, making it suitable for wear in
          different weather conditions. Whether you're attending a religious
          ceremony or simply looking for a modest outfit for daily use, the
          Irani Chadar serves as a perfect choice for women seeking elegance and
          comfort.
        </p>
        <p>
          We offer a range of Irani Chadar garments that are carefully crafted
          with attention to detail. Each piece is designed to provide both
          coverage and comfort while ensuring the highest quality. Whether you
          are attending a religious gathering or looking for a beautiful
          addition to your wardrobe, the Irani Chadar is the ideal choice.
        </p>
      </div>

      {/* Additional Product Features Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src="./img/irani-chadar.jpg" // Replace with actual image URL
              alt="Irani Chadar"
              className="img-fluid rounded image-gap"
            />
          </div>
          <div className="col-md-6">
            <h4>Why Choose Our Irani Chadar?</h4>
            <ul>
              <li>Lightweight and breathable fabric for maximum comfort</li>
              <li>
                Wide range of colors and styles to suit various preferences
              </li>
              <li>Perfect for religious gatherings and cultural events</li>
              <li>Elegantly designed with attention to modesty and grace</li>
              <li>
                Crafted from high-quality materials for durability and softness
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="container py-5">
        <div className="text-center">
          <h4>Customer Reviews</h4>
          <p>Here's what our customers say about our Irani Chadar:</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "I bought the Irani Chadar for a family event, and it was
                  absolutely perfect. The fabric was soft, and it felt
                  comfortable all day."
                </p>
                <h5 className="card-title">Zahra F.</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "The Irani Chadar is elegant and breathable. I wore it during
                  a religious gathering, and I felt both modest and stylish."
                </p>
                <h5 className="card-title">Fatima A.</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  "Such a beautiful piece! I love how versatile the Irani Chadar
                  is. It’s perfect for any occasion, and the fabric feels
                  luxurious."
                </p>
                <h5 className="card-title">Layla M.</h5>
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

export default IraniChadar;
