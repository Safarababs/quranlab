import React from "react";

const Service = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {/* Skilled Instructors */}
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-chalkboard-teacher text-primary mb-4"></i>
                <h5 className="mb-3">Experienced Instructors</h5>
                <p>
                  Learn from highly qualified instructors who are experts in
                  Quranic studies, Tajweed, Tafseer, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Online Classes */}
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-laptop text-primary mb-4"></i>
                <h5 className="mb-3">Flexible Online Classes</h5>
                <p>
                  Join interactive online classes from the comfort of your home.
                  Access lessons on Quranic recitation, translation, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Home Projects */}
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-home text-primary mb-4"></i>
                <h5 className="mb-3">Customized Quran Projects</h5>
                <p>
                  We offer personalized Quranic study projects, including
                  memorization and understanding, to help you achieve your
                  spiritual goals.
                </p>
              </div>
            </div>
          </div>

          {/* Book Library */}
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item text-center pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-book text-primary mb-4"></i>
                <h5 className="mb-3">Quranic Library</h5>
                <p>
                  Access a wide range of Quranic texts, Tafseer books, and
                  learning resources to enhance your knowledge of the Quran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
