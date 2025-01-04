import React from "react";
import PageHeader from "../../Pages Header/PageHeader";
import Contact from "../../Contact/Contact";
import PopularCourses from "../Home Page/LandingPage/Popular Courses/PopularCourses";

const SahifaSajjadiaRecording = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Religious Services", link: "/religious-services" },
    { label: "Sahifa Sajjadia Recording", active: true },
  ];

  // YouTube link for Sahifa Sajjadia recordings (same link for all duas)
  const youtubeUrl =
    "https://www.youtube.com/embed/JHlbOBVEm9s?si=B5DPEKWT4IW_pa3d&controls=0";

  // List of duas (supplications)
  const recordings = [
    { dua: "Dua 1" },
    { dua: "Dua 2" },
    { dua: "Dua 3" },
    { dua: "Dua 4" },
  ];

  return (
    <div>
      <PageHeader
        title="Sahifa Sajjadia Recording"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container py-5">
        <h2 className="mb-4">Sahifa Sajjadia Recording</h2>
        <p>
          Explore the recordings of the Sahifa Sajjadia, the beautiful prayers
          of Imam Ali Zayn al-Abidin (A.S). This is a powerful collection of
          supplications that help in deepening one’s spirituality.
        </p>
        <p>
          These recordings can be played and listened to as part of your daily
          worship or in times of need for spiritual comfort.
        </p>

        {/* List of Supplications and YouTube Embed */}
        <div>
          <h4>Available Recordings</h4>
          <ul>
            {recordings.map((recording, index) => (
              <li key={index}>
                <p>{recording.dua}</p>
                <div className="mb-3">
                  <iframe
                    width="100%"
                    height="315"
                    src={youtubeUrl}
                    title={`YouTube video for ${recording.dua}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Contact />
      <PopularCourses />
    </div>
  );
};

export default SahifaSajjadiaRecording;
