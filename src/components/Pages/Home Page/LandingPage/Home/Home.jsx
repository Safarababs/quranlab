import React from "react";

const Home = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <div className="position-relative">
        <img
          className="img-fluid"
          src="img/carousel-2.jpg"
          alt="Quran Learning"
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{ background: "rgba(24, 29, 56, .7)" }}
        >
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-sm-10 col-lg-8">
                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                  Online Quran Classes
                </h5>
                <h1 className="display-3 text-white animated slideInDown">
                  Learn Quran with Tajweed, Tafseer & More
                </h1>
                <p className="fs-5 text-white mb-4 pb-2">
                  Join our comprehensive Quran courses, including Tajweed,
                  Tafseer, and memorization. Learn at your own pace with expert
                  teachers.
                </p>
                <a
                  href="/courses"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Explore Courses
                </a>
                <a
                  href="/contact"
                  className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                >
                  Start Learning
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .position-absolute {
            position: relative !important;
            height: auto !important;
            background: rgba(24, 29, 56, 0.9) !important;
            text-align: center !important;
          }
          .container {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          .display-3 {
            font-size: 2rem !important;
          }
          .btn {
            width: 100% !important;
            margin-bottom: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
