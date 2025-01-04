import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const NahjulBalaghaRecording = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Nahjul Balagha Recording", active: true },
  ];

  // Define the fixed YouTube URL
  const youtubeLink =
    "https://www.youtube.com/embed/JHlbOBVEm9s?si=B5DPEKWT4IW_pa3d&controls=0";

  const upcomingRecordings = [
    {
      title: "Sermon 1 - Justice and Leadership",
      date: "January 25, 2025",
      time: "5:00 PM",
      description:
        "A deep reflection on justice and leadership from Imam Ali (A.S).",
      youtubeUrl: youtubeLink,
    },
    {
      title: "Letter 2 - Governance and Responsibility",
      date: "February 15, 2025",
      time: "5:00 PM",
      description:
        "A powerful letter on the duties of governance and social responsibility.",
      youtubeUrl: youtubeLink,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Nahjul Balagha Recording"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container py-5">
        <h2 className="mb-4">Nahjul Balagha Recording</h2>
        <p>
          Nahjul Balagha, the famous collection of sermons, letters, and sayings
          of Imam Ali (A.S), is now available in audio recordings. These
          recordings provide insights into the teachings of Imam Ali (A.S) and
          his guidance on justice, leadership, and spirituality.
        </p>
        <p>
          You can listen to these recordings to understand and reflect on the
          wisdom imparted by Imam Ali (A.S). We offer both audio and textual
          resources to enhance your learning.
        </p>

        {/* Upcoming Recordings Section */}
        <div className="upcoming-recordings mt-5">
          <h3 className="mb-4">Upcoming Nahjul Balagha Recordings</h3>
          <div className="row">
            {upcomingRecordings.map((recording, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{recording.title}</h5>
                    <p className="card-text">
                      <strong>Date:</strong> {recording.date} <br />
                      <strong>Time:</strong> {recording.time} <br />
                      <strong>Description:</strong> {recording.description}
                    </p>
                    {/* YouTube Video Embed */}
                    <div className="mb-3">
                      <iframe
                        width="100%"
                        height="315"
                        src={recording.youtubeUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
          <h3 className="mb-4">What Listeners Are Saying</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial p-3 border rounded">
                <p>
                  "The teachings of Imam Ali (A.S) in Nahjul Balagha have
                  deepened my understanding of justice and governance. Truly
                  enlightening!"
                </p>
                <strong>- Hassan M.</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial p-3 border rounded">
                <p>
                  "These audio recordings are a blessing. They help me reflect
                  on spiritual matters every day."
                </p>
                <strong>- Sarah F.</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial p-3 border rounded">
                <p>
                  "The profound wisdom of Imam Ali (A.S) never ceases to amaze
                  me. This collection is a treasure."
                </p>
                <strong>- Ali R.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <PopularCourses />
    </div>
  );
};

export default NahjulBalaghaRecording;
