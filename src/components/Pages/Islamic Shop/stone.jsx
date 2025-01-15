import React from "react";
import PageHeader from "../../Pages Header/PageHeader"; // Adjust path if needed
import Contact from "../../Contact/Contact"; // Adjust path if needed
import Service from "../Home Page/LandingPage/Service/Service"; // Adjust path if needed

const HealingStones = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Healing Stones", active: true },
  ];

  return (
    <div>
      <PageHeader
        title="Healing Stones Collection"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container py-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Product
          </h6>
          <h2 className="mb-4">Healing Stones Collection</h2>
        </div>
        <p>
          Healing stones have been used for centuries in various cultures for
          their beneficial spiritual, emotional, and physical properties. These
          stones are known to help balance energy, heal the body, and bring
          peace of mind. Some of the most popular stones used for healing
          purposes include Aqeeq (Agate), Feroza (Turquoise), and many others,
          each carrying unique properties that can aid in different aspects of
          life.
        </p>

        <h4>Types of Healing Stones</h4>
        <p>
          Here are some of the most popular and powerful healing stones we
          offer:
        </p>

        <h5>1. Aqeeq (Agate)</h5>
        <p>
          Aqeeq, or Agate, is a beautiful and protective stone known for its
          ability to bring balance and healing. It enhances strength, courage,
          and emotional stability. Aqeeq stones come in various colors, each
          carrying distinct properties. It is also believed to be beneficial for
          mental clarity and removing negative energies.
        </p>

        <h5>2. Feroza (Turquoise)</h5>
        <p>
          Feroza, or Turquoise, is one of the oldest known healing stones,
          revered for its vibrant blue color. It is believed to offer strong
          protection and bring peace and tranquility to the wearer. Turquoise is
          associated with physical healing, as well as promoting communication
          and spiritual growth.
        </p>

        <h5>3. Amethyst</h5>
        <p>
          Amethyst is a powerful and calming stone, known for its ability to
          reduce stress, anxiety, and emotional pain. It is often used for
          meditation and spiritual awareness, helping the wearer connect with
          higher consciousness. Amethyst also promotes physical healing,
          particularly for ailments related to the nervous system.
        </p>

        <h5>4. Rose Quartz</h5>
        <p>
          Rose Quartz is the stone of love, compassion, and emotional healing.
          It is believed to open the heart chakra and promote unconditional
          love, both for oneself and others. Rose Quartz is known to encourage
          self-care and heal emotional wounds, making it a great stone for
          relationships and peace of mind.
        </p>

        <h5>5. Black Onyx</h5>
        <p>
          Black Onyx is a protective and grounding stone, often used to help
          with stress and anxiety. It is believed to provide strength and
          stamina, especially during difficult times. Black Onyx is known to
          absorb and transform negative energy, making it a powerful tool for
          emotional balance.
        </p>

        <h5>6. Citrine</h5>
        <p>
          Citrine is a stone of abundance and manifestation, believed to attract
          prosperity and success. It also helps boost confidence and creativity.
          Citrine is known for its ability to bring light into one's life,
          dispelling negative thoughts and promoting positivity and happiness.
        </p>

        <h5>7. Lapis Lazuli</h5>
        <p>
          Lapis Lazuli is a deep blue stone associated with wisdom, truth, and
          enlightenment. It is often used for spiritual growth, helping to
          enhance intuition and communication. Lapis Lazuli is also believed to
          help alleviate stress and bring emotional balance.
        </p>

        <h5>8. Carnelian</h5>
        <p>
          Carnelian is a fiery stone known for its energy-boosting properties.
          It is believed to enhance motivation, creativity, and passion.
          Carnelian is also thought to improve physical strength and vitality,
          making it a great stone for overcoming fear and building confidence.
        </p>

        <h5>9. Jade</h5>
        <p>
          Jade is considered a stone of luck and prosperity. It is believed to
          bring harmony, balance, and healing to the body and mind. Jade is
          known for its ability to improve relationships and bring financial
          success, making it a highly sought-after stone in many cultures.
        </p>

        <h5>10. Tiger's Eye</h5>
        <p>
          Tiger's Eye is a stone of courage, strength, and personal power. It is
          believed to promote clarity of thought and enhance decision-making.
          Tiger's Eye is also known to provide protection and balance,
          particularly when dealing with difficult situations or challenges.
        </p>

        <div className="text-center my-5">
          <img
            src="./img/healingstones.jpg" // Replace with actual image URL
            alt="Healing Stones"
            className="img-fluid rounded image-gap"
          />
        </div>

        <h4>Why Choose Our Healing Stones?</h4>
        <ul>
          <li>High-quality stones sourced from trusted suppliers</li>
          <li>Wide variety of colors and types for different healing needs</li>
          <li>
            Durable and long-lasting, perfect for jewelry and spiritual use
          </li>
          <li>
            Symbolize protection, strength, healing, and emotional balance
          </li>
          <li>Enhance spiritual growth and well-being</li>
        </ul>

        {/* Customer Reviews Section */}
        <div className="container py-5">
          <div className="text-center">
            <h4>Customer Reviews</h4>
            <p>Here's what our customers say about our healing stones:</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    "The Feroza ring I purchased has brought me a sense of peace
                    and tranquility. I feel more spiritually connected."
                  </p>
                  <h5 className="card-title">Fatima S.</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    "I love my Amethyst necklace! It has helped me with my
                    anxiety and has a calming energy that I feel every day."
                  </p>
                  <h5 className="card-title">Imran K.</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    "The Rose Quartz stone has truly opened my heart. I’ve never
                    felt more connected to love and compassion."
                  </p>
                  <h5 className="card-title">Sana F.</h5>
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

export default HealingStones;
