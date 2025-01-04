// src/components/MafatihRecording.js
import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const MafatihRecording = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Mafatih al-Jinan Recording", active: true },
  ];

  const recordings = [
    {
      title: "Dua Kumayl",
      description: "A heartfelt supplication to seek forgiveness and mercy.",
      youtubeUrl:
        "https://www.youtube.com/embed/JHlbOBVEm9s?si=B5DPEKWT4IW_pa3d&controls=0", // YouTube embed link
    },
    {
      title: "Dua Al-Iftitah",
      description: "A beautiful prayer for the holy month of Ramadan.",
      youtubeUrl:
        "https://www.youtube.com/embed/JHlbOBVEm9s?si=B5DPEKWT4IW_pa3d&controls=0", // YouTube embed link
    },
    {
      title: "Ziyarat Ashura",
      description: "A powerful ziyarat dedicated to Imam Hussain (AS).",
      youtubeUrl:
        "https://www.youtube.com/embed/JHlbOBVEm9s?si=B5DPEKWT4IW_pa3d&controls=0", // YouTube embed link
    },
  ];

  return (
    <div>
      <PageHeader
        title="Mafatih al-Jinan Recording"
        breadcrumbItems={breadcrumbItems}
      />

      {/* Main Content Section */}
      <div className="container py-5">
        <h2 className="mb-4">Mafatih al-Jinan Recording</h2>
        <p>
          Listen to the recordings of the beautiful supplications from Mafatih
          al-Jinan. These recordings help in connecting with the teachings of
          Islam and seeking divine blessings.
        </p>
        <p>
          Each supplication is carefully recorded for spiritual reflection and
          prayer. You can listen to these recordings anytime to enhance your
          connection with Allah.
        </p>

        {/* Recordings Section */}
        <div className="recordings mt-5">
          <h3 className="mb-4">Available Recordings</h3>
          <div className="row">
            {recordings.map((recording, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{recording.title}</h5>
                    <p className="card-text">{recording.description}</p>
                    {/* Embed YouTube video */}
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        title={recording.title}
                        className="embed-responsive-item"
                        src={recording.youtubeUrl}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials mt-5">
          <h3 className="mb-4">What Our Listeners Say</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial p-3 border rounded">
                <p>
                  "Listening to the recordings of Mafatih al-Jinan has brought
                  immense peace and spiritual connection into my life."
                </p>
                <strong>- Fatima H.</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial p-3 border rounded">
                <p>
                  "The quality and clarity of these recordings are outstanding.
                  Highly recommended for everyone."
                </p>
                <strong>- Ali R.</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial p-3 border rounded">
                <p>
                  "I have made these recordings a part of my daily routine. They
                  are truly uplifting."
                </p>
                <strong>- Zainab K.</strong>
              </div>
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

export default MafatihRecording;
