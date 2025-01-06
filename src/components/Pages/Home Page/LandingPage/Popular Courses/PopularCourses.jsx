import React from "react";

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      imgSrc: "img/cat-1.jpg", // Replace with actual image source
      price: "Free", // Price can be updated according to your pricing structure
      rating: 5,
      courseName: "Quran Reading (Nazra Quran)",
      instructor: "Ustadh Ali",
      duration: "Flexible",
      students: "150 Students",
      link: "/quran-reading", // Link for 'Read More'
    },
    {
      id: 2,
      imgSrc: "img/cat-2.jpg", // Replace with actual image source
      price: "Free", // Update price as needed
      rating: 5,
      courseName: "Tajweed (Quranic Pronunciation)",
      instructor: "Ustadh Sarah",
      duration: "Flexible",
      students: "120 Students",
      link: "/tajweed", // Link for 'Read More'
    },
    {
      id: 3,
      imgSrc: "img/cat-3.jpg", // Replace with actual image source
      price: "Free", // Update price as needed
      rating: 4,
      courseName: "Quran Translation (Tafseer)",
      instructor: "Ustadh Omar",
      duration: "Flexible",
      students: "200 Students",
      link: "/quran-translation", // Link for 'Read More'
    },
    {
      id: 4,
      imgSrc: "img/cat-4.jpg", // Replace with actual image source
      price: "Free", // Update price as needed
      rating: 4,
      courseName: "Quran Memorization (Hifz Quran)",
      instructor: "Ustadh Ahmad",
      duration: "Flexible",
      students: "180 Students",
      link: "/memorization", // Link for 'Read More'
    },
    {
      id: 5,
      imgSrc: "img/cat-5.jpg", // Replace with actual image source
      price: "Free", // Update price as needed
      rating: 5,
      courseName: "Islamic Studies (Deeniyaat)",
      instructor: "Dr. Zainab",
      duration: "Flexible",
      students: "80 Students",
      link: "/islamic-studies", // Link for 'Read More'
    },
    {
      id: 6,
      imgSrc: "img/cat-6.png", // Replace with actual image source
      price: "Free", // Update price as needed
      rating: 5,
      courseName: "Shariah Rules (Ahkaam Shariah)",
      instructor: "Ustadh Fatima",
      duration: "Flexible",
      students: "60 Students",
      link: "/islamic-rules", // Link for 'Read More'
    },
    {
      id: 7,
      imgSrc: "img/cat-7.jpg", // Replace with actual image source
      price: "Free", // Update price as needed
      rating: 5,
      courseName: "Islamic Ethics (Akhlaaq)",
      instructor: "Ustadh Ali",
      duration: "Flexible",
      students: "100 Students",
      link: "/islamic-ethics", // Link for 'Read More'
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Courses
          </h6>
          <h1 className="mb-5">Popular Quranic Courses</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {courses.map((course) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              key={course.id}
            >
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src={course.imgSrc}
                    alt={course.courseName}
                  />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                    <a
                      href={course.link} // Dynamic 'Read More' link
                      className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                      style={{ borderRadius: "30px 0 0 30px" }}
                    >
                      Read More
                    </a>
                    <a
                      href={"/contact"} // Dynamic course join link
                      className="flex-shrink-0 btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "0 30px 30px 0" }}
                    >
                      Join Now
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h5 className="mb-4">{course.courseName}</h5>
                  <div className="mb-3">
                    {[...Array(course.rating)].map((_, index) => (
                      <small
                        key={index}
                        className="fa fa-star text-primary"
                      ></small>
                    ))}
                    <small>({course.rating * 24})</small>
                  </div>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-clock text-primary me-2"></i>
                    Duration: {course.duration}
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2"></i>
                    {course.students}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
