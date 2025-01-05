import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import { Link } from "react-router-dom";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const RecordingService = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Recording Services", active: true },
  ];

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="Recording Services"
        breadcrumbItems={breadcrumbItems}
      />

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  className="img-fluid rounded shadow"
                  src="./img/recording.jpg"
                  alt="Recording Services"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="section-title bg-white text-primary pe-3">
                About Our Recording Services
              </h6>
              <h1 className="mb-4">Spiritual Audio & Video Recordings</h1>
              <p>
                Our recording services provide a gateway to understanding and
                experiencing Islamic teachings through high-quality audio and
                video resources. These recordings are designed to inspire,
                educate, and connect individuals with the beauty of faith.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Professionally recorded by experts in the field
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Suitable for individual and group use
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Available with translations and commentary
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary py-3 px-5 mt-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title bg-white text-primary pe-3">
                About Our Recording Services
              </h6>
              <h1 className="mb-4"> Mafatih al-Jinan Recording</h1>
              <p>
                <strong>Mafatih al-Jinan,</strong> a treasure trove of
                supplications, ziyarat, and prayers compiled by Sheikh Abbas
                Qomi, is now available in high-quality audio recordings. These
                recordings are carefully produced to ensure clarity and
                spiritual impact, helping listeners connect with the sacred
                texts effortlessly.
              </p>
              <p>
                Explore the comprehensive collection of Duas for every occasion,
                including the famous Dua Kumayl, Ziyarat Ashura, and more. These
                recordings are ideal for personal meditation, communal
                gatherings, and learning proper pronunciations. Available in
                multiple recitation styles and languages, including Arabic with
                translations in Urdu and English, to cater to a diverse
                audience.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Professionally recorded by experts in the field
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Suitable for individual and group use
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Available with translations and commentary
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary py-3 px-5 mt-3">
                Contact Us
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  className="img-fluid rounded shadow"
                  src="img/recording1.jpg"
                  alt="Recording Services"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  className="img-fluid rounded shadow"
                  src="img/recording2.jpg"
                  alt="Recording Services"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="section-title bg-white text-primary pe-3">
                About Our Recording Services
              </h6>
              <h1 className="mb-4"> Nahjul Balagha Recording</h1>
              <p>
                Delve into the eloquence of Imam Ali (A.S) with Nahjul Balagha
                audio recordings. These recordings bring to life the sermons,
                letters, and sayings of the Commander of the Faithful, allowing
                listeners to gain wisdom and inspiration from his words.
              </p>
              <p>
                Each recording is meticulously produced with clear narration and
                soothing background effects to enhance understanding and
                retention. Whether you're studying the text academically or
                seeking moral guidance, our Nahjul Balagha recordings provide a
                valuable resource. Available with commentaries in multiple
                languages for a deeper understanding of Imam Ali's teachings.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Professionally recorded by experts in the field
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Suitable for individual and group use
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Available with translations and commentary
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary py-3 px-5 mt-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title bg-white text-primary pe-3">
                About Our Recording Services
              </h6>
              <h1 className="mb-4">Quran Recording (Arabic, Urdu, English)</h1>
              <p>
                Experience the beauty of the Quran with our multilingual
                recordings. Perfect for learners, reciters, and anyone seeking
                spiritual enrichment, these recordings include both the
                recitation and translation of the Quran in Arabic, Urdu, and
                English.
              </p>
              <p>
                Our Quran recordings are designed to help listeners of all ages
                and backgrounds understand and reflect on the words of Allah.
                The recordings feature renowned Qaris (reciters) and include
                translations by trusted scholars. These resources are
                particularly helpful for students of the Quran, educators, and
                those who wish to memorize or recite with proper Tajweed.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Professionally recorded by experts in the field
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Suitable for individual and group use
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Available with translations and commentary
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary py-3 px-5 mt-3">
                Contact Us
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  className="img-fluid rounded shadow"
                  src="img/recording3.jpg"
                  alt="Recording Services"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  className="img-fluid rounded shadow"
                  src="img/recording4.jpg"
                  alt="Sahifa Sajjadiya Recording"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="section-title bg-white text-primary pe-3">
                About Our Recording Services
              </h6>
              <h1 className="mb-4">Sahifa Sajjadiya Recording</h1>
              <p>
                Discover the profound beauty of the **Sahifa Sajjadiya**, a
                collection of prayers and supplications from the 4th Imam, Imam
                Ali Zayn al-Abidin (A.S.). These powerful prayers provide
                spiritual guidance, reflection, and connection with the Divine.
                Our Sahifa Sajjadiya recordings are available in high-quality
                audio to bring these sacred words to life.
              </p>
              <p>
                These recordings feature a selection of prayers from the
                **Sahifa Sajjadiya**, which are ideal for personal meditation,
                seeking Allah's mercy, and elevating one’s understanding of
                spirituality. Our recordings are carefully produced with clear
                recitation, making it accessible for all listeners, whether for
                personal recitation or educational purposes. Available in
                multiple languages, including Arabic with translations in Urdu
                and English, to ensure that listeners of different backgrounds
                can benefit from the supplications.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Professionally recorded by experienced reciters
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Suitable for individual reflection or group sessions
                </li>
                <li>
                  <i className="fa fa-check text-primary me-2"></i>
                  Available with translations and detailed commentary
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary py-3 px-5 mt-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <Contact />
      <PopularCourses />
    </div>
  );
};

export default RecordingService;
