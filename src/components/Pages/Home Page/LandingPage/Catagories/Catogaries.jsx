import React from "react";

const Categories = () => {
  return (
    <div className="container-xxl py-5 category">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Categories
          </h6>
          <h1 className="mb-5">Our Quranic Course Categories</h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-7 col-md-6">
            <div className="row g-3">
              <div
                className="col-lg-12 col-md-12 wow zoomIn"
                data-wow-delay="0.1s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href="/quran-courses"
                >
                  <img
                    className="img-fluid"
                    src="img/cat-1.jpg"
                    alt="Quran Memorization courses"
                  />
                  <div
                    className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: "1px" }}
                  >
                    <h5 className="m-0">Quran Memorization</h5>
                    <small className="text-primary">20 Courses</small>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.3s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href="/tafsir-courses"
                >
                  <img
                    className="img-fluid"
                    src="img/cat-2.jpg"
                    alt="Tafsir courses"
                  />
                  <div
                    className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: "1px" }}
                  >
                    <h5 className="m-0">Tafsir Studies</h5>
                    <small className="text-primary">30 Courses</small>
                  </div>
                </a>
              </div>
              <div
                className="col-lg-6 col-md-12 wow zoomIn"
                data-wow-delay="0.5s"
              >
                <a
                  className="position-relative d-block overflow-hidden"
                  href="/quranic-arabic-courses"
                >
                  <img
                    className="img-fluid"
                    src="img/cat-3.jpg"
                    alt="Quranic Arabic courses"
                  />
                  <div
                    className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: "1px" }}
                  >
                    <h5 className="m-0">Quranic Arabic</h5>
                    <small className="text-primary">25 Courses</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 wow zoomIn"
            data-wow-delay="0.7s"
            style={{ minHeight: "350px" }}
          >
            <a
              className="position-relative d-block h-100 overflow-hidden"
              href="/online-islamic-courses"
            >
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="img/cat-4.jpg"
                alt="Online Islamic Studies courses"
                style={{ objectFit: "cover" }}
              />
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: "1px" }}
              >
                <h5 className="m-0">Islamic Studies</h5>
                <small className="text-primary">40 Courses</small>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
