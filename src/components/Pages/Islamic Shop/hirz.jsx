import React from "react";
import PageHeader from "../../Pages Header/PageHeader"; // Adjust path if needed
import Contact from "../../Contact/Contact"; // Adjust path if needed
import Service from "../Home Page/LandingPage/Service/Service"; // Adjust path if needed

const HirzEJawad = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Hirz-e-Jawad", active: true },
  ];

  return (
    <div>
      <PageHeader title="Hirz-e-Jawad" breadcrumbItems={breadcrumbItems} />
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Product
          </h6>
          <h2 className="mb-4">Our Hirz-e-Jawad Collection</h2>
        </div>
        <p>
          Hirz-e-Jawad is a blessed and powerful amulet often used by
          individuals seeking divine protection and spiritual blessings. It is
          highly regarded in Islamic tradition for its connection to the
          teachings and practices of Imam Jawad (AS), offering a shield of
          protection against negative energies, misfortune, and harm.
        </p>
        <p>
          The amulet is believed to carry the spiritual essence of Imam Jawad
          (AS), offering its wearer peace, protection, and the alleviation of
          distress. Wearing Hirz-e-Jawad is considered to bring Allah's mercy
          and blessings into one's life, safeguarding them from evil, and
          ensuring success and prosperity.
        </p>
        <p>
          The Hirz-e-Jawad amulet is typically inscribed with specific verses
          from the Quran and prayers, each carefully chosen to invoke the
          protection of the Almighty and to bring peace to the wearer. Many
          people use it as a necklace, pendant, or even as part of their daily
          prayer routine to seek divine protection and blessings.
        </p>
        <p>
          This powerful amulet is not only used for protection but also for
          spiritual empowerment, helping the wearer to overcome challenges and
          achieve personal growth. The Hirz-e-Jawad serves as a reminder of the
          spiritual strength of Imam Jawad (AS), and is cherished by those
          seeking closer connection with the divine.
        </p>
        <p>
          We offer a carefully crafted collection of Hirz-e-Jawad amulets, made
          with high-quality materials and designed to preserve the integrity of
          the inscriptions. Each piece is crafted with devotion and care,
          ensuring the power and blessing of the amulet are preserved for the
          benefit of its wearer.
        </p>

        {/* Authenticity and Validation Section */}
        <div className="container py-5">
          <h4>Authenticity of the Amulet</h4>
          <p>
            The validation of the amulet and the authenticity of its related
            tradition have been ensured by the full mention of the chain of
            authority. The late Sayyid bin Tavoos, a renowned scholar, has
            meticulously listed his chain of authority extending up to Sheikh
            Saduq. This comprehensive chain plays a critical role in confirming
            the authenticity and credibility of the amulet’s tradition.
          </p>
          <p>
            One of the key strengths of this hadith is the method of
            transmission (taḥammul) used in the tradition. A notable point
            within the chain of narration is the repeated use of the terms
            ḥaddathanā, ḥaddathanī, and akhbaranī, which are consistently used
            to indicate that the hadith was heard directly from the narrator.
            These terms highlight that hearing (as opposed to reading or
            writing) was considered the most valid method for transmitting
            hadiths, signifying the reliability of the narration.
          </p>
          <p>
            In relation to the inclusion of this amulet in the tradition, a
            notable objection was raised by Ali ibn Isa Erbeli, a prominent
            scholar of the 7th century. His objection revolved around the
            legitimacy and the context of the amulet's inclusion in the hadith.
            This was an important scholarly challenge at the time, and it
            warranted a detailed response.
          </p>
          <p>
            The esteemed scholar Allamah Majlesi responded to this objection by
            providing clarifications and justifications. His response helped to
            maintain the integrity and value of the amulet’s inclusion in the
            tradition. Allamah Majlesi’s reply emphasized the spiritual and
            doctrinal importance of the amulet, defending its place in the
            authentic chain of narration.
          </p>
        </div>

        {/* Product Images */}
        <div className="text-center my-5">
          <img
            src="./img/hirz1.jpg" // Replace with actual image URL
            alt="Hirz-e-Jawad Amulet"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/hirz2.jpg" // Replace with actual image URL
            alt="Hirz-e-Jawad Amulet"
            className="img-fluid rounded image-gap"
          />
          <img
            src="./img/hirz3.jpg" // Replace with actual image URL
            alt="Hirz-e-Jawad Amulet"
            className="img-fluid rounded image-gap"
          />
        </div>

        {/* Additional Product Features Section */}
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <img
                src="./img/hirz.jpg" // Replace with actual image URL
                alt="Hirz-e-Jawad Amulet"
                className="img-fluid rounded image-gap"
              />
            </div>
            <div className="col-md-6">
              <h4>Why Choose Our Hirz-e-Jawad Amulet?</h4>
              <ul>
                <li>
                  Crafted with high-quality materials to ensure durability
                </li>
                <li>
                  Inscribed with verses from the Quran for divine protection
                </li>
                <li>
                  Designed to bring peace, success, and spiritual strength
                </li>
                <li>Perfect for daily wear or as part of your prayer ritual</li>
                <li>Ideal gift for loved ones, offering spiritual blessings</li>
                <li>Handcrafted with care and attention to detail</li>
                <li>Features traditional and authentic Islamic inscriptions</li>
                <li>Helps protect against negative energy and misfortune</li>
                <li>Made to last, ensuring long-term benefits and blessings</li>
                <li>Lightweight and comfortable for everyday use</li>
                <li>Comes with a certificate of authenticity</li>
                <li>Perfect for use during special religious occasions</li>
                <li>
                  Acts as a constant reminder of divine protection and blessings
                </li>
                <li>
                  Available in various designs to match your personal style
                </li>
                <li>
                  Enhances spiritual growth and connection with the divine
                </li>
                <li>Customizable to fit individual preferences and needs</li>
                <li>Supports the practice of regular prayer and meditation</li>
                <li>Designed to be discreet, yet powerful in its impact</li>
                <li>
                  Ensures a deeper connection to the teachings of Imam Jawad
                  (AS)
                </li>
                <li>
                  Offers protection and spiritual guidance for challenging times
                </li>
                <li>Perfect for use during travel for added peace of mind</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="container py-5">
          <div className="text-center">
            <h4>Customer Reviews</h4>
            <p>
              Here’s what our customers have to say about our Hirz-e-Jawad
              amulet:
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    "The Hirz-e-Jawad amulet has been a true blessing in my
                    life. I feel more at peace, and I know that I am under
                    divine protection."
                  </p>
                  <h5 className="card-title">Fatima Z.</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    "I wear my Hirz-e-Jawad daily, and I have noticed a sense of
                    calm and protection. I highly recommend it to others seeking
                    spiritual strength."
                  </p>
                  <h5 className="card-title">Ali H.</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    "The quality of the amulet is excellent. I feel spiritually
                    empowered and protected. I am grateful for this blessing."
                  </p>
                  <h5 className="card-title">Zainab K.</h5>
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
    </div>
  );
};

export default HirzEJawad;
