import React from "react";

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      imgSrc: "img/cat-1.jpg",
      price: "$149.00",
      rating: 5,
      courseName: "Quran Memorization for Beginners",
      instructor: "Ustadh Ali",
      duration: "10 Weeks",
      students: "150 Students",
    },
    {
      id: 2,
      imgSrc: "img/cat-1.jpg",
      price: "$129.00",
      rating: 5,
      courseName: "Tafseer of Surah Al-Fatiha",
      instructor: "Ustadh Sarah",
      duration: "6 Weeks",
      students: "120 Students",
    },
    {
      id: 3,
      imgSrc: "img/cat-1.jpg",
      price: "$99.00",
      rating: 4,
      courseName: "Introduction to Quranic Arabic",
      instructor: "Ustadh Omar",
      duration: "8 Weeks",
      students: "200 Students",
    },
    {
      id: 4,
      imgSrc: "img/cat-1.jpg",
      price: "$159.00",
      rating: 4,
      courseName: "Quran Translation and Tafseer",
      instructor: "Ustadh Ahmad",
      duration: "12 Weeks",
      students: "180 Students",
    },
    {
      id: 5,
      imgSrc: "img/cat-1.jpg",
      price: "$179.00",
      rating: 5,
      courseName: "Advanced Tafseer Studies",
      instructor: "Dr. Zainab",
      duration: "14 Weeks",
      students: "80 Students",
    },
    {
      id: 6,
      imgSrc: "img/cat-1.jpg",
      price: "$199.00",
      rating: 5,
      courseName: "Hifz-e-Quran",
      instructor: "Ustadh Fatima",
      duration: "Variable",
      students: "60 Students",
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
                      href="/course-details"
                      className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                      style={{ borderRadius: "30px 0 0 30px" }}
                    >
                      Read More
                    </a>
                    <a
                      href="/join-course"
                      className="flex-shrink-0 btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "0 30px 30px 0" }}
                    >
                      Join Now
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h3 className="mb-0">{course.price}</h3>
                  <div className="mb-3">
                    {[...Array(course.rating)].map((_, index) => (
                      <small
                        key={index}
                        className="fa fa-star text-primary"
                      ></small>
                    ))}
                    <small>({course.rating * 24})</small>
                  </div>
                  <h5 className="mb-4">{course.courseName}</h5>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-user-tie text-primary me-2"></i>
                    {course.instructor}
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-clock text-primary me-2"></i>
                    {course.duration}
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
