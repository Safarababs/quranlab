import React from "react";

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: "400px" }}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="img/about.jpg"
                alt="Quran Learning"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 className="mb-4">Welcome to Quran Lab Online</h1>
            <p className="mb-4">
              Quran Lab Online offers a unique and interactive learning
              experience for students of all ages. We provide quality education
              in Quranic studies, including memorization (Hifz), Tajweed,
              Tafseer, and more, taught by qualified and experienced
              instructors.
            </p>
            <p className="mb-4">
              Our online platform offers flexible learning, allowing students to
              learn at their own pace from the comfort of their homes. Whether
              you are a beginner or seeking advanced studies, our courses are
              tailored to meet your needs and help you achieve your spiritual
              goals.
            </p>
            <div className="row gy-2 gx-4 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Qualified and Experienced Instructors
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Online Quran Classes for All Ages
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Flexible Learning Schedule
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Internationally Recognized Certification
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Personalized Quranic Study Plans
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Focus on Tajweed and Tafseer
                </p>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="/about">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
