import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  // Slick settings for the carousel
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonials
          </h6>
          <h1 className="mb-5">What Our Students Say!</h1>
        </div>
        <Slider {...settings}>
          {/* Testimonial 1 */}
          <div className="testimonial-item text-center">
            <div
              className="testimonial-icon mb-3"
              style={{
                fontSize: "50px",
                color: "#00796B", // Use a color that matches the theme
              }}
            >
              <i className="fas fa-quote-left"></i>
            </div>
            <h5 className="mb-0">Student Name</h5>
            <p className="text-muted">Quran Teacher</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                "The online Quran teaching with Tajweed, translation, and
                Tafseer has truly enhanced my understanding of the Quran. I am
                grateful for the learning opportunities provided by this
                platform."
              </p>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="testimonial-item text-center">
            <div
              className="testimonial-icon mb-3"
              style={{
                fontSize: "50px",
                color: "#3F51B5", // Another color to match the variety
              }}
            >
              <i className="fas fa-quote-left"></i>
            </div>
            <h5 className="mb-0">Student Name</h5>
            <p className="text-muted">Shariah Scholar</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                "I participated in the Fasting and Prayers program for my late
                relatives. The sincerity and devotion of the scholars conducting
                these prayers are beyond words. Thank you for this valuable
                service."
              </p>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="testimonial-item text-center">
            <div
              className="testimonial-icon mb-3"
              style={{
                fontSize: "50px",
                color: "#FF5722", // Different color for visual variety
              }}
            >
              <i className="fas fa-quote-left"></i>
            </div>
            <h5 className="mb-0">Student Name</h5>
            <p className="text-muted">Student of Quran</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                "The Quran studio is an amazing initiative. The way Quran
                recitations, translations, and explanations are being recorded
                and made available in videos is a great source of knowledge for
                me."
              </p>
            </div>
          </div>
          {/* Testimonial 4 */}
          <div className="testimonial-item text-center">
            <div
              className="testimonial-icon mb-3"
              style={{
                fontSize: "50px",
                color: "#2196F3", // Another matching color
              }}
            >
              <i className="fas fa-quote-left"></i>
            </div>
            <h5 className="mb-0">Student Name</h5>
            <p className="text-muted">Islamic Scholar</p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">
                "I am grateful for the assistance in fulfilling religious duties
                like Hajj, Umrah, and visiting the shrines of our Imams. The
                spiritual guidance provided by the scholars has been a true
                blessing."
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
