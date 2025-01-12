import React from "react";

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Moulana Qari Fida Hussain",
      designation: "Proprietor",
      roleIcon: "fa-users", // Icon representing role
      bgColor: "#00796B", // Teal background for distinction
    },
    {
      id: 2,
      name: "SIKANDAR Ali",
      designation: "Social Media Manager",
      roleIcon: "fa-share-alt", // Social media icon
      bgColor: "#3F51B5", // Blue background for social media
    },
    {
      id: 3,
      name: "MUMTAZ ALI",
      designation: "Audio Editor (Mixing & Mastering)",
      roleIcon: "fa-microphone", // Microphone icon for audio editing
      bgColor: "#FF5722", // Orange background for audio
    },
    {
      id: 4,
      name: "Ali Murtaza",
      designation: "Video Editor",
      roleIcon: "fa-video", // Video camera icon
      bgColor: "#2196F3", // Blue background for video editing
    },
    {
      id: 5,
      name: "Raza Abbas",
      designation: "Graphic Designer",
      roleIcon: "fa-paint-brush", // Paintbrush for graphic design
      bgColor: "#9C27B0", // Purple background for graphic design
    },
    {
      id: 6,
      name: "Shahzain",
      designation: "Podcasting & Cameraman",
      roleIcon: "fa-headphones", // Headphones for podcasting
      bgColor: "#FFC107", // Yellow background for podcasting
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Our Team
          </h6>
          <h1 className="mb-5">Meet Our Experts</h1>
        </div>
        <div className="row g-4">
          {instructors.map((instructor) => (
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={`0.${instructor.id}s`}
              key={instructor.id}
            >
              <div
                className="team-item team-card"
                style={{
                  backgroundColor: "#fff", // White background for card
                  padding: "30px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // Subtle shadow
                  textAlign: "center",
                  transition: "transform 0.3s ease-in-out", // Smooth hover effect
                }}
              >
                <div
                  className="icon"
                  style={{
                    fontSize: "50px",
                    marginBottom: "20px",
                    color: instructor.bgColor, // Icon color matching role
                  }}
                >
                  <i className={`fas ${instructor.roleIcon}`}></i>
                </div>
                <div
                  className="team-info"
                  style={{
                    color: "#333", // Text color for readability
                  }}
                >
                  <h5
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px", // Larger name font
                      color: "#333", // Dark text for contrast
                    }}
                  >
                    {instructor.name}
                  </h5>
                  <small
                    style={{
                      fontStyle: "italic",
                      fontSize: "14px",
                      color: "#777", // Lighter color for the designation
                    }}
                  >
                    {instructor.designation}
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

export default Instructors;
