import React from "react";

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      imgSrc: "img/team-1.jpg",
      name: "Instructor Name",
      designation: "Designation",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      imgSrc: "img/team-1.jpg",
      name: "Instructor Name",
      designation: "Designation",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      imgSrc: "img/team-1.jpg",
      name: "Instructor Name",
      designation: "Designation",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      imgSrc: "img/team-1.jpg",
      name: "Instructor Name",
      designation: "Designation",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Instructors
          </h6>
          <h1 className="mb-5">Expert Instructors</h1>
        </div>
        <div className="row g-4">
          {instructors.map((instructor) => (
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={`0.${instructor.id}s`}
              key={instructor.id}
            >
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src={instructor.imgSrc}
                    alt={instructor.name}
                  />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a
                      className="btn btn-sm-square btn-primary mx-1"
                      href={instructor.socialLinks.facebook}
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-sm-square btn-primary mx-1"
                      href={instructor.socialLinks.twitter}
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-sm-square btn-primary mx-1"
                      href={instructor.socialLinks.instagram}
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">{instructor.name}</h5>
                  <small>{instructor.designation}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
